import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Site Analysis",
    description: "We walk your land to understand the orientation, views, and topography, ensuring your cabin harmonizes perfectly with its environment."
  },
  {
    number: "02",
    title: "Architectural Vision",
    description: "Our designers collaborate with you to create a bespoke floor plan that balances cozy lodge atmosphere with modern open-concept luxury."
  },
  {
    number: "03",
    title: "Timber Selection",
    description: "Hand-picking every log based on grain, taper, and character. We only select the finest timbers that meet our 'Signature Grade' standard."
  },
  {
    number: "04",
    title: "The Hand-Crafted Build",
    description: "Our artisans perform the initial stacking and fitting at our facility before transporting and reassembling on your property with surgical precision."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-espresso" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block"
          >
            SOPHISTICATED EXECUTION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-cream"
          >
            The Signature <span className="italic font-normal">Build Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`p-10 relative overflow-hidden group ${
                index !== steps.length - 1 ? "md:border-r border-white/10" : ""
              } ${index < 2 ? "lg:border-b-0 border-b border-white/10" : ""}`}
            >
              <div className="relative z-10">
                <span className="text-5xl font-serif text-amber/20 mb-8 block group-hover:text-amber/40 transition-colors duration-500">
                  {step.number}
                </span>
                <h3 className="text-xl font-serif text-cream mb-4 group-hover:text-amber transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center text-center">
            <p className="text-cream/40 text-sm max-w-xl mb-8 font-light italic">
                "Wait time for new builds is currently 14-18 months. We prioritize quality over speed to ensure every legacy home receives the attention it deserves."
            </p>
            <div className="w-16 h-px bg-amber/30" />
        </div>
      </div>
    </section>
  );
}
