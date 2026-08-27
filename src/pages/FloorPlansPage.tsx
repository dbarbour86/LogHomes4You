import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import Button from "../components/ui/Button";
import { Maximize2, Bed, Bath, ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { homeModels } from "../data/models";
import { filterModels, sortModels, SortType, FilterCriteria } from "../utils/modelFilters";
import { useSEO } from "../hooks/useSEO";
import { useMemo, useState, useEffect } from "react";

export default function FloorPlansPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(12);

  // Schema Generation
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Log Home Floor Plans",
    "description": "Explore the Kings Cabins collection of log home floor plans.",
    "url": "https://kingscabins.com/floor-plans",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": homeModels.map((m, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://kingscabins.com/floor-plans/${m.id}`,
        "name": m.name
      }))
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Floor Plans", href: "/floor-plans" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": `https://kingscabins.com${b.href === '/' ? '' : b.href}`
    }))
  };

  useSEO({
    title: "Log Home Floor Plans & Cabin Plans | Kings Cabins",
    description: "Explore the Kings Cabins collection of log home floor plans. Compare sizes, bedroom counts, layouts, and exterior imagery.",
    url: "https://kingscabins.com/floor-plans",
    structuredData: [collectionSchema, breadcrumbSchema]
  });

  // Parse filters from URL
  const criteria: FilterCriteria = useMemo(() => {
    const pBedrooms = searchParams.get("bedrooms");
    const pBathrooms = searchParams.get("bathrooms");
    const pStories = searchParams.get("stories");
    const pMinSqFt = searchParams.get("minSqFt");
    const pMaxSqFt = searchParams.get("maxSqFt");
    const pCategory = searchParams.get("category");
    const pQuery = searchParams.get("q");

    return {
      bedrooms: pBedrooms ? parseInt(pBedrooms, 10) : undefined,
      bathrooms: pBathrooms ? parseInt(pBathrooms, 10) : undefined,
      stories: pStories ? parseInt(pStories, 10) : undefined,
      minSqFt: pMinSqFt ? parseInt(pMinSqFt, 10) : undefined,
      maxSqFt: pMaxSqFt ? parseInt(pMaxSqFt, 10) : undefined,
      category: pCategory || undefined,
      query: pQuery || undefined,
    };
  }, [searchParams]);

  // Parse sort from URL, defaulting to featured
  const sortParam = (searchParams.get("sort") as SortType) || "featured";
  const validSortTypes: SortType[] = ["featured", "sqft-asc", "sqft-desc"];
  const sortType: SortType = validSortTypes.includes(sortParam) ? sortParam : "featured";

  // Apply filtering and sorting
  const filteredModels = useMemo(() => {
    const filtered = filterModels(homeModels, criteria);
    return sortModels(filtered, sortType);
  }, [criteria, sortType]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [criteria, sortType]);

  const visibleModels = filteredModels.slice(0, visibleCount);

  return (
    <PageLayout>
      <InnerHero 
        title="Log Home Floor Plans"
        subtitle="Explore the Kings Cabins collection of log home floor plans. Our catalog ranges from efficient smaller footprints to larger estate cabins. Individual model pages provide available specifications and floor-plan imagery to help you compare layouts."
        image="/Philippians.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Filter Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0 space-y-8 lg:border-r lg:border-white/5 lg:pr-8">
              <div>
                <h3 className="text-amber text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Search</h3>
                <input 
                  type="text"
                  placeholder="Search models by name..."
                  className="w-full bg-deep-brown border border-white/10 px-4 py-3 text-cream text-sm focus:border-amber/50 outline-none placeholder:text-cream/30"
                  value={searchParams.get("q") || ""}
                  onChange={(e) => {
                    const newParams = new URLSearchParams(searchParams);
                    if (e.target.value) newParams.set("q", e.target.value);
                    else newParams.delete("q");
                    setSearchParams(newParams);
                  }}
                />
              </div>

              <div>
                <h3 className="text-amber text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Sort By</h3>
                <select 
                  className="w-full bg-deep-brown border border-white/10 px-4 py-3 text-cream text-sm focus:border-amber/50 outline-none appearance-none cursor-pointer"
                  value={sortType}
                  onChange={(e) => {
                    const newParams = new URLSearchParams(searchParams);
                    if (e.target.value === "featured") newParams.delete("sort");
                    else newParams.set("sort", e.target.value);
                    setSearchParams(newParams);
                  }}
                >
                  <option value="featured">Featured First</option>
                  <option value="sqft-asc">Square Footage: Low to High</option>
                  <option value="sqft-desc">Square Footage: High to Low</option>
                </select>
              </div>

              <div>
                <h3 className="text-amber text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Bedrooms</h3>
                <select 
                  className="w-full bg-deep-brown border border-white/10 px-4 py-3 text-cream text-sm focus:border-amber/50 outline-none appearance-none cursor-pointer"
                  value={searchParams.get("bedrooms") || "any"}
                  onChange={(e) => {
                    const newParams = new URLSearchParams(searchParams);
                    if (e.target.value === "any") newParams.delete("bedrooms");
                    else newParams.set("bedrooms", e.target.value);
                    setSearchParams(newParams);
                  }}
                >
                  <option value="any">Any</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                </select>
              </div>

              <div>
                <h3 className="text-amber text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Bathrooms</h3>
                <select 
                  className="w-full bg-deep-brown border border-white/10 px-4 py-3 text-cream text-sm focus:border-amber/50 outline-none appearance-none cursor-pointer"
                  value={searchParams.get("bathrooms") || "any"}
                  onChange={(e) => {
                    const newParams = new URLSearchParams(searchParams);
                    if (e.target.value === "any") newParams.delete("bathrooms");
                    else newParams.set("bathrooms", e.target.value);
                    setSearchParams(newParams);
                  }}
                >
                  <option value="any">Any</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3+ Bathrooms</option>
                </select>
              </div>

              <div>
                <h3 className="text-amber text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Square Footage</h3>
                <select 
                  className="w-full bg-deep-brown border border-white/10 px-4 py-3 text-cream text-sm focus:border-amber/50 outline-none appearance-none cursor-pointer"
                  value={
                    searchParams.get("maxSqFt") === "999" ? "under-1000" :
                    searchParams.get("minSqFt") === "1000" && searchParams.get("maxSqFt") === "1499" ? "1000-1500" :
                    searchParams.get("minSqFt") === "1500" && searchParams.get("maxSqFt") === "1999" ? "1500-2000" :
                    searchParams.get("minSqFt") === "2000" ? "over-2000" :
                    "any"
                  }
                  onChange={(e) => {
                    const newParams = new URLSearchParams(searchParams);
                    newParams.delete("minSqFt");
                    newParams.delete("maxSqFt");
                    
                    if (e.target.value === "under-1000") {
                      newParams.set("maxSqFt", "999");
                    } else if (e.target.value === "1000-1500") {
                      newParams.set("minSqFt", "1000");
                      newParams.set("maxSqFt", "1499");
                    } else if (e.target.value === "1500-2000") {
                      newParams.set("minSqFt", "1500");
                      newParams.set("maxSqFt", "1999");
                    } else if (e.target.value === "over-2000") {
                      newParams.set("minSqFt", "2000");
                    }
                    
                    setSearchParams(newParams);
                  }}
                >
                  <option value="any">Any</option>
                  <option value="under-1000">Under 1,000 sq ft</option>
                  <option value="1000-1500">1,000 - 1,500 sq ft</option>
                  <option value="1500-2000">1,500 - 2,000 sq ft</option>
                  <option value="over-2000">Over 2,000 sq ft</option>
                </select>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setSearchParams(new URLSearchParams())}
              >
                RESET FILTERS
              </Button>

              {/* Collections Navigation */}
              <div className="pt-8 border-t border-white/5">
                <h3 className="text-amber text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Collections</h3>
                <div className="flex flex-col space-y-3">
                  <Link to="/small-log-homes" className="text-sm text-cream/70 hover:text-amber transition-colors">Small Log Homes</Link>
                  <Link to="/floor-plans/2-bedroom-log-homes" className="text-sm text-cream/70 hover:text-amber transition-colors">2 Bedroom Log Homes</Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 border-b border-white/5 pb-8">
                <div className="flex items-center gap-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                  <h2 className="text-2xl font-serif text-cream">Floor Plans</h2>
                </div>
                <div className="text-cream/40 text-xs italic">
                    Showing {filteredModels.length} Design{filteredModels.length !== 1 ? 's' : ''}
                </div>
              </div>

              {filteredModels.length === 0 ? (
                <div className="text-center py-20 bg-deep-brown border border-white/5">
                  <h3 className="text-2xl font-serif text-cream mb-4">No models found</h3>
                  <p className="text-cream/60">Try adjusting your filters to see more results.</p>
                  <Button variant="outline" className="mt-8" onClick={() => setSearchParams(new URLSearchParams())}>
                    CLEAR FILTERS
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    {visibleModels.map((model, idx) => (
                      <motion.div
                        key={model.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 12) * 0.1 }}
                      >
                        <Link to={`/floor-plans/${model.id}`} className="group block h-full flex flex-col">
                          <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-sm shadow-luxury bg-deep-brown border border-white/5">
                            <img src={model.image} alt={`${model.name} log home exterior`} loading={idx < 4 ? "eager" : "lazy"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                              <Button variant="primary" className="text-xs">VIEW FULL SPECS</Button>
                            </div>
                          </div>
                          <div className="space-y-4 flex-1 flex flex-col justify-between">
                            <h3 className="text-2xl font-serif text-cream group-hover:text-amber transition-colors">{model.name}</h3>
                            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/5 mt-auto">
                              <div className="flex items-center gap-1.5 text-xs text-amber font-medium">
                                <Maximize2 size={12} />
                                <span>{model.sqft} SQFT</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-xs text-cream/40">
                                <Bed size={12} />
                                <span>{model.beds ?? "TBD"} BEDS</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-xs text-cream/40">
                                <Bath size={12} />
                                <span>{model.baths ?? "TBD"} BATHS</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  {visibleCount < filteredModels.length && (
                    <div className="text-center mb-20">
                      <Button 
                        variant="outline" 
                        onClick={() => setVisibleCount(prev => prev + 12)}
                      >
                        LOAD MORE PLANS
                      </Button>
                    </div>
                  )}
                </div>
              )}


            </div>
          </div>
        </div>
      </section>

      {/* Custom Section */}
      <section className="py-24 bg-espresso">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto p-12 md:p-20 border border-amber/20 bg-charcoal shadow-luxury relative"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-espresso border border-amber/20 px-6 py-2">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-amber">TRUE BESPOKE</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Can't Find Your <span className="italic font-normal">Perfect Fit?</span></h2>
                <p className="text-cream/60 text-lg font-light mb-10">
                    Over 60% of our clients start with a completely white sheet of paper. Join our principal architects for a session and we'll sketch your vision from scratch.
                </p>
                <Button variant="primary" className="flex items-center gap-2 mx-auto">
                    START A CUSTOM DESIGN <ArrowRight size={18} />
                </Button>
            </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
