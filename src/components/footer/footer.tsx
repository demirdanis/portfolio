import { IconGithub, IconLinkedin, IconMail } from "../icons/tailwind-icons";

import type { FooterProps } from "./footer.types";
import Link from "next/link";
import React from "react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/#resume" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/#blog" },
  { label: "English Practice", href: "/english-practice" },
];

export default function Footer({
  personal,
  socialMedia,
}: Readonly<FooterProps>) {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/logo.webp`}
              alt="Logo"
              className="h-12"
            />
          </div>
          <p className="text-gray-400 mb-4">
            Building exceptional digital experiences with modern technologies
          </p>
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
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon === "linkedin" && (
                  <IconLinkedin width={20} height={20} />
                )}
                {social.icon === "github" && (
                  <IconGithub width={20} height={20} />
                )}
                {social.icon === "mail" && <IconMail width={20} height={20} />}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2025 {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
