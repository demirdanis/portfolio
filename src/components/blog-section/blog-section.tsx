"use client";

import React, { useState } from "react";

import type { BlogSectionProps } from "./blog-section.types";
import Card from "../ui/card";
import Link from "next/link";
import SectionTitle from "../ui/section-title";

const INITIAL_COUNT = 4;

const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? blogs : blogs.slice(0, INITIAL_COUNT);

  return (
    <section id="blog" className="py-8 lg:py-16 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Thoughts, insights & technical deep-dives">
          Blog
        </SectionTitle>

        {/* Blog grid — 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((blog) => (
            <Card
              key={blog.id}
              className="overflow-hidden flex flex-col group"
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden bg-gray-700 flex-shrink-0">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-900/70 text-gray-200 border border-gray-600/50 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-gray-500 text-xs mb-2 font-medium">
                  {blog.date}&nbsp;·&nbsp;{blog.readTime} read
                </p>
                <h3 className="text-white font-bold text-base leading-snug mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                  {blog.shortDesc}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={12}
                    height={12}
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More / Show Less */}
        {blogs.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-300 font-medium text-sm"
            >
              {showAll ? "Show Less" : `Show More (${blogs.length - INITIAL_COUNT} more)`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={16}
                height={16}
                style={{ transition: "transform 0.3s", transform: showAll ? "rotate(180deg)" : "rotate(0deg)" }}
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
    </section>
  );
};

export default BlogSection;
