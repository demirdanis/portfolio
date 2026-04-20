import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  centered?: boolean;
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  subtitle,
  centered = true,
}) => (
  <div className={`mb-4 lg:mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
      {children}
    </h2>
    {subtitle && (
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6 mx-auto"></div>
  </div>
);

export default SectionTitle;
