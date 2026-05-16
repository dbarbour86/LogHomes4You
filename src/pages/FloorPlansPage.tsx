import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import Button from "../components/ui/Button";
import { Maximize2, Bed, Bath, ArrowRight } from "lucide-react";

const allModels = [
  { id: 1, name: "The Matthew", sqft: "1,636", beds: 3, baths: 2, image: "Matthew.png", category: "Signature" },
  { id: 2, name: "The Mark", sqft: "1,888", beds: 3, baths: 2, image: "Mark.png", category: "Signature" },
  { id: 3, name: "The Luke", sqft: "1,926", beds: 4, baths: 3, image: "Luke.png", category: "Signature" },
];

export default function FloorPlansPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Floor Plans", href: "/floor-plans" },
  ];

  return (
    <PageLayout>
      <InnerHero 
        title="Bespoke Floor Plans"
        subtitle="Architectural starting points for your custom mountain journey. Every design is infinitely customizable."
        image="Philippians.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-white/5 pb-8">
            <div className="flex items-center gap-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {["All Models"].map((cat, i) => (
                <button 
                  key={cat} 
                  className={`text-[10px] uppercase tracking-[0.3em] whitespace-nowrap transition-colors text-amber font-bold`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-cream/40 text-xs italic">
                Showing {allModels.length} Signature Designs
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {allModels.map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-sm shadow-luxury bg-deep-brown border border-white/5">
                  <img src={model.image} alt={model.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber text-charcoal text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">{model.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Button variant="primary" className="text-xs">VIEW FULL SPECS</Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-cream hover:text-amber transition-colors cursor-pointer">{model.name}</h3>
                  <div className="flex items-center gap-6 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-amber font-medium">
                      <Maximize2 size={12} />
                      <span>{model.sqft} SQFT</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-cream/40">
                      <Bed size={12} />
                      <span>{model.beds} BEDS</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-cream/40">
                      <Bath size={12} />
                      <span>{model.baths} BATHS</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12 border-t border-white/5"
          >
            <p className="text-amber font-serif italic text-2xl">Adding more models very soon!</p>
            <div className="mt-4 h-px w-24 bg-amber/20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Custom Section */}
      <section className="py-24 bg-espresso">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto p-12 md:p-20 border border-amber/20 bg-charcoal shadow- luxury relative"
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
