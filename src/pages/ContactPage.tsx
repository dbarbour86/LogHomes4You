import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import Button from "../components/ui/Button";

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <PageLayout showCTA={false}>
      <InnerHero 
        title="Contact Our Studio"
        subtitle="Schedule a consultation or inquire about a custom project. We respond to all serious inquiries within 24 hours."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Discuss <br /><span className="italic font-normal font-serif">Your Legacy Home</span></h2>
                  <p className="text-cream/50 text-lg leading-relaxed font-light">
                    Whether you already have blueprints or are just starting to dream, our team is ready to guide you through the journey of handcrafted luxury.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                            <Phone size={18} />
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Call Us</span>
                            <a href="tel:+18005550123" className="text-lg font-serif hover:text-amber transition-colors">(800) 555-0123</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                            <Mail size={18} />
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Email Us</span>
                            <a href="mailto:hello@kingscabins.com" className="text-lg font-serif hover:text-amber transition-colors">hello@kingscabins.com</a>
                        </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                            <Clock size={18} />
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Studio Hours</span>
                            <p className="text-sm text-cream/80 leading-relaxed font-medium uppercase tracking-wider">Mon - Fri: 9am - 6pm<br />Sat: By Appointment</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                            <MapPin size={18} />
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Visit Us</span>
                            <p className="text-sm text-cream/80 leading-relaxed font-medium uppercase tracking-wider">742 Timberline Ridge,<br />Gatlinburg, TN 37738</p>
                        </div>
                    </div>
                  </div>
               </div>

               <div className="p-8 bg-espresso/50 border border-white/5 rounded-sm flex items-center gap-6">
                    <div className="p-4 bg-amber/10 text-amber rounded-full">
                        <MessageSquare size={24} />
                    </div>
                    <div>
                        <h4 className="text-cream font-serif mb-1">Immediate Questions?</h4>
                        <p className="text-xs text-cream/50">Our principal architect is available via SMS for expedited land consulting. Call the main line and select 'Consulting'.</p>
                    </div>
               </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-charcoal p-10 lg:p-14 border border-white/10 shadow-luxury"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-cream/40">First Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream text-sm outline-none focus:border-amber/50 transition-all font-light" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-cream/40">Last Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream text-sm outline-none focus:border-amber/50 transition-all font-light" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-cream/40">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream text-sm outline-none focus:border-amber/50 transition-all font-light" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-cream/40">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream text-sm outline-none focus:border-amber/50 transition-all font-light" placeholder="(555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-cream/40">Project Stage</label>
                  <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream text-sm outline-none focus:border-amber/50 transition-all font-light appearance-none">
                    <option>Just Researching</option>
                    <option>Own Land, Ready to Build</option>
                    <option>Looking for Land + Home Package</option>
                    <option>Have Blueprints, Need Builder</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-cream/40">Your Vision</label>
                  <textarea className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream text-sm outline-none focus:border-amber/50 transition-all font-light min-h-[120px]" placeholder="How can we help you build your legacy?"></textarea>
                </div>
                <Button variant="primary" className="w-full py-4 text-center justify-center">SUBMIT INQUIRY</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-espresso relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 bg-charcoal/20 z-10 pointer-events-none" />
        <img src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale brightness-50" alt="Map Location" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
            <div className="w-16 h-16 rounded-full bg-amber text-charcoal flex items-center justify-center shadow-2xl mb-4 mx-auto animate-pulse">
                <MapPin size={24} />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-cream bg-charcoal/80 px-4 py-2 rounded-sm border border-amber/30">VISIT THE STUDIO</span>
        </div>
      </section>
    </PageLayout>
  );
}
