import Card from "../ui/card";
import React from "react";
import SectionTitle from "../ui/section-title";
import type { ServicesSectionProps } from "./services-section.types";

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => (
  <section id="services" className="py-8 lg:py-16 bg-gray-800/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="My core technical and leadership strengths">
        Featured Skills
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="p-6 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {/* İkonlar için kendi ikon componentlerinizi kullanabilirsiniz */}
              {service.icon === "users" && (
                <span className="text-white">👥</span>
              )}
              {service.icon === "code" && (
                <span className="text-white">💻</span>
              )}
              {service.icon === "target" && (
                <span className="text-white">🎯</span>
              )}
              {service.icon === "briefcase" && (
                <span className="text-white">💼</span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
