import React, { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, RotateCcw, ShieldCheck, Compass } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import ModelDiscoveryCard from "../components/ui/ModelDiscoveryCard";
import { verifiedModels, DiscoveryModel } from "../data/models";
import { filterModels, sortModels, SortType, FilterCriteria } from "../utils/modelFilters";
import { useSEO } from "../hooks/useSEO";

export default function LogHomePlansPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Floor Plans", href: "/log-home-plans" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Log Home Floor Plans",
    "description": "Explore log home floor plans, layouts, and dimensions to plan your log home build.",
    "url": "https://loghomes4you.com/log-home-plans",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": verifiedModels.length,
      "itemListElement": verifiedModels.slice(0, 30).map((m, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": m.name,
        "description": `${m.squareFeet} sq ft log home floor plan with ${m.beds || "flexible"} bedrooms.`
      }))
    }
  };

  useSEO({
    title: "Explore Log Home Floor Plans | Log Homes 4 You",
    description: "Browse and filter log home floor plans by square footage, bedroom count, bathrooms, and loft layout. Discover practical floor plans offered by verified builders.",
    url: "https://loghomes4you.com/log-home-plans",
    structuredData: collectionSchema,
  });

  // Parse filters from URL
  const pBedrooms = searchParams.get("bedrooms");
  const pBathrooms = searchParams.get("bathrooms");
  const pMinSqFt = searchParams.get("minSqFt");
  const pMaxSqFt = searchParams.get("maxSqFt");
  const pHasLoft = searchParams.get("hasLoft");
  const pSort = (searchParams.get("sort") as SortType) || "sqft-asc";

  const criteria: FilterCriteria = useMemo(() => {
    return {
      bedrooms: pBedrooms ? parseInt(pBedrooms, 10) : undefined,
      bathrooms: pBathrooms ? parseFloat(pBathrooms) : undefined,
      minSqFt: pMinSqFt ? parseInt(pMinSqFt, 10) : undefined,
      maxSqFt: pMaxSqFt ? parseInt(pMaxSqFt, 10) : undefined,
      hasLoft: pHasLoft === "true" ? true : pHasLoft === "false" ? false : undefined,
    };
  }, [pBedrooms, pBathrooms, pMinSqFt, pMaxSqFt, pHasLoft]);

  const updateParam = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === null || value === "all") {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const resetFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  // Filter and sort verified models
  const filteredModels = useMemo(() => {
    const filtered = filterModels(verifiedModels, criteria);
    return sortModels(filtered, pSort);
  }, [criteria, pSort]);

  // Sq Ft range helper
  const handleSqFtChange = (range: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (range === "all") {
      newParams.delete("minSqFt");
      newParams.delete("maxSqFt");
    } else if (range === "under-800") {
      newParams.delete("minSqFt");
      newParams.set("maxSqFt", "799");
    } else if (range === "800-1000") {
      newParams.set("minSqFt", "800");
      newParams.set("maxSqFt", "1000");
    } else if (range === "1000-1500") {
      newParams.set("minSqFt", "1001");
      newParams.set("maxSqFt", "1500");
    } else if (range === "1500-2000") {
      newParams.set("minSqFt", "1501");
      newParams.set("maxSqFt", "2000");
    } else if (range === "2000+") {
      newParams.set("minSqFt", "2001");
      newParams.delete("maxSqFt");
    }
    setSearchParams(newParams);
  };

  const currentSqFtRange = useMemo(() => {
    if (!pMinSqFt && pMaxSqFt === "799") return "under-800";
    if (pMinSqFt === "800" && pMaxSqFt === "1000") return "800-1000";
    if (pMinSqFt === "1001" && pMaxSqFt === "1500") return "1000-1500";
    if (pMinSqFt === "1501" && pMaxSqFt === "2000") return "1500-2000";
    if (pMinSqFt === "2001" && !pMaxSqFt) return "2000+";
    return "all";
  }, [pMinSqFt, pMaxSqFt]);

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="Explore Log Home Floor Plans"
        subtitle="Choosing a log home floor plan starts with your square footage, bedroom count, intended use, and the way living spaces flow. Browse real plans and filter by your exact criteria."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12 md:py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter Bar */}
          <div className="bg-white border border-sand-border rounded-xl p-5 sm:p-6 shadow-subtle mb-10">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-sand-border">
              <div className="flex items-center gap-2 text-sm font-serif font-bold text-timber">
                <Filter size={18} className="text-forest" />
                <span>Filter Floor Plans</span>
                <span className="text-xs font-sans font-normal text-timber-subtle ml-2">
                  ({filteredModels.length} of {verifiedModels.length} plans)
                </span>
              </div>

              {(pBedrooms || pBathrooms || pMinSqFt || pMaxSqFt || pHasLoft) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cedar hover:text-cedar-dark cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Bedrooms Filter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-timber-subtle mb-1.5">
                  Bedrooms
                </label>
                <select
                  value={pBedrooms || "all"}
                  onChange={(e) => updateParam("bedrooms", e.target.value)}
                  className="w-full bg-sand-muted border border-sand-border text-timber text-xs sm:text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-forest"
                >
                  <option value="all">All Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                </select>
              </div>

              {/* Square Footage Filter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-timber-subtle mb-1.5">
                  Square Footage
                </label>
                <select
                  value={currentSqFtRange}
                  onChange={(e) => handleSqFtChange(e.target.value)}
                  className="w-full bg-sand-muted border border-sand-border text-timber text-xs sm:text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-forest"
                >
                  <option value="all">All Sizes</option>
                  <option value="under-800">Under 800 sq ft</option>
                  <option value="800-1000">800–1,000 sq ft</option>
                  <option value="1000-1500">1,000–1,500 sq ft</option>
                  <option value="1500-2000">1,500–2,000 sq ft</option>
                  <option value="2000+">2,000+ sq ft</option>
                </select>
              </div>

              {/* Bathrooms Filter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-timber-subtle mb-1.5">
                  Bathrooms
                </label>
                <select
                  value={pBathrooms || "all"}
                  onChange={(e) => updateParam("bathrooms", e.target.value)}
                  className="w-full bg-sand-muted border border-sand-border text-timber text-xs sm:text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-forest"
                >
                  <option value="all">All Bathrooms</option>
                  <option value="1">1 Bath</option>
                  <option value="1.5">1.5 Baths</option>
                  <option value="2">2 Baths</option>
                  <option value="2.5">2.5 Baths</option>
                  <option value="3">3 Baths</option>
                </select>
              </div>

              {/* Loft Filter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-timber-subtle mb-1.5">
                  Loft Layout
                </label>
                <select
                  value={pHasLoft || "all"}
                  onChange={(e) => updateParam("hasLoft", e.target.value)}
                  className="w-full bg-sand-muted border border-sand-border text-timber text-xs sm:text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-forest"
                >
                  <option value="all">All Layouts</option>
                  <option value="true">Has Loft</option>
                  <option value="false">Single-Level / No Loft</option>
                </select>
              </div>

              {/* Sort Order */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-timber-subtle mb-1.5">
                  Sort By
                </label>
                <select
                  value={pSort}
                  onChange={(e) => updateParam("sort", e.target.value)}
                  className="w-full bg-sand-muted border border-sand-border text-timber text-xs sm:text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-forest"
                >
                  <option value="sqft-asc">Size: Smallest First</option>
                  <option value="sqft-desc">Size: Largest First</option>
                  <option value="featured">Featured First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Models Grid */}
          {filteredModels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredModels.map((model) => (
                <ModelDiscoveryCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-sand-border rounded-lg p-12 text-center my-8">
              <Compass size={36} className="text-cedar mx-auto mb-3" />
              <h3 className="text-xl font-serif font-bold text-timber mb-2">No Floor Plans Matched</h3>
              <p className="text-sm text-timber-muted mb-6">
                Try loosening your filters or resetting your search to see available models.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="bg-forest hover:bg-forest-dark text-white text-xs font-semibold px-5 py-2.5 rounded-md transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Provider Notice */}
          <div className="bg-white border border-sand-border rounded-lg p-6 text-center text-xs text-timber-subtle max-w-3xl mx-auto">
            <ShieldCheck size={20} className="text-forest mx-auto mb-2" />
            <p className="leading-relaxed">
              Floor plans shown on LogHomes4You are offered by third-party builders and manufacturers. Current specifications, engineering stamps, package inclusions, and pricing must always be confirmed directly with the provider.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
