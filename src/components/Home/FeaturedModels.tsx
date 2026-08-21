import { motion } from "motion/react";
import Button from "../ui/Button";
import { ArrowRight, Maximize2, Bed, Bath } from "lucide-react";

import { Link } from "react-router-dom";
import { homeModels } from "../../data/models";

export default function FeaturedModels() {
  return (
    <section className="py-24 bg-deep-brown" id="models">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">SIGNATURE COLLECTION</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cream">
              Featured <span className="italic font-normal">Home Models</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/floor-plans">
              <Button variant="outline" className="flex items-center gap-2">
                VIEW ALL FLOOR PLANS <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {homeModels.filter(m => m.featured).slice(0, 3).map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/floor-plans/${model.id}`} className="group block cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm shadow-luxury">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Button variant="primary" className="w-full py-2.5 text-xs">
                      EXPLORE MODEL
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl text-cream font-serif group-hover:text-amber transition-colors">{model.name}</h3>
                    <div className="h-px flex-grow mx-4 bg-amber/20" />
                  </div>
                  <p className="text-cream/60 italic text-sm font-light leading-relaxed">
                    "{model.tagline}"
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-amber font-medium">
                      <Maximize2 size={14} />
                      <span>{model.sqft} SQFT</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-cream/70">
                      <Bed size={14} />
                      <span>{model.beds ?? "TBD"} BEDS</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-cream/70">
                      <Bath size={14} />
                      <span>{model.baths ?? "TBD"} BATHS</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-amber font-serif italic text-2xl">We are constantly adding new floor plans, so please check back often.</p>
          <div className="mt-4 h-px w-24 bg-amber/20 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
