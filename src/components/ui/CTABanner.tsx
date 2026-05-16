import { motion } from "motion/react";
import Button from "./Button";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-espresso">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2000"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">YOUR MOUNTAIN SANCTUARY AWAITS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 leading-tight">
              Ready to Build <br />
              <span className="italic font-normal serif">Your Legacy?</span>
            </h2>
            <p className="text-cream/60 text-lg font-light mb-10 leading-relaxed">
              Every great journey begins with a conversation. Let's discuss your vision for the perfect log home retreat. 
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button variant="primary" className="w-full sm:w-auto px-10">
                REQUEST A QUOTE
              </Button>
              <a href="tel:+18005550123" className="flex items-center gap-3 text-cream group">
                <div className="w-12 h-12 rounded-full border border-amber/30 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-charcoal transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-0.5">Call Us Directly</span>
                  <span className="text-lg font-serif">(800) 555-0123</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
