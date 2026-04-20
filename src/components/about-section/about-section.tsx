import type { AboutSectionProps } from "./about-section.types";
import Card from "../ui/card";
import React from "react";
import SectionTitle from "../ui/section-title";

const CATEGORY_COLORS: Record<string, string> = {
  "Leadership & Management":
    "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Frontend: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Backend: "bg-green-500/20 text-green-300 border-green-500/30",
  "Infrastructure & DevOps":
    "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Databases: "bg-pink-500/20 text-pink-300 border-pink-500/30",
};

const DEFAULT_COLOR = "bg-gray-500/20 text-gray-300 border-gray-500/30";

const AboutSection: React.FC<AboutSectionProps> = ({ personal, skills }) => {
  const grouped = skills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section id="about" className="py-8 lg:py-16 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Learn more about me">About Me</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="space-y-6"> <Card className="p-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {personal.longBio}
            </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Personal Info
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name</span>
                  <span className="text-white font-medium">{personal.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white">{personal.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-white">{personal.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">LinkedIn</span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/demir-danis
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">GitHub</span>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    github.com/demirdanis
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right column — grouped skill tags */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            {Object.entries(grouped).map(([category, names]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {names.map((name) => (
                    <span
                      key={name}
                      className={`px-3 py-1.5 text-sm rounded-full border font-medium ${
                        CATEGORY_COLORS[category] ?? DEFAULT_COLOR
                      }`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
