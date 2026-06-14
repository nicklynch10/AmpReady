"use client";

import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Search, Clock, Tag, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import {
  pageSpring,
  staggerContainer,
  staggerItem,
  cardHover,
  buttonHover,
} from "@/lib/animations";

const MotionLink = motion(Link);

export default function BlogPageClient() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredPosts = React.useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        activeCategory === "All" || post.tags.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-background-alt/40" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/3 pointer-events-none"
          style={{ borderRadius: "55% 45% 40% 60% / 50% 55% 45% 50%" }}
        />

        <div className="relative z-10 max-w-container-2xl mx-auto">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={pageSpring}
          >
            <span className="inline-block font-mono text-sm text-primary tracking-wide uppercase mb-4">
              Resources
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1]">
              EV Charging Guides{" "}
              <span className="text-primary">& Resources</span>
            </h1>
            <p className="mt-6 font-body text-lg text-text-secondary leading-relaxed">
              Expert guides on EV charger installation, costs, panel upgrades,
              and finding licensed electricians. Everything you need to know
              about home EV charging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-12 border-b border-text-muted/10">
        <div className="max-w-container-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog posts"
                className="w-full pl-10 pr-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full font-body text-sm transition-colors",
                    activeCategory === category
                      ? "bg-primary text-text-inverse"
                      : "bg-background-alt text-text-secondary hover:bg-text-muted/10"
                  )}
                >
                  {category === "All" ? "All" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-container-2xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={pageSpring}
            >
              <p className="font-body text-lg text-text-muted">
                No articles found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 font-body text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  variants={staggerItem}
                  className={cn(
                    "relative",
                    index === 1 && "md:mt-8",
                    index === 2 && "md:mt-4"
                  )}
                  style={{
                    transform: `rotate(${index === 1 ? 0.5 : index === 2 ? -0.5 : 0}deg)`,
                  }}
                >
                  <MotionLink
                    href={`/blog/${post.slug}/`}
                    className="block bg-surface rounded-2xl shadow-md border border-text-muted/10 overflow-hidden h-full group"
                    {...cardHover}
                  >
                    {/* Cover placeholder with organic shape */}
                    <div className="relative h-48 bg-background-alt overflow-hidden">
                      <div
                        className="absolute inset-0 bg-primary/8"
                        style={{
                          borderRadius: "0 0 60% 40% / 0 0 40% 60%",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="w-10 h-10 text-primary/30" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface/90 rounded-full font-mono text-xs text-text-muted">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min read
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-md font-mono text-xs text-primary"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="font-heading text-xl font-medium text-text-primary leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="mt-3 font-body text-sm text-text-secondary leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-body text-xs text-text-muted">
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                        <span className="inline-flex items-center gap-1 font-body text-sm text-primary group-hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </MotionLink>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-background-alt/60" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/3 pointer-events-none"
          style={{ borderRadius: "55% 45% 40% 60% / 50% 55% 45% 50%" }}
        />

        <div className="relative z-10 max-w-container-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={pageSpring}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
              Get EV Charging Tips in Your Inbox
            </h2>
            <p className="mt-4 font-body text-lg text-text-secondary max-w-xl mx-auto">
              Monthly guides on installation, cost savings, and new charger
              technology. No spam, unsubscribe anytime.
            </p>
          </motion.div>

          <motion.form
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...pageSpring, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address for newsletter"
              className="w-full sm:flex-1 px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <motion.button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-md hover:shadow-glow transition-shadow"
              {...buttonHover}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
