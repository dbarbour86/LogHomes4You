import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, DollarSign, Package, GitCompare, Ruler, Hammer, Clock } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import { useSEO } from "../hooks/useSEO";

export default function GuidesHubPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Log Home Guides",
    "description": "Practical answers to the questions that come up when you're thinking about building or buying a log home.",
    "url": "https://loghomes4you.com/guides"
  };

  useSEO({
    title: "Log Home Guides | Cost, Kits, Sizing & Building Advice | Log Homes 4 You",
    description: "Practical answers to the questions that come up when you're thinking about building or buying a log home. Honest breakdowns of costs, packages, sizing, and building steps.",
    url: "https://loghomes4you.com/guides",
    structuredData: collectionSchema,
  });

  const guides = [
    {
      title: "How Much Does a Log Home Cost?",
      subtitle: "Understand real project expenses beyond the materials package price.",
      desc: "A comprehensive breakdown of land, site preparation, foundations, log packages, framing labor, mechanical rough-ins, and interior finishes. Learn why materials packages represent only a portion of complete turnkey project costs.",
      href: "/guides/how-much-does-a-log-home-cost",
      tag: "Budget & Pricing",
      readTime: "8 min read",
      icon: DollarSign,
    },
    {
      title: "Log Home Kits Explained: What Do You Actually Get?",
      subtitle: "Cut through confusing package terminology before signing a contract.",
      desc: "Learn what typically comes inside a manufactured log package and what you must source locally. We examine shell packages vs. dry-in packages, and provide a critical checklist for prospective buyers.",
      href: "/guides/log-home-kits-explained",
      tag: "Package Scope",
      readTime: "7 min read",
      icon: Package,
    },
    {
      title: "Log Home Kit vs. Custom Build: What's the Difference?",
      subtitle: "Compare pre-cut manufactured packages with bespoke architect-led construction.",
      desc: "An objective side-by-side comparison of pre-cut log packages and architect-designed custom builds. We examine cost predictability, design flexibility, engineering approvals, and realistic construction timelines.",
      href: "/guides/log-home-kit-vs-custom-build",
      tag: "Construction Path",
      readTime: "7 min read",
      icon: GitCompare,
    },
    {
      title: "What Size Log Home Do You Actually Need?",
      subtitle: "Practical sizing advice to avoid building too much or too little space.",
      desc: "Examine household requirements, full-time living vs. weekend retreats, storage limitations in solid timber construction, heating cubic volume, and how covered porches expand functional living space.",
      href: "/guides/choosing-log-home-size",
      tag: "Sizing & Layout",
      readTime: "6 min read",
      icon: Ruler,
    },
    {
      title: "Building a Log Home: A Beginner's Guide",
      subtitle: "A 10-step roadmap from land evaluation to final move-in inspection.",
      desc: "A realistic walk-through of the entire construction process: evaluating raw land and soil conditions, navigating zoning permits, choosing builders, staging log package delivery, and coordinating inspections.",
      href: "/guides/building-a-log-home",
      tag: "Process & Roadmap",
      readTime: "10 min read",
      icon: Hammer,
    },
  ];

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="Log Home Guides"
        subtitle="Practical answers to the questions that come up when you're thinking about building or buying a log home. Written to help you make informed decisions before contacting builders."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-14 md:py-20 bg-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {guides.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div
                  key={guide.href}
                  className="bg-white border border-sand-border rounded-xl p-6 sm:p-8 shadow-subtle hover:shadow-card transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-forest-light text-forest flex items-center justify-center shrink-0">
                      <Icon size={24} />
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="bg-sand-muted text-timber-subtle text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-sand-border">
                          {guide.tag}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-timber-subtle">
                          <Clock size={12} />
                          <span>{guide.readTime}</span>
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-2 group-hover:text-forest transition-colors">
                        <Link to={guide.href}>{guide.title}</Link>
                      </h2>

                      <p className="text-sm font-medium text-cedar mb-3">
                        {guide.subtitle}
                      </p>

                      <p className="text-sm text-timber-muted leading-relaxed mb-6">
                        {guide.desc}
                      </p>

                      <Link
                        to={guide.href}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest group-hover:text-forest-dark"
                      >
                        <span>Read Complete Guide</span>
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
