import { motion } from "motion/react";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image with Parallax Effect (simulated with motion) */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0 text-white"
      >
        <img
          src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Log Cabin in Mountains"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.5em] font-medium text-amber mb-6">
            CRAFTED FOR GENERATIONS
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[1.1] mb-8">
            Luxury Log Homes <br />
            <span className="italic font-normal serif">Built for</span> Legacy
          </h1>
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            From the heart of the Tennessee mountains, we craft bespoke log homes that blend rugged craftsmanship with sophisticated luxury. Your dream retreat, handcrafted to perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="w-full sm:w-auto">
              REQUEST YOUR CABIN QUOTE
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              EXPLORE FLOOR PLANS
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40">Discover more</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-amber/60" size={20} />
        </motion.div>
      </motion.div>

      {/* Layered texture overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]" />
    </section>
  );
}
