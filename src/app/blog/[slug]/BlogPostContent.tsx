"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Clock,
  Calendar,
  Tag,
  ArrowLeft,
  ArrowRight,
  User,
  Zap,
} from "lucide-react";
import { BlogPost } from "@/types";
import {
  pageSpring,
  staggerContainer,
  staggerItem,
  cardHover,
} from "@/lib/animations";

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

function ArticleSchema({ post }: { post: BlogPost }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AmpReady",
      logo: {
        "@type": "ImageObject",
        url: "https://ampready.com/logo.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ampready.com/blog/${post.slug}/`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

function TableOfContents({ content }: { content: string }) {
  const headings = React.useMemo(() => {
    const lines = content.split("\n");
    const h2s: { text: string; id: string }[] = [];
    for (const line of lines) {
      const match = line.match(/^##\s+(.+)$/);
      if (match) {
        const text = match[1];
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        h2s.push({ text, id });
      }
    }
    return h2s;
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="bg-background-alt/50 rounded-xl p-6 mb-8">
      <h3 className="font-heading text-lg font-medium text-text-primary mb-4">
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="font-body text-sm text-text-secondary hover:text-primary transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim() === "") {
      continue;
    }

    // H2
    const h2Match = line.match(/^##\s+(.+)$/);
    if (h2Match) {
      const text = h2Match[1];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      elements.push(
        <h2
          key={key++}
          id={id}
          className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4 scroll-mt-24"
        >
          {text}
        </h2>
      );
      continue;
    }

    // H3
    const h3Match = line.match(/^###\s+(.+)$/);
    if (h3Match) {
      elements.push(
        <h3
          key={key++}
          className="font-heading text-xl font-medium text-text-primary mt-8 mb-3"
        >
          {h3Match[1]}
        </h3>
      );
      continue;
    }

    // Unordered list item
    const ulMatch = line.match(/^-\s+(.+)$/);
    if (ulMatch) {
      // Collect consecutive list items
      const items: string[] = [ulMatch[1]];
      while (i + 1 < lines.length && lines[i + 1].match(/^-\s+(.+)$/)) {
        i++;
        const nextMatch = lines[i].match(/^-\s+(.+)$/);
        if (nextMatch) items.push(nextMatch[1]);
      }
      elements.push(
        <ul key={key++} className="mt-4 mb-6 space-y-2 list-disc list-inside">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="font-body text-base text-text-secondary leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list item
    const olMatch = line.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      const items: string[] = [olMatch[1]];
      while (
        i + 1 < lines.length &&
        lines[i + 1].match(/^\d+\.\s+(.+)$/)
      ) {
        i++;
        const nextMatch = lines[i].match(/^\d+\.\s+(.+)$/);
        if (nextMatch) items.push(nextMatch[1]);
      }
      elements.push(
        <ol key={key++} className="mt-4 mb-6 space-y-2 list-decimal list-inside">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="font-body text-base text-text-secondary leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Bold text within paragraph
    const boldMatch = line.match(/^\*\*(.+)\*\*$/);
    if (boldMatch) {
      elements.push(
        <p key={key++} className="font-body text-base font-medium text-text-primary mt-4 mb-2">
          {boldMatch[1]}
        </p>
      );
      continue;
    }

    // Table (simple markdown table)
    if (line.startsWith("|")) {
      const tableLines: string[] = [line];
      while (i + 1 < lines.length && lines[i + 1].startsWith("|")) {
        i++;
        tableLines.push(lines[i]);
      }
      // Skip separator line (|------|)
      const dataRows = tableLines.filter(
        (l) => !l.match(/^\|[\s\-:|]+\|$/)
      );
      if (dataRows.length > 0) {
        const headers = dataRows[0]
          .split("|")
          .filter((cell) => cell.trim() !== "")
          .map((cell) => cell.trim());
        const rows = dataRows.slice(1).map((row) =>
          row
            .split("|")
            .filter((cell) => cell.trim() !== "")
            .map((cell) => cell.trim())
        );
        elements.push(
          <div key={key++} className="mt-6 mb-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  {headers.map((h, idx) => (
                    <th
                      key={idx}
                      className="py-3 px-4 font-heading text-sm font-medium text-text-primary"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ridx) => (
                  <tr
                    key={ridx}
                    className="border-b border-text-muted/10 hover:bg-background-alt/50"
                  >
                    {row.map((cell, cidx) => (
                      <td
                        key={cidx}
                        className="py-3 px-4 font-body text-sm text-text-secondary"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={key++}
        className="font-body text-base text-text-secondary leading-relaxed mt-4 mb-4"
      >
        {line}
      </p>
    );
  }

  return <>{elements}</>;
}

export default function BlogPostContent({
  post,
  relatedPosts,
}: BlogPostContentProps) {
  return (
    <>
      <ArticleSchema post={post} />

      <div className="flex flex-col">
        {/* Post Header */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-background-alt/40" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/3 pointer-events-none"
            style={{ borderRadius: "55% 45% 40% 60% / 50% 55% 45% 50%" }}
          />

          <div className="relative z-10 max-w-container-xl mx-auto">
            <motion.a
              href="/blog/"
              className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-primary transition-colors mb-8"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={pageSpring}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all guides
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={pageSpring}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full font-mono text-xs text-primary"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight max-w-3xl">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-text-muted">
                <span className="inline-flex items-center gap-2 font-body text-sm">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-2 font-body text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-2 font-body text-sm">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min read
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
          <div className="max-w-container-xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main content */}
              <motion.article
                className="lg:w-2/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...pageSpring, delay: 0.1 }}
              >
                <TableOfContents content={post.content} />

                <div className="prose-custom">
                  <MarkdownContent content={post.content} />
                </div>

                {/* Updated notice */}
                {post.updatedAt && post.updatedAt !== post.publishedAt && (
                  <div className="mt-12 pt-6 border-t border-text-muted/10">
                    <p className="font-body text-sm text-text-muted">
                      Last updated:{" "}
                      {new Date(post.updatedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </motion.article>

              {/* Sidebar */}
              <aside className="lg:w-1/3">
                <motion.div
                  className="sticky top-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...pageSpring, delay: 0.2 }}
                >
                  {/* CTA Card */}
                  <div className="bg-surface rounded-2xl p-6 shadow-md border border-text-muted/10 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-medium text-text-primary mb-2">
                      Ready to Install Your Charger?
                    </h3>
                    <p className="font-body text-sm text-text-secondary mb-4">
                      Get matched with licensed electricians in your area. Upload
                      photos, answer a few questions, and receive real quotes.
                    </p>
                    <a
                      href="/get-started/"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-md hover:shadow-glow transition-shadow w-full justify-center"
                    >
                      Start Your Job Packet
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-background-alt/40">
            <div className="max-w-container-2xl mx-auto">
              <motion.h2
                className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={pageSpring}
              >
                Related Guides
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {relatedPosts.map((related, index) => (
                  <motion.article
                    key={related.slug}
                    variants={staggerItem}
                    style={{
                      transform: `rotate(${index === 1 ? 0.5 : index === 2 ? -0.5 : 0}deg)`,
                    }}
                  >
                    <motion.a
                      href={`/blog/${related.slug}/`}
                      className="block bg-surface rounded-2xl shadow-md border border-text-muted/10 overflow-hidden h-full group"
                      {...cardHover}
                    >
                      <div className="relative h-40 bg-background-alt overflow-hidden">
                        <div
                          className="absolute inset-0 bg-primary/8"
                          style={{
                            borderRadius: "0 0 60% 40% / 0 0 40% 60%",
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Zap className="w-8 h-8 text-primary/30" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading text-lg font-medium text-text-primary group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                        <p className="mt-2 font-body text-sm text-text-secondary line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="font-body text-xs text-text-muted">
                            {related.readingTime} min read
                          </span>
                          <span className="inline-flex items-center gap-1 font-body text-sm text-primary">
                            Read
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
