import { motion } from "motion/react";
import { ArrowRight, Box } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function SuperiorTeaser() {
  return (
    <section className="py-24 bg-espresso border-y border-white/5 overflow-hidden" id="superior-package">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">THE KINGS CABINS DIFFERENCE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-8 leading-tight">
              The <span className="italic font-normal">Superior</span> Package
            </h2>
            <p className="text-cream/60 text-lg font-light leading-relaxed mb-10">
              When we say "complete package," we mean it. While others quote you for just the logs, our Superior Package provides every essential element to get your home dried-in and ready for finishing. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                    <span className="text-amber font-serif text-2xl">01</span>
                    <h4 className="text-cream font-medium uppercase tracking-widest text-xs">Architectural Integrity</h4>
                    <p className="text-cream/40 text-xs font-light">Kiln-dried white pine & western red cedar logs available in multiple custom sizes.</p>
                </div>
                <div className="space-y-2">
                    <span className="text-amber font-serif text-2xl">02</span>
                    <h4 className="text-cream font-medium uppercase tracking-widest text-xs">Total Shell Security</h4>
                    <p className="text-cream/40 text-xs font-light">From premium shingles to 2x12 interior stairs and pre-hung wood doors.</p>
                </div>
            </div>

            <Link to="/package">
                <Button className="group flex items-center gap-2">
                    EXPLORE FULL SPECIFICATIONS
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-charcoal rounded-sm overflow-hidden border border-white/5 relative group">
                <img 
                    src="packages.png" 
                    alt="Superior Package Showcase" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-10 left-10 right-10 p-8 pt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-amber rounded-full flex items-center justify-center text-charcoal">
                        <Box size={20} />
                    </div>
                    <p className="text-amber text-xs uppercase tracking-[0.2em] font-medium text-center mb-2">Package Highlight</p>
                    <h3 className="text-xl font-serif text-cream text-center mb-4 italic">"The Most Complete Package for the Money"</h3>
                    <div className="flex justify-center gap-4 border-t border-white/10 pt-4">
                        <div className="text-center">
                            <span className="block text-cream/80 font-serif text-lg">25+</span>
                            <span className="text-[10px] text-cream/40 uppercase tracking-widest leading-none">Standard Layers</span>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center">
                            <span className="block text-cream/80 font-serif text-lg">6x12</span>
                            <span className="text-[10px] text-cream/40 uppercase tracking-widest leading-none">Ridge Beam</span>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
