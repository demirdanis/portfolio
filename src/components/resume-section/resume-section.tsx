"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import React, { useState } from "react";

import Card from "../ui/card";
import type { ResumeSectionProps } from "./resume-section.types";
import SectionTitle from "../ui/section-title";

const INITIAL_EXP = 2;

const ResumeSection: React.FC<ResumeSectionProps> = ({
  experience,
  education,
}) => {
  const [showAllExp, setShowAllExp] = useState(false);
  const visibleExp = showAllExp ? experience : experience.slice(0, INITIAL_EXP);

  return (
  <section id="resume" className="py-8 lg:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="My professional journey">Resume</SectionTitle>
      <div className="grid grid-cols-1 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Briefcase size={24} className="mr-3 text-blue-400" />
            Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleExp.map((exp, index) => (
              <Card key={`exp${exp.id}`} className="p-6 relative col-span-1">
                <div
                  className="absolute left-0 top-6 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                  style={{
                    gridRow: Math.floor(index / 2) + 1,
                    gridColumn: (index % 2) + 1,
                  }}
                ></div>
                <div className="ml-6">
                  <div className="text-blue-400 font-medium text-sm mb-1">
                    {exp.year}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-gray-400 mb-3">
                    {exp.company} - {exp.location}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More / Show Less experience */}
          {experience.length > INITIAL_EXP && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllExp((v) => !v)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-300 font-medium text-sm"
              >
                {showAllExp
                  ? "Show Less"
                  : `Show More (${experience.length - INITIAL_EXP} more)`}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={16}
                  height={16}
                  style={{ transition: "transform 0.3s", transform: showAllExp ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <GraduationCap size={24} className="mr-3 text-blue-400" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: Math.ceil(education.length / 2) }).map(
              (_, rowIdx) => (
                <React.Fragment key={rowIdx}>
                  {[education[rowIdx * 2], education[rowIdx * 2 + 1]]
                    .filter(Boolean)
                    .map((edu, colIdx) => (
                      <Card key={colIdx} className="p-6 relative">
                        <div className="absolute left-0 top-6 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                        <div className="ml-6">
                          <div className="text-blue-400 font-medium text-sm mb-1">
                            {edu.year}
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-gray-400 mb-3">
                            {edu.school} - {edu.location}
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </Card>
                    ))}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ResumeSection;
