"use client";

import AboutSection from "../components/about-section/about-section";
import BlogSection from "../components/blog-section/blog-section";
import Footer from "../components/footer/footer";
import HeroSection from "../components/hero-section/hero-section";
import Navigation from "../components/navigation/navigation";
import PortfolioSection from "../components/portfolio-section/portfolio-section";
import React from "react";
import ResumeSection from "../components/resume-section/resume-section";
import portfolioService from "../service/portfolio.service";

const data = portfolioService.getPortfolioData();

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation
        data={data}
        activeSection={"home"}
        setActiveSection={() => {}}
        isMenuOpen={false}
        setIsMenuOpen={() => {}}
      />
      <HeroSection
        personal={data.personal}
        socialMedia={data.socialMedia}
        stats={data.stats}
      />
      <AboutSection personal={data.personal} skills={data.skills} />
      <ResumeSection experience={data.experience} education={data.education} />
      <PortfolioSection projects={data.projects} />
      <BlogSection blogs={data.blogs} />
      <Footer personal={data.personal} socialMedia={data.socialMedia} />
    </div>
  );
}
