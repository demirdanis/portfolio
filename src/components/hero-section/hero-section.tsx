import { IconGithub, IconLinkedin, IconMail } from "../icons/tailwind-icons";

import Button from "../ui/button";
import type { HeroSectionProps } from "./hero-section.types";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC<HeroSectionProps> = ({
  personal,
  socialMedia,
}) => (
  <section
    id="home"
    className="lg:h-screen  lg:h-[700px] lg:max-h-[700px] flex items-center relative overflow-hidden pt-24 pb-8 lg:pt-32 lg:pt-24 lg:-mt-24"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20"></div>
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Mobilde foto üstte */}
        <div className="block lg:hidden mb-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl">
                <Image
                  src={
                    (process.env.NEXT_PUBLIC_BASE_PATH || "") +
                    "/img/demir.webp"
                  }
                  alt={personal.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500/20 rounded-full blur-xl animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            {/* Availability badge */}
           
            <p className="text-blue-400 text-lg font-medium mb-1 mt-0">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 mt-0">
              {personal.firstName}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {personal.lastName}
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 mb-2 mt-0">
              {personal.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              {personal.bio}
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-4">
            <a
              href={
                (process.env.NEXT_PUBLIC_BASE_PATH || "") +
                "/img/Demir_Danis_CV_EN_2026_05_05.pdf"
              }
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="group w-full h-12">
                Download CV
              </Button>
            </a>
            <div className="flex gap-2">
    {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-12 h-12 bg-gray-800/50 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                {social.icon === "linkedin" && (
                  <IconLinkedin
                    width={20}
                    height={20}
                    className="text-gray-300"
                  />
                )}
                {social.icon === "github" && (
                  <IconGithub
                    width={20}
                    height={20}
                    className="text-gray-300"
                  />
                )}
                {social.icon === "mail" && (
                  <IconMail width={20} height={20} className="text-gray-300" />
                )}
              </a>
            ))}
            </div>
         
          </div>
         
        </div>
        {/* Sadece desktopta sağda büyük foto */}
        <div className="hidden lg:flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl">
              <Image
                src={
                  (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/demir.webp"
                }
                alt={personal.name}
                width={384}
                height={384}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    
    </div>
  </section>
);

export default HeroSection;
