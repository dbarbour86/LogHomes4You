import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, CheckCircle, HelpCircle, SlidersHorizontal, Layers, Maximize2, Bath, Bed } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import ModelDiscoveryCard from "../components/ui/ModelDiscoveryCard";
import { verifiedModels } from "../data/models";
import { useSEO } from "../hooks/useSEO";

export default function ThreeBedroomLogHomesPage() {
  // Model selection: beds === 3 strictly from verified dataset
  const threeBedModels = useMemo(() => {
    return verifiedModels.filter((m) => m.beds === 3);
  }, []);

  // Dynamic statistics derived directly from matching dataset
  const totalPlans = threeBedModels.length;
  const minSqFt = Math.min(...threeBedModels.map((m) => m.squareFeet));
  const maxSqFt = Math.max(...threeBedModels.map((m) => m.squareFeet));
  const singleStoryCount = threeBedModels.filter((m) => m.stories === 1).length;
  const multiLevelCount = threeBedModels.filter((m) => (m.stories ?? 1) > 1 || m.hasLoft).length;

  // Sorting & secondary filtering
  const [sortOption, setSortOption] = useState<"sqft-asc" | "sqft-desc" | "name-asc">("sqft-asc");
  const [layoutFilter, setLayoutFilter] = useState<"all" | "single-story" | "multi-level">("all");

  const filteredAndSortedModels = useMemo(() => {
    let result = [...threeBedModels];

    if (layoutFilter === "single-story") {
      result = result.filter((m) => m.stories === 1);
    } else if (layoutFilter === "multi-level") {
      result = result.filter((m) => (m.stories ?? 1) > 1 || m.hasLoft);
    }

    if (sortOption === "sqft-asc") {
      result.sort((a, b) => a.squareFeet - b.squareFeet);
    } else if (sortOption === "sqft-desc") {
      result.sort((a, b) => b.squareFeet - a.squareFeet);
    } else if (sortOption === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [threeBedModels, layoutFilter, sortOption]);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Floor Plans", href: "/log-home-plans" },
    { name: "3-Bedroom Log Homes", href: "/three-bedroom-log-homes" },
  ];

  const canonicalUrl = "https://loghomes4you.com/three-bedroom-log-homes";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "3-Bedroom Log Home Floor Plans: Layouts & Sizes",
    "description": `Explore ${totalPlans} verified three-bedroom log home floor plans from ${minSqFt.toLocaleString()} to ${maxSqFt.toLocaleString()} sq ft. Compare single-story and multi-level layouts with verified specifications.`,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": totalPlans,
      "itemListElement": threeBedModels.map((m, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": m.name,
        "description": `${m.squareFeet} sq ft 3-bedroom log home floor plan with ${m.baths || 1} bath(s).`
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": `https://loghomes4you.com${b.href === "/" ? "" : b.href}`
    }))
  };

  useSEO({
    title: "3-Bedroom Log Home Floor Plans: Layouts & Sizes | Log Homes 4 You",
    description: `Explore ${totalPlans} verified 3-bedroom log home floor plans from ${minSqFt.toLocaleString()} to ${maxSqFt.toLocaleString()} sq ft. Compare single-story and multi-level layouts with verified specifications.`,
    url: canonicalUrl,
    structuredData: [collectionSchema, breadcrumbSchema]
  });

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="3-Bedroom Log Home Floor Plans"
        subtitle={`Explore ${totalPlans} verified three-bedroom log home designs ranging from ${minSqFt.toLocaleString()} to ${maxSqFt.toLocaleString()} square feet. Compare single-story layouts, multi-level configurations, bathroom counts, and floor-plan dimensions.`}
        breadcrumbs={breadcrumbs}
      />

      {/* Dynamic Collection Summary Bar */}
      <section className="bg-white border-b border-sand-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-sand-muted border border-sand-border rounded-lg p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-timber-subtle block mb-1">
                Verified Inventory
              </span>
              <div className="flex items-center justify-center gap-1.5 text-forest font-serif font-bold text-2xl sm:text-3xl">
                <Bed size={22} className="text-cedar shrink-0" />
                <span>{totalPlans} Plans</span>
              </div>
              <span className="text-xs text-timber-muted mt-1 block">All with 3 bedrooms</span>
            </div>

            <div className="bg-sand-muted border border-sand-border rounded-lg p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-timber-subtle block mb-1">
                Square Footage Range
              </span>
              <div className="flex items-center justify-center gap-1.5 text-forest font-serif font-bold text-2xl sm:text-3xl">
                <Maximize2 size={20} className="text-cedar shrink-0" />
                <span>{minSqFt.toLocaleString()} – {maxSqFt.toLocaleString()}</span>
              </div>
              <span className="text-xs text-timber-muted mt-1 block">Living area sq ft</span>
            </div>

            <div className="bg-sand-muted border border-sand-border rounded-lg p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-timber-subtle block mb-1">
                Bathrooms
              </span>
              <div className="flex items-center justify-center gap-1.5 text-forest font-serif font-bold text-2xl sm:text-3xl">
                <Bath size={20} className="text-cedar shrink-0" />
                <span>1 to 3 Baths</span>
              </div>
              <span className="text-xs text-timber-muted mt-1 block">Plan-specific options</span>
            </div>

            <div className="bg-sand-muted border border-sand-border rounded-lg p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-timber-subtle block mb-1">
                Stories Breakdown
              </span>
              <div className="flex items-center justify-center gap-1.5 text-forest font-serif font-bold text-2xl sm:text-3xl">
                <Layers size={20} className="text-cedar shrink-0" />
                <span>{singleStoryCount} / {multiLevelCount}</span>
              </div>
              <span className="text-xs text-timber-muted mt-1 block">Single-story vs multi-level</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Planning Guidance Section */}
      <section className="py-14 md:py-18 bg-sand border-b border-sand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose max-w-none text-timber">
            <span className="text-xs font-bold uppercase tracking-widest text-cedar block mb-2">
              Editorial Planning Guidance
            </span>
            <h2 className="text-3xl font-serif font-bold text-timber mb-6">
              Comparing Three-Bedroom Log Home Layouts
            </h2>
            <p className="text-base sm:text-lg text-timber-muted leading-relaxed mb-6">
              Three-bedroom designs represent the largest single category in this collection, spanning from {minSqFt.toLocaleString()} square feet up to {maxSqFt.toLocaleString()} square feet. Because the bedroom count is fixed at three, comparing these plans involves evaluating how those rooms are distributed across the footprint, how they connect to central gathering areas, and how much overall square footage is allocated to living and utility space.
            </p>

            {/* Layout Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <div className="flex items-center gap-2 text-forest font-bold text-sm uppercase tracking-wider mb-3">
                  <CheckCircle size={18} />
                  <span>Bedroom Distribution Options</span>
                </div>
                <ul className="space-y-3 text-sm text-timber-muted leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Single-level placement:</strong> In the {singleStoryCount} single-story designs, all three bedrooms share the main level, keeping daily traffic on one floor without interior staircases.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Multi-level distribution:</strong> In the {multiLevelCount} multi-level or loft-equipped designs, sleeping quarters are divided between the main level and an upper floor or loft space.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Shared living relationship:</strong> Consider whether bedrooms open directly into the primary living room or connect through an entryway or hallway buffer.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <div className="flex items-center gap-2 text-cedar font-bold text-sm uppercase tracking-wider mb-3">
                  <HelpCircle size={18} />
                  <span>Questions to Ask When Comparing</span>
                </div>
                <ul className="space-y-3 text-sm text-timber-muted leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Footprint vs. building site:</strong> Does your site accommodate the broader ground footprint of a single-story layout, or does a two-story design better fit your building envelope?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Bathroom access:</strong> Are bathrooms centrally located for shared access, or directly adjacent to specific bedrooms?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Square footage distribution:</strong> Is extra square footage assigned to larger bedroom dimensions or expanded common living areas?</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contextual Link Banner */}
            <div className="bg-sand-muted border border-sand-border rounded-lg p-5 my-8 not-prose flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-timber text-base">Unsure which size fits your household?</h3>
                <p className="text-xs text-timber-muted mt-1">Read our sizing guide or use the recommendation tool to compare layouts based on your intended use.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/guides/choosing-log-home-size"
                  className="text-xs font-bold uppercase tracking-wider text-forest hover:underline"
                >
                  Sizing Guide &rarr;
                </Link>
                <Link
                  to="/find-a-log-home"
                  className="bg-cedar hover:bg-cedar-dark text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  Find Your Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Catalog Section */}
      <section className="py-14 md:py-20 bg-sand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-sand-border">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber">
                Browse 3-Bedroom Plans
              </h2>
              <p className="text-xs sm:text-sm text-timber-muted mt-1">
                Showing {filteredAndSortedModels.length} of {totalPlans} verified three-bedroom models
              </p>
            </div>

            {/* Filter & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 text-xs">
                <SlidersHorizontal size={14} className="text-timber-subtle" />
                <span className="font-semibold text-timber-subtle uppercase tracking-wider">Layout:</span>
                <select
                  value={layoutFilter}
                  onChange={(e) => setLayoutFilter(e.target.value as any)}
                  className="bg-white border border-sand-border text-timber text-xs rounded-md px-3 py-1.5 focus:outline-none focus:border-forest"
                >
                  <option value="all">All ({totalPlans})</option>
                  <option value="single-story">Single-Story ({singleStoryCount})</option>
                  <option value="multi-level">Multi-Level / Loft ({multiLevelCount})</option>
                </select>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-timber-subtle uppercase tracking-wider">Sort:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="bg-white border border-sand-border text-timber text-xs rounded-md px-3 py-1.5 focus:outline-none focus:border-forest"
                >
                  <option value="sqft-asc">Size: Smallest First</option>
                  <option value="sqft-desc">Size: Largest First</option>
                  <option value="name-asc">Model Name (A–Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Grid of Model Discovery Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedModels.map((model) => (
              <ModelDiscoveryCard key={model.id} model={model} />
            ))}
          </div>

          {/* Directory Navigation Footer */}
          <div className="mt-16 pt-8 border-t border-sand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-serif font-bold text-timber">Looking for other bedroom counts or custom parameters?</p>
              <p className="text-xs text-timber-muted mt-0.5">Explore our complete catalog with full bedroom, bathroom, and square-footage filters.</p>
            </div>
            <Link
              to="/log-home-plans"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest hover:text-forest-dark shrink-0"
            >
              <span>Browse All Log Home Plans</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Provider Transparency Box */}
      <section className="py-12 bg-white border-t border-sand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-xs text-timber-subtle">
          <ShieldCheck size={20} className="text-forest mx-auto mb-2" />
          <p className="leading-relaxed">
            Floor plans shown on LogHomes4You are offered by third-party builders and manufacturers. Current specifications, engineering stamps, package inclusions, and pricing must always be confirmed directly with the provider via the canonical link on each card.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
