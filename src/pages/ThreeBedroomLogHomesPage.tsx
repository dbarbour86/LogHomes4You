import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import Button from "../components/ui/Button";
import { Maximize2, Bed, Bath, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { homeModels } from "../data/models";
import { useSEO } from "../hooks/useSEO";

export default function ThreeBedroomLogHomesPage() {
  const threeBedroomModels = homeModels.filter(m => m.beds === 3);

  // Schema Generation
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "3 Bedroom Log Home Plans",
    "description": "Explore 3 bedroom log home plans from Kings Cabins.",
    "url": "https://kingscabins.com/floor-plans/3-bedroom-log-homes",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": threeBedroomModels.map((m, i) => ({
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
    { name: "3 Bedroom Log Home Plans", href: "/floor-plans/3-bedroom-log-homes" },
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
    title: "3 Bedroom Log Home Plans & Floor Plans | Kings Cabins",
    description: "Explore 3 bedroom log home plans from Kings Cabins. Compare square footage, dimensions, bathrooms and available floor plans across the three-bedroom collection.",
    url: "https://kingscabins.com/floor-plans/3-bedroom-log-homes",
    structuredData: [collectionSchema, breadcrumbSchema]
  });

  return (
    <PageLayout>
      <InnerHero 
        title="3 Bedroom Log Home Plans"
        subtitle="This collection centralizes all Kings Cabins models featuring three verified bedrooms into a single catalog. Review existing specifications—such as square footage, bathroom counts, exterior designs, and overall dimensions—to evaluate options that meet your size requirements."
        image="/ApostlePaul.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 border-b border-white/5 pb-8">
            <h2 className="text-2xl font-serif text-cream">Explore {threeBedroomModels.length} Kings Cabins 3 bedroom log cabin plans.</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/small-log-homes" className="text-sm text-cream/70 hover:text-amber transition-colors">
                Small Log Homes
              </Link>
              <span className="text-white/20">|</span>
              <Link to="/floor-plans/2-bedroom-log-homes" className="text-sm text-cream/70 hover:text-amber transition-colors">
                2 Bedroom Log Homes
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {threeBedroomModels.map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 10) * 0.1 }}
                className="bg-deep-brown border border-white/5 shadow-luxury flex flex-col"
              >
                <Link to={`/floor-plans/${model.id}`} className="group block relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={model.image} 
                    alt={`${model.name} log home exterior`} 
                    loading={idx < 2 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Button variant="primary" className="text-xs">VIEW FULL MODEL</Button>
                  </div>
                </Link>
                
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-serif text-cream">{model.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Area</span>
                      <div className="flex items-center gap-1.5 text-sm text-amber font-medium">
                        <Maximize2 size={14} />
                        <span>{model.sqft} SQFT</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Layout</span>
                      <div className="flex items-center gap-1.5 text-sm text-cream/70">
                        <Bed size={14} />
                        <span>{model.beds ?? "TBD"} BEDS</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Baths</span>
                      <div className="flex items-center gap-1.5 text-sm text-cream/70">
                        <Bath size={14} />
                        <span>{model.baths ?? "TBD"} BATH</span>
                      </div>
                    </div>
                    {model.dimensions && (
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Dimensions</span>
                        <div className="flex items-center gap-1.5 text-sm text-cream/70">
                          <span>{model.dimensions}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-cream/70 font-light leading-relaxed mb-8 flex-grow">
                    {model.tagline}
                  </p>
                  
                  <div className="mt-auto">
                    <Link to={`/floor-plans/${model.id}`}>
                      <Button variant="outline" className="w-full">EXPLORE MODEL</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/floor-plans">
              <Button variant="outline" className="inline-flex items-center gap-2">
                VIEW ALL FLOOR PLANS <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
