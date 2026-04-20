"use client";

import { PHRASES, Phrase } from "@/service/phases";
import React, { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";

const LS_KEY = "ep_learned_phrases";

function useLearnedPhrases() {
  const [learned, setLearned] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setLearned(new Set(JSON.parse(raw) as string[]));
    } catch {}
  }, []);

  const toggle = useCallback((phrase: string) => {
    setLearned((prev) => {
      const next = new Set(prev);
      if (next.has(phrase)) {
        next.delete(phrase);
      } else {
        next.add(phrase);
      }
      try {
        localStorage.setItem(LS_KEY, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }, []);

  return { learned, toggle };
}

// Chrome Android does not fire onboundary; this builds a timer-based word fallback.
function buildWordFallback(
  text: string,
  boundaryFired: { current: boolean },
  fallbackTimer: { current: ReturnType<typeof setTimeout> | null },
  rateRef: React.MutableRefObject<number>,
  setHighlight: (h: { text: string; charIndex: number; charLength: number } | null) => void,
) {
  const tokens = text.split(/(\s+)/);
  let charPos = 0;
  let tokenIdx = 0;

  function next() {
    if (boundaryFired.current) return;
    while (tokenIdx < tokens.length && /^\s*$/.test(tokens[tokenIdx])) {
      charPos += tokens[tokenIdx].length;
      tokenIdx++;
    }
    if (tokenIdx >= tokens.length) return;
    const word = tokens[tokenIdx];
    setHighlight({ text, charIndex: charPos, charLength: word.length });
    charPos += word.length;
    tokenIdx++;
    const ms = Math.max(180, word.length * 65) / rateRef.current;
    fallbackTimer.current = setTimeout(next, ms);
  }
  return next;
}

function useTTS(rate: number) {
  const [speaking, setSpeaking] = useState<string | null>(null);
  const [highlight, setHighlight] = useState<{ text: string; charIndex: number; charLength: number } | null>(null);
  const rateRef = useRef(rate);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => { rateRef.current = rate; }, [rate]);

  const clearFallback = useCallback(() => {
    if (fallbackTimer.current !== null) {
      clearTimeout(fallbackTimer.current);
      fallbackTimer.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    clearFallback();
    setSpeaking(null);
    setHighlight(null);
  }, [clearFallback]);

  const speak = useCallback((text: string, key: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    clearFallback();
    if (speaking === key) { setSpeaking(null); setHighlight(null); return; }
    const boundaryFired = { current: false };
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = rateRef.current;
    const runFallback = buildWordFallback(text, boundaryFired, fallbackTimer, rateRef, setHighlight);
    utter.onstart = () => {
      fallbackTimer.current = setTimeout(() => {
        if (!boundaryFired.current) runFallback();
      }, 250);
    };
    utter.onboundary = (e) => {
      if (e.name === "word") {
        if (!boundaryFired.current) { boundaryFired.current = true; clearFallback(); }
        setHighlight({ text, charIndex: e.charIndex, charLength: e.charLength ?? 0 });
      }
    };
    utter.onend = () => { clearFallback(); setSpeaking(null); setHighlight(null); };
    utter.onerror = () => { clearFallback(); setSpeaking(null); setHighlight(null); };
    setSpeaking(key);
    window.speechSynthesis.speak(utter);
  }, [speaking, clearFallback]);

  const speakAll = useCallback((texts: string[], key: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    clearFallback();
    if (speaking === key) { setSpeaking(null); setHighlight(null); return; }

    let index = 0;
    setSpeaking(key);

    function speakNext() {
      if (index >= texts.length) { setSpeaking(null); setHighlight(null); return; }
      const text = texts[index];
      const boundaryFired = { current: false };
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-US";
      utter.rate = rateRef.current;
      const runFallback = buildWordFallback(text, boundaryFired, fallbackTimer, rateRef, setHighlight);
      utter.onstart = () => {
        fallbackTimer.current = setTimeout(() => {
          if (!boundaryFired.current) runFallback();
        }, 250);
      };
      utter.onboundary = (e) => {
        if (e.name === "word") {
          if (!boundaryFired.current) { boundaryFired.current = true; clearFallback(); }
          setHighlight({ text, charIndex: e.charIndex, charLength: e.charLength ?? 0 });
        }
      };
      utter.onend = () => { clearFallback(); index++; speakNext(); };
      utter.onerror = () => { clearFallback(); setSpeaking(null); setHighlight(null); };
      window.speechSynthesis.speak(utter);
    }

    speakNext();
  }, [speaking, clearFallback]);

  return { speaking, speak, speakAll, stop, highlight };
}



interface PhraseCardProps {
  item: Phrase;
  isLearned: boolean;
  onToggleLearned: () => void;
  speaking: string | null;
  onSpeak: (text: string, key: string) => void;
  onSpeakAll: (texts: string[], key: string) => void;
  highlight: { text: string; charIndex: number; charLength: number } | null;
}

function PlayButton({ active, onClick }: { active: boolean; onClick: (e: React.MouseEvent) => void }) {
  return (
    <button
      onClick={onClick}
      title={active ? "Stop" : "Listen"}
      className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-200 ${
        active
          ? "bg-blue-500 border-blue-400 text-white"
          : "border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400"
      }`}
    >
      {active ? (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="4" width="5" height="16" rx="1" />
          <rect x="15" y="4" width="5" height="16" rx="1" />
        </svg>
      ) : (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      )}
    </button>
  );
}

function LearnedToggle({ learned, onToggle }: { learned: boolean; onToggle: (e: React.MouseEvent) => void }) {
  return (
    <button
      onClick={onToggle}
      title={learned ? "Mark as not learned" : "Mark as learned"}
      className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-200 ${
        learned
          ? "bg-emerald-500 border-emerald-400 text-white"
          : "border-gray-600 text-gray-400 hover:border-emerald-400 hover:text-emerald-400"
      }`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,6 9,17 4,12" />
      </svg>
    </button>
  );
}

function HighlightedText({
  text,
  highlight,
}: {
  text: string;
  highlight: { text: string; charIndex: number; charLength: number } | null;
}) {
  if (!highlight || highlight.text !== text || highlight.charLength === 0) return <>{text}</>;
  const { charIndex, charLength } = highlight;
  const before = text.slice(0, charIndex);
  const word = text.slice(charIndex, charIndex + charLength);
  const after = text.slice(charIndex + charLength);
  return (
    <>
      {before}
      <mark className="bg-yellow-400/30 text-yellow-100 rounded px-0.5 not-italic">{word}</mark>
      {after}
    </>
  );
}

function PhraseCard({ item, isLearned, onToggleLearned, speaking, onSpeak, onSpeakAll, highlight }: PhraseCardProps) {
  const [open, setOpen] = useState(false);
  const phraseKey = `phrase:${item.phrase}`;

  return (
    <div className={`rounded-xl overflow-hidden transition-all duration-200 border ${
      isLearned
        ? "bg-emerald-900/10 border-emerald-700/40"
        : "bg-gray-800 border-gray-700 hover:border-blue-500/50"
    }`}>
      {/* Header row */}
      <div className="flex items-center gap-2 px-4 py-3">
        {/* Learned toggle */}
        <LearnedToggle
          learned={isLearned}
          onToggle={(e) => { e.stopPropagation(); onToggleLearned(); }}
        />

        {/* Play button for the phrase title — reads everything in sequence */}
        <PlayButton
          active={speaking === phraseKey}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
            const texts = [
              item.phrase,
              "Definition.", item.definition,
              "Synonyms.", item.synonyms,
              "Examples.", ...item.examples,
            ];
            onSpeakAll(texts, phraseKey);
          }}
        />

        {/* Phrase title — clicking expands */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`flex-1 text-left text-sm font-semibold transition-colors duration-200 ${
            isLearned ? "text-emerald-300 line-through decoration-emerald-600/60" : "text-white hover:text-blue-400"
          }`}
          aria-expanded={open}
        >
          {item.phrase}
        </button>

        {/* Expand chevron */}
        <span
          className="flex-shrink-0 text-gray-500 transition-transform duration-300 pointer-events-none"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </span>
      </div>

      {/* Expanded content */}
      {open && (
        <div className="px-4 pb-4 border-t border-gray-700/50">
          <div className="pt-3 space-y-3">
            {/* Definition */}
            <div className="flex items-start gap-2">
              <PlayButton
                active={speaking === `def:${item.phrase}`}
                onClick={(e) => { e.stopPropagation(); onSpeak(item.definition, `def:${item.phrase}`); }}
              />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Definition</span>
                <p className="mt-0.5 text-gray-300 text-sm leading-relaxed"><HighlightedText text={item.definition} highlight={highlight} /></p>
              </div>
            </div>

            {/* Synonyms */}
            <div className="flex items-start gap-2">
              <PlayButton
                active={speaking === `syn:${item.phrase}`}
                onClick={(e) => { e.stopPropagation(); onSpeak(item.synonyms, `syn:${item.phrase}`); }}
              />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">Synonyms</span>
                <p className="mt-0.5 text-gray-400 text-sm"><HighlightedText text={item.synonyms} highlight={highlight} /></p>
              </div>
            </div>

            {/* Examples */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Examples</span>
              <ul className="mt-2 space-y-1.5">
                {item.examples.map((ex, i) => {
                  const exKey = `ex:${item.phrase}:${i}`;
                  return (
                    <li key={i} className="flex items-start gap-2">
                      <PlayButton
                        active={speaking === exKey}
                        onClick={(e) => { e.stopPropagation(); onSpeak(ex, exKey); }}
                      />
                      <span className="text-sm text-gray-300 pt-0.5"><HighlightedText text={ex} highlight={highlight} /></span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const SPEED_OPTIONS = [0.5, 0.8, 1, 1.2, 1.5, 2];

function ProgressCard({
  total,
  learned,
  rate,
  onRateChange,
  bare = false,
}: {
  total: number;
  learned: number;
  rate: number;
  onRateChange: (r: number) => void;
  bare?: boolean;
}) {
  const remaining = total - learned;
  const pct = total === 0 ? 0 : Math.round((learned / total) * 100);

  return (
    <div className={bare ? "w-full" : "w-52 bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-4"}>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Your Progress</p>

      {/* Circular-ish progress ring */}
      <div className="flex items-center justify-center mb-3">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" fill="none" stroke="#374151" strokeWidth="7" />
            <circle
              cx="40" cy="40" r="32"
              fill="none"
              stroke="url(#prog-grad)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 32}`}
              strokeDashoffset={`${2 * Math.PI * 32 * (1 - pct / 100)}`}
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />
            <defs>
              <linearGradient id="prog-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-white">{pct}%</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-400">Total</span>
          <span className="font-semibold text-white">{total}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-emerald-400">Learned</span>
          <span className="font-semibold text-emerald-400">{learned}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-amber-400">Remaining</span>
          <span className="font-semibold text-amber-400">{remaining}</span>
        </div>
      </div>

      {/* Linear progress bar */}
      <div className="mt-3 h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Speed control */}
      <div className="mt-4 border-t border-gray-700 pt-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Speed</p>
        <div className="flex flex-wrap gap-1">
          {SPEED_OPTIONS.map((s) => (
            <button
              key={s}
              onClick={() => onRateChange(s)}
              className={`px-2 py-0.5 text-xs rounded-md border transition-all duration-150 ${
                rate === s
                  ? "bg-blue-500 border-blue-400 text-white font-semibold"
                  : "border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/#resume" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/#blog" },
];

export default function EnglishPractisePage() {
  const [rate, setRate] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { learned, toggle } = useLearnedPhrases();
  const { speaking, speak, speakAll, stop, highlight } = useTTS(rate);

  useEffect(() => () => stop(), [stop]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Sticky top bar */}
      <header className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <Link href="/">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/logo.webp`}
              alt="Logo"
              className="h-12"
            />
          </Link>
          {/* Mobile progress button */}
          <button
            className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-xl border border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
            onClick={() => setDrawerOpen(true)}
            title="View progress"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </button>
        </div>
      </header>

      {/* Desktop fixed progress card */}
      <div className="hidden md:block fixed top-24 right-4 z-40">
        <ProgressCard total={PHRASES.length} learned={learned.size} rate={rate} onRateChange={setRate} />
      </div>

      {/* Mobile progress drawer */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 md:hidden transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-700/80 z-50 md:hidden flex flex-col overflow-y-auto shadow-2xl transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-800 flex-shrink-0">
          <p className="text-sm font-semibold text-white">Progress</p>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <ProgressCard total={PHRASES.length} learned={learned.size} rate={rate} onRateChange={setRate} bare />
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
         
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              English Practice
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Common phrases and idioms used in tech teams. Click to expand,{" "}
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-600 text-gray-400 align-middle mx-0.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
            </span>{" "}
            to listen,{" "}
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-600 text-gray-400 align-middle mx-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12" /></svg>
            </span>{" "}
            to mark as learned.
          </p>
        </div>

        {/* Accordion grid — right padding leaves room for progress card on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 items-start">
          {PHRASES.map((item) => (
            <PhraseCard
              key={item.phrase}
              item={item}
              isLearned={learned.has(item.phrase)}
              onToggleLearned={() => toggle(item.phrase)}
              speaking={speaking}
              onSpeak={speak}
              onSpeakAll={speakAll}
              highlight={highlight}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Link href="/">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/logo.webp`}
                alt="Logo"
                className="h-12"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-blue-400 text-sm font-medium">English Practice</span>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2025 Demir Danış. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
