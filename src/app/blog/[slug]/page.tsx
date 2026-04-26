import type { BlogSection } from "../../../types/portfolio-data.types";
import Link from "next/link";
import { notFound } from "next/navigation";
import portfolioService from "../../../service/portfolio.service";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const data = portfolioService.getPortfolioData();
  return data.blogs.map((blog) => ({ slug: blog.slug }));
}

function renderSection(section: BlogSection, index: number) {
  if (section.type === "heading") {
    return (
      <h2
        key={index}
        className="text-2xl font-bold text-white mt-10 mb-4"
      >
        {section.content as string}
      </h2>
    );
  }

  if (section.type === "paragraph") {
    return (
      <p
        key={index}
        className="text-gray-300 text-lg leading-relaxed mb-6"
      >
        {section.content as string}
      </p>
    );
  }

  if (section.type === "list") {
    return (
      <ul key={index} className="mb-6 space-y-2">
        {(section.content as string[]).map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
            <span className="text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (section.type === "code") {
    return (
      <pre
        key={index}
        className="bg-gray-900 border border-gray-700 rounded-xl p-6 overflow-x-auto mb-6 text-sm text-blue-300 font-mono leading-relaxed"
      >
        <code>{section.content as string}</code>
      </pre>
    );
  }

  return null;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = portfolioService.getPortfolioData();
  const blog = data.blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/logo.webp`}
              alt="Logo"
              className="h-12"
            />
          </Link>
          <Link
            href="/#blog"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Hero cover */}
      <div className="pt-20">
        <div className="w-full max-w-[768px] mx-auto overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-800">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            DD
          </div>
          <div>
            <p className="text-white font-medium text-sm">{blog.author}</p>
            <p className="text-gray-500 text-xs">
              {blog.date} &middot; {blog.readTime} read
            </p>
          </div>
        </div>

        {/* Content sections */}
        <article>{blog.sections.map(renderSection)}</article>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
