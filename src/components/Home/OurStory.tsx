import { motion } from "motion/react";
import { Hammer, ShieldCheck, TreePine, Map } from "lucide-react";

export default function OurStory() {
  const pillars = [
    {
      icon: Hammer,
      title: "Handcrafted Tradition",
      description: "Every log is hand-scratched and precision-fitted by master craftsmen who treat your home like a work of art."
    },
    {
      icon: TreePine,
      title: "Sustainable Sourcing",
      description: "We use only premium, slow-growth timber sourced from sustainably managed forests, ensuring strength and beauty."
    },
    {
      icon: ShieldCheck,
      title: "Built for Generations",
      description: "Our construction techniques exceed industry standards, creating a legacy that will stand for over a century."
    },
    {
      icon: Map,
      title: "Custom Architectural Design",
      description: "No templates. No compromises. We design around your site, your lifestyle, and your unique vision for luxury."
    }
  ];

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden" id="why-us">
      {/* Decorative wood grain background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-left grayscale" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">OUR CRAFT</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 leading-tight">
              Honoring the <span className="italic font-normal">Art of the</span> Log Home
            </h2>
            <div className="space-y-6 text-cream/70 text-lg font-light leading-relaxed">
              <p>
                At Kings Cabins, we believe a home is more than shelter—it's a sanctuary, a legacy, and a physical manifestation of your success. Founded in the heart of the Tennessee timber country, we've spent decades perfecting a signature style that merges rustic ruggedness with high-end architectural luxury.
              </p>
              <p>
                We don't just build cabins; we steward the tradition of logs and mortar, transforming nature's most noble material into cinematic living spaces.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
              <div>
                <span className="block text-4xl font-serif text-amber mb-1">43+</span>
                <span className="text-[10px] uppercase tracking-widest text-cream/40">Years of Craft</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-amber mb-1">100+</span>
                <span className="text-[10px] uppercase tracking-widest text-cream/40">Legacy Homes Built</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/5 hover:border-amber/20 hover:bg-white/10 transition-all duration-500 rounded-sm group"
              >
                <div className="w-12 h-12 rounded-full border border-amber/30 flex items-center justify-center mb-6 text-amber group-hover:bg-amber group-hover:text-charcoal transition-all duration-500">
                  <pillar.icon size={20} />
                </div>
                <h3 className="text-xl font-serif text-cream mb-4">{pillar.title}</h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
