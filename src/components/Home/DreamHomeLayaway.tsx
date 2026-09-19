import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function DreamHomeLayaway() {
  return (
    <section 
      className="relative py-24 lg:py-32 bg-charcoal overflow-hidden border-b border-white/5" 
      id="layaway"
      aria-labelledby="layaway-heading"
    >
      {/* Background Image Layer with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero_about.png"
          alt="Luxury King's Cabins mountain lodge retreat"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/90 lg:to-charcoal/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/80" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial & Narrative */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-amber/10 border border-amber/30 px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
              <span className="text-amber text-[11px] uppercase tracking-[0.35em] font-semibold">
                DREAM HOME LAYAWAY
              </span>
            </motion.div>

            <motion.h2
              id="layaway-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-[1.1] mb-6 font-serif tracking-tight"
            >
              PUT YOUR DREAM <br className="hidden sm:inline" />
              <span className="italic font-normal text-amber">LOG HOME</span> ON LAYAWAY
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream/80 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl"
            >
              Your log home doesn't have to stay a someday dream. Start with 10% down and use our 1–5 year layaway program to work toward your King's Cabins home on your timeline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full sm:w-auto"
            >
              <Link to="/contact?interest=Dream+Home+Layaway" className="inline-block w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="group w-full sm:w-auto shadow-2xl py-4 sm:py-5 px-8 sm:px-10 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3"
                >
                  <span>Explore Dream Home Layaway</span>
                  <ArrowRight size={15} className="text-charcoal transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Monumental Typographic Offer Treatment */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-espresso/75 border border-amber/25 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-2xl rounded-xs overflow-hidden"
            >
              {/* Architectural Gold Corner Framing */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber/50" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber/50" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber/50" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber/50" />

              {/* Card Header */}
              <div className="text-center pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-white/10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber font-semibold block mb-1">
                  EXCLUSIVE PROGRAM
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-cream font-bold">
                  Bespoke Planning
                </h3>
              </div>

              {/* Big Typographic Pillars (Side-by-side on all screens) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-8 items-center text-center">
                {/* 10% DOWN */}
                <div className="flex flex-col items-center">
                  <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-amber tracking-tight leading-none mb-2">
                    10%
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-cream font-bold">
                    DOWN
                  </div>
                  <div className="w-6 sm:w-8 h-px bg-amber/40 my-2 sm:my-3" />
                  <span className="text-cream/60 text-[10px] sm:text-xs font-light tracking-wide">
                    Initial Deposit
                  </span>
                </div>

                {/* 1-5 YEARS */}
                <div className="flex flex-col items-center border-l border-white/10 pl-3 sm:pl-8">
                  <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-cream tracking-tight leading-none mb-2">
                    1–5
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-cream font-bold">
                    YEARS
                  </div>
                  <div className="w-6 sm:w-8 h-px bg-amber/40 my-2 sm:my-3" />
                  <span className="text-cream/60 text-[10px] sm:text-xs font-light tracking-wide">
                    To Pay & Plan
                  </span>
                </div>
              </div>

              {/* Primary Offer Badge / Summary */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 text-center">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber font-semibold">
                  10% DOWN · 1–5 YEARS TO PAY
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
