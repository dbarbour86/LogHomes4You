import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import Button from "../components/ui/Button";
import { Maximize2, Bed, Bath } from "lucide-react";
import { Link } from "react-router-dom";
import { homeModels } from "../data/models";
import { useSEO } from "../hooks/useSEO";

export default function SmallLogHomesPage() {
  useSEO({
    title: "Small Log Homes & Floor Plans Under 1,000 Sq Ft | King's Cabins",
    description: "Explore genuine King's Cabins log homes designed around more efficient footprints. Discover smaller floor plans, pricing, and nationwide availability.",
    url: "https://www.kingscabins.com/small-log-homes"
  });

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Small Log Homes", href: "/small-log-homes" },
  ];

  // Filter for the specific 4 models requested
  const smallModelsIds = ["first-chronicles", "second-chronicles", "second-peter", "jude"];
  const smallModels = homeModels.filter(m => smallModelsIds.includes(m.id));

  return (
    <PageLayout>
      <InnerHero 
        title="Small Log Homes. Real King's Cabins Craftsmanship."
        subtitle="These are genuine log homes designed around more efficient footprints. Whether you are building a vacation property, looking to downsize for retirement, or constructing a guest house, these smaller models offer uncompromising quality without the excess."
        image="/FirstChronicles.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {smallModels.map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-deep-brown border border-white/5 shadow-luxury flex flex-col"
              >
                <Link to={`/floor-plans/${model.id}`} className="group block relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={model.image} 
                    alt={`${model.name} ${model.sqft} sq ft log home`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Button variant="primary" className="text-xs">VIEW FULL MODEL</Button>
                  </div>
                </Link>
                
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-3xl font-serif text-cream">{model.name}</h2>
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
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Dimensions</span>
                      <div className="flex items-center gap-1.5 text-sm text-cream/70">
                        <span>{model.dimensions}</span>
                      </div>
                    </div>
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
        </div>
      </section>
    </PageLayout>
  );
}
