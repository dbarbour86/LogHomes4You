import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, CheckCircle, HelpCircle, SlidersHorizontal, Layers, Maximize2, Bath, Bed } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import ModelDiscoveryCard from "../components/ui/ModelDiscoveryCard";
import { verifiedModels } from "../data/models";
import { useSEO } from "../hooks/useSEO";

export default function OneStoryLogHomesPage() {
  // Model selection: stories === 1 strictly from verified dataset
  const oneStoryModels = useMemo(() => {
    return verifiedModels.filter((m) => m.stories === 1);
  }, []);

  // Dynamic statistics derived directly from matching dataset
  const totalPlans = oneStoryModels.length;
  const minSqFt = Math.min(...oneStoryModels.map((m) => m.squareFeet));
  const maxSqFt = Math.max(...oneStoryModels.map((m) => m.squareFeet));
  const twoBedCount = oneStoryModels.filter((m) => m.beds === 2).length;
  const threeBedCount = oneStoryModels.filter((m) => m.beds === 3).length;
  const fourBedCount = oneStoryModels.filter((m) => m.beds === 4).length;

  // Sorting & secondary filtering
  const [sortOption, setSortOption] = useState<"sqft-asc" | "sqft-desc" | "name-asc">("sqft-asc");
  const [bedFilter, setBedFilter] = useState<"all" | "2" | "3" | "4">("all");

  const filteredAndSortedModels = useMemo(() => {
    let result = [...oneStoryModels];

    if (bedFilter !== "all") {
      const bedsNum = parseInt(bedFilter, 10);
      result = result.filter((m) => m.beds === bedsNum);
    }

    if (sortOption === "sqft-asc") {
      result.sort((a, b) => a.squareFeet - b.squareFeet);
    } else if (sortOption === "sqft-desc") {
      result.sort((a, b) => b.squareFeet - a.squareFeet);
    } else if (sortOption === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [oneStoryModels, bedFilter, sortOption]);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Floor Plans", href: "/log-home-plans" },
    { name: "One-Story Log Homes", href: "/one-story-log-homes" },
  ];

  const canonicalUrl = "https://loghomes4you.com/one-story-log-homes";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "One-Story Log Home Floor Plans: Single-Level Living",
    "description": `Discover ${totalPlans} verified one-story log home floor plans from ${minSqFt.toLocaleString()} to ${maxSqFt.toLocaleString()} sq ft. Compare single-level layouts across 2, 3, and 4-bedroom designs with verified specifications.`,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": totalPlans,
      "itemListElement": oneStoryModels.map((m, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": m.name,
        "description": `${m.squareFeet} sq ft single-story log home floor plan with ${m.beds || "flexible"} bedroom(s).`
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
    title: "One-Story Log Home Floor Plans: Single-Level Living | Log Homes 4 You",
    description: `Discover ${totalPlans} verified one-story log home floor plans from ${minSqFt.toLocaleString()} to ${maxSqFt.toLocaleString()} sq ft. Compare single-level layouts across 2, 3, and 4-bedroom designs.`,
    url: canonicalUrl,
    structuredData: [collectionSchema, breadcrumbSchema]
  });

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="One-Story Log Home Floor Plans"
        subtitle={`Discover ${totalPlans} verified one-story log home designs ranging from ${minSqFt.toLocaleString()} to ${maxSqFt.toLocaleString()} square feet. In each model, the primary living spaces, bedrooms, kitchen, and bathrooms are contained on a single level.`}
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
                <Layers size={22} className="text-cedar shrink-0" />
                <span>{totalPlans} Plans</span>
              </div>
              <span className="text-xs text-timber-muted mt-1 block">All single-story designs</span>
            </div>

            <div className="bg-sand-muted border border-sand-border rounded-lg p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-timber-subtle block mb-1">
                Square Footage Span
              </span>
              <div className="flex items-center justify-center gap-1.5 text-forest font-serif font-bold text-2xl sm:text-3xl">
                <Maximize2 size={20} className="text-cedar shrink-0" />
                <span>{minSqFt.toLocaleString()} – {maxSqFt.toLocaleString()}</span>
              </div>
              <span className="text-xs text-timber-muted mt-1 block">Main-level floor area</span>
            </div>

            <div className="bg-sand-muted border border-sand-border rounded-lg p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-timber-subtle block mb-1">
                Bedroom Range
              </span>
              <div className="flex items-center justify-center gap-1.5 text-forest font-serif font-bold text-2xl sm:text-3xl">
                <Bed size={20} className="text-cedar shrink-0" />
                <span>2 to 4 Beds</span>
              </div>
              <span className="text-xs text-timber-muted mt-1 block">Verified bedroom counts</span>
            </div>

            <div className="bg-sand-muted border border-sand-border rounded-lg p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-timber-subtle block mb-1">
                Bedroom Distribution
              </span>
              <div className="flex items-center justify-center gap-1.5 text-forest font-serif font-bold text-lg sm:text-xl">
                <span>{twoBedCount} / {threeBedCount} / {fourBedCount}</span>
              </div>
              <span className="text-xs text-timber-muted mt-1 block">2-bed / 3-bed / 4-bed</span>
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
              Comparing One-Story Log Home Floor Plans
            </h2>
            <p className="text-base sm:text-lg text-timber-muted leading-relaxed mb-6">
              In a one-story log home, the entirety of the primary living space—bedrooms, bathrooms, kitchen, dining, and utility rooms—is arranged on one single floor without interior stairs. Within this 13-plan collection, designs span from smaller-footprint layouts of {minSqFt.toLocaleString()} square feet to expansive layouts of {maxSqFt.toLocaleString()} square feet, accommodating different household sizes and room arrangements.
            </p>

            {/* Layout Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <div className="flex items-center gap-2 text-forest font-bold text-sm uppercase tracking-wider mb-3">
                  <CheckCircle size={18} />
                  <span>Verified Plan Characteristics</span>
                </div>
                <ul className="space-y-3 text-sm text-timber-muted leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Smaller-footprint layouts:</strong> Plans under 1,000 square feet (such as 2-bedroom models starting at {minSqFt.toLocaleString()} sq ft) feature combined kitchen and living areas with direct room adjacencies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Larger layouts:</strong> Plans above 1,500 square feet (extending up to {maxSqFt.toLocaleString()} sq ft) provide 3 or 4 bedrooms with expanded common living areas and multiple bathrooms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Bathroom allocation:</strong> Across the collection, bathroom counts range from 1 bathroom in compact layouts to 3 bathrooms in larger multi-bedroom plans.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <div className="flex items-center gap-2 text-cedar font-bold text-sm uppercase tracking-wider mb-3">
                  <HelpCircle size={18} />
                  <span>Questions to Consider When Comparing</span>
                </div>
                <ul className="space-y-3 text-sm text-timber-muted leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Bedroom arrangement:</strong> Are bedrooms clustered together on one wing of the home, or situated on opposite sides of the central gathering room?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Exterior dimensions:</strong> Review the verified width and depth dimensions to verify how the overall building footprint aligns with your building envelope.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Porch integration:</strong> Review whether the model incorporates covered porch space extending beyond the interior living dimensions.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contextual Link Banner */}
            <div className="bg-sand-muted border border-sand-border rounded-lg p-5 my-8 not-prose flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-timber text-base">Unsure what square footage matches your plans?</h3>
                <p className="text-xs text-timber-muted mt-1">Review our sizing guide or use our interactive recommendation tool to compare floor plans by bedroom and square-footage preferences.</p>
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
                Browse One-Story Plans
              </h2>
              <p className="text-xs sm:text-sm text-timber-muted mt-1">
                Showing {filteredAndSortedModels.length} of {totalPlans} verified single-story designs
              </p>
            </div>

            {/* Filter & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 text-xs">
                <SlidersHorizontal size={14} className="text-timber-subtle" />
                <span className="font-semibold text-timber-subtle uppercase tracking-wider">Bedrooms:</span>
                <select
                  value={bedFilter}
                  onChange={(e) => setBedFilter(e.target.value as any)}
                  className="bg-white border border-sand-border text-timber text-xs rounded-md px-3 py-1.5 focus:outline-none focus:border-forest"
                >
                  <option value="all">All Bedrooms ({totalPlans})</option>
                  <option value="2">2 Bedrooms ({twoBedCount})</option>
                  <option value="3">3 Bedrooms ({threeBedCount})</option>
                  {fourBedCount > 0 && <option value="4">4 Bedrooms ({fourBedCount})</option>}
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
              <p className="text-sm font-serif font-bold text-timber">Want to explore designs with upper lofts or multi-level layouts?</p>
              <p className="text-xs text-timber-muted mt-0.5">Explore our dedicated collection of verified floor plans with lofts.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                to="/log-home-plans-with-lofts"
                className="text-xs sm:text-sm font-semibold text-cedar hover:underline"
              >
                Plans with Lofts &rarr;
              </Link>
              <Link
                to="/log-home-plans"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest hover:text-forest-dark"
              >
                <span>Browse All Plans</span>
                <ArrowRight size={15} />
              </Link>
            </div>
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
