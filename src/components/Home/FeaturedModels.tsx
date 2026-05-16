import { motion } from "motion/react";
import Button from "../ui/Button";
import { ArrowRight, Maximize2, Bed, Bath } from "lucide-react";

const models = [
  {
    id: 1,
    name: "The Matthew",
    sqft: "1,636",
    beds: 3,
    baths: 2,
    image: "Matthew.png",
    tagline: "A testament to faith and craftsmanship, designed to be a sanctuary where life increases and legacy takes root.",
  },
  {
    id: 2,
    name: "The Mark",
    sqft: "1,888",
    beds: 3,
    baths: 2,
    image: "Mark.png",
    tagline: "An invitation to the outdoors. Featuring an expansive screened porch and a signature stone hearth for year-round mountain living.",
  },
  {
    id: 3,
    name: "The Luke",
    sqft: "1,926",
    beds: 4,
    baths: 3,
    image: "Luke.png",
    tagline: "A sanctuary of light and praise, where grand windows frame nature's majesty in every season.",
  },
];

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
            <Button variant="outline" className="flex items-center gap-2">
              VIEW ALL FLOOR PLANS <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
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
                  <h3 className="text-2xl text-cream font-serif">{model.name}</h3>
                  <div className="h-px flex-grow mx-4 bg-amber/20" />
                </div>
                <p className="text-cream/60 italic text-sm font-light leading-relaxed">
                  "{model.tagline}"
                </p>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-amber font-medium">
                    <Maximize2 size={14} />
                    <span>{model.sqft} SQFT</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-cream/70">
                    <Bed size={14} />
                    <span>{model.beds} BEDS</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-cream/70">
                    <Bath size={14} />
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
          className="mt-16 text-center"
        >
          <p className="text-amber font-serif italic text-2xl">Adding more models very soon!</p>
          <div className="mt-4 h-px w-24 bg-amber/20 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
