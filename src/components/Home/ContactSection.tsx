import { motion } from "motion/react";
import Button from "../ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-deep-brown" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">READY TO START YOUR LEGACY?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 leading-tight">
              Begin Your <span className="italic font-normal">Custom Build</span> Journey
            </h2>
            <p className="text-cream/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
              We only take on 8-10 custom builds per year to ensure absolute quality. Contact us today to check availability and start the conversation about your dream mountain retreat.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Direct Call</span>
                  <a href="tel:+18005550123" className="text-xl font-serif text-cream hover:text-amber transition-colors">(800) 555-0123</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Email Inquiries</span>
                  <a href="mailto:hello@kingscabins.com" className="text-xl font-serif text-cream hover:text-amber transition-colors">hello@kingscabins.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Design Studio</span>
                  <p className="text-xl font-serif text-cream">742 Timberline Ridge Road,<br />Gatlinburg, TN 37738</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal p-10 lg:p-14 border border-white/5 shadow-luxury"
          >
            <h3 className="text-2xl font-serif text-cream mb-8 text-center invisible h-0">Request Quote</h3>
            <form className="space-y-6" id="quote-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
                    placeholder="Wick"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Interest</label>
                <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm appearance-none">
                  <option>Bespoke Custom Build</option>
                  <option>Existing Model Customization</option>
                  <option>Phase 1 Consulting</option>
                  <option>Land + Cabin Package</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Your Vision</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm min-h-[120px]"
                  placeholder="Tell us about your dream cabin..."
                ></textarea>
              </div>

              <Button variant="primary" className="w-full py-4 text-center justify-center">
                SEND QUOTE REQUEST
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
