import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Ruler, Home, BookOpen, Layers, CheckCircle, ShieldCheck } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import ModelDiscoveryCard from "../components/ui/ModelDiscoveryCard";
import { verifiedModels } from "../data/models";
import { useSEO } from "../hooks/useSEO";

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Log Homes 4 You",
    "url": "https://www.loghomes4you.com/",
    "description": "Log-home education, comparison, planning, and floor plan discovery resource.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.loghomes4you.com/log-home-plans?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  useSEO({
    title: "Log Homes 4 You | Guides, Floor Plans & Planning Tools",
    description: "Find the log home that's right for you. Explore floor plans, compare sizes, understand real building costs, and learn what to look for before building.",
    url: "https://www.loghomes4you.com/",
    structuredData: websiteSchema,
  });

  // Select 3 diverse verified models for homepage discovery showcase
  const featuredDiscovery = [
    verifiedModels.find((m) => m.id === "second-peter") || verifiedModels[0],
    verifiedModels.find((m) => m.id === "constance") || verifiedModels[1],
    verifiedModels.find((m) => m.id === "second-kings") || verifiedModels[2],
  ].filter(Boolean);

  const guides = [
    {
      title: "How Much Does a Log Home Cost?",
      desc: "An honest breakdown of site prep, foundations, kit packages, labor, and turnkey expenses.",
      href: "/guides/how-much-does-a-log-home-cost",
      tag: "Budgeting",
    },
    {
      title: "Log Home Kits Explained: What Do You Actually Get?",
      desc: "Understand what's included in shell, dry-in, and complete materials packages before you order.",
      href: "/guides/log-home-kits-explained",
      tag: "Packages",
    },
    {
      title: "Log Home Kit vs. Custom Build: What's the Difference?",
      desc: "Compare pre-cut manufactured packages with ground-up architect-led builds.",
      href: "/guides/log-home-kit-vs-custom-build",
      tag: "Comparison",
    },
    {
      title: "What Size Log Home Do You Actually Need?",
      desc: "Avoid building too much or too little space with our practical sizing guide.",
      href: "/guides/choosing-log-home-size",
      tag: "Sizing",
    },
    {
      title: "Building a Log Home: A Beginner's Guide",
      desc: "A 10-step roadmap from buying land to framing, utilities, and move-in inspection.",
      href: "/guides/building-a-log-home",
      tag: "Process",
    },
  ];

  return (
    <PageLayout showCTA={true}>
      {/* Editorial Hero Section */}
      <section className="relative bg-sand-muted border-b border-sand-border pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white border border-sand-border text-forest text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow-2xs">
                <Compass size={14} className="text-cedar" />
                <span>Log Home Research & Planning</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-timber tracking-tight leading-[1.15] mb-6">
                Find the Log Home That's Right for You
              </h1>

              <p className="text-lg sm:text-xl text-timber-muted font-normal leading-relaxed mb-8 max-w-2xl">
                Explore real floor plans, compare sizes, understand honest costs, and learn what questions to ask before you buy or build.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/find-a-log-home"
                  className="inline-flex items-center justify-center gap-2 bg-cedar hover:bg-cedar-dark text-white font-semibold text-base px-7 py-3.5 rounded-md shadow-xs transition-colors"
                >
                  <span>Find Your Log Home</span>
                  <ArrowRight size={17} />
                </Link>
                <Link
                  to="/log-home-plans"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand-muted text-timber font-semibold text-base px-7 py-3.5 rounded-md border border-sand-border transition-colors shadow-2xs"
                >
                  <span>Browse Floor Plans</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-sand-border/80 text-xs text-timber-subtle">
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-forest" />
                  <span>50+ Real Floor Plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-forest" />
                  <span>Practical Planning Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-forest" />
                  <span>Direct Builder Links</span>
                </div>
              </div>
            </div>

            {/* Right Image Feature */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-sand-border shadow-card bg-white">
                <img
                  src="/hero.png"
                  alt="Solid timber log home in natural landscape"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                  fetchPriority="high"
                />
                <div className="p-4 sm:p-5 bg-white border-t border-sand-border">
                  <p className="text-xs sm:text-sm text-timber-muted font-serif italic leading-relaxed">
                    Solid timber craftsmanship in natural surroundings — understanding the balance of design, site planning, and living space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Paths Section Required by Brief */}
      <section className="py-16 md:py-24 bg-sand border-b border-sand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cedar block mb-2">
              Start With What You Know
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-timber tracking-tight">
              Where are you in your search?
            </h2>
            <p className="text-timber-muted text-base mt-3">
              Choose the path that best matches your current stage in planning a log home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: I'm Just Starting */}
            <div className="bg-white border border-sand-border rounded-lg p-6 flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-md bg-forest-light text-forest flex items-center justify-center mb-5">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-timber mb-2">
                  I'm Just Starting
                </h3>
                <p className="text-sm text-timber-muted leading-relaxed mb-6">
                  Learn how log homes work, what they cost, and what decisions come first.
                </p>
              </div>
              <Link
                to="/guides/building-a-log-home"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-forest-dark group"
              >
                <span>Start Here</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 2: I Know My Size */}
            <div className="bg-white border border-sand-border rounded-lg p-6 flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-md bg-cedar-light text-cedar flex items-center justify-center mb-5">
                  <Ruler size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-timber mb-2">
                  I Know My Size
                </h3>
                <p className="text-sm text-timber-muted leading-relaxed mb-6">
                  Browse homes by square footage and bedroom count to find practical options.
                </p>
              </div>
              <Link
                to="/log-home-plans"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cedar hover:text-cedar-dark group"
              >
                <span>Browse by Size</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 3: I Want Floor Plans */}
            <div className="bg-white border border-sand-border rounded-lg p-6 flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-md bg-forest-light text-forest flex items-center justify-center mb-5">
                  <Home size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-timber mb-2">
                  I Want Floor Plans
                </h3>
                <p className="text-sm text-timber-muted leading-relaxed mb-6">
                  Compare real log-home layouts and find ideas that fit your specific living needs.
                </p>
              </div>
              <Link
                to="/log-home-plans"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-forest-dark group"
              >
                <span>Explore Floor Plans</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 4: I'm Ready to Build */}
            <div className="bg-white border border-sand-border rounded-lg p-6 flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-md bg-cedar-light text-cedar flex items-center justify-center mb-5">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-timber mb-2">
                  I'm Ready to Build
                </h3>
                <p className="text-sm text-timber-muted leading-relaxed mb-6">
                  Understand packages, land, site preparation, and what happens next.
                </p>
              </div>
              <Link
                to="/guides/how-much-does-a-log-home-cost"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cedar hover:text-cedar-dark group"
              >
                <span>Planning Guide</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Layout Discovery */}
      <section className="py-16 md:py-24 bg-sand-muted border-b border-sand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-2">
                Floor Plan Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-timber tracking-tight">
                Featured Floor Plan Layouts
              </h2>
              <p className="text-timber-muted text-sm sm:text-base mt-2 max-w-2xl">
                Explore real designs offered by verified manufacturers. Click through to inspect the complete blueprint and package details directly with the provider.
              </p>
            </div>
            <Link
              to="/log-home-plans"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest hover:text-forest-dark"
            >
              <span>View All 50+ Plans</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDiscovery.map((model) => (
              <ModelDiscoveryCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Guides Spotlight */}
      <section className="py-16 md:py-24 bg-sand border-b border-sand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cedar block mb-2">
                Practical Log Home Guides
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-timber tracking-tight">
                Practical Answers Before You Build
              </h2>
              <p className="text-timber-muted text-sm sm:text-base mt-2 max-w-2xl">
                Real guidance on pricing, package tiers, floor plan selection, and site planning without marketing jargon.
              </p>
            </div>
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-cedar hover:text-cedar-dark"
            >
              <span>View All Guides</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <Link
                key={g.href}
                to={g.href}
                className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block bg-sand-muted text-timber-subtle text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-4 border border-sand-border">
                    {g.tag}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-timber mb-3 group-hover:text-forest transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-sm text-timber-muted leading-relaxed">
                    {g.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-sand-border/70 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest">
                  <span>Read Guide</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Mission Statement */}
      <section className="py-16 bg-white border-b border-sand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ShieldCheck size={36} className="text-forest mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
            Our Editorial Standards
          </h2>
          <p className="text-timber-muted text-base leading-relaxed mb-6 font-normal">
            LogHomes4You was built to give prospective cabin owners clear, transparent facts before they invest their time and savings. We organize floor plans, sizing tools, and educational guides so you can understand what you need before reaching out to manufacturers.
          </p>
          <Link
            to="/about"
            className="text-xs sm:text-sm font-semibold text-cedar hover:underline uppercase tracking-wider"
          >
            Learn More About LogHomes4You &rarr;
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
