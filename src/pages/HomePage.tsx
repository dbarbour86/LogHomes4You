import { motion } from "motion/react";
import Hero from "../components/Home/Hero";
import OurStory from "../components/Home/OurStory";
import FeaturedModels from "../components/Home/FeaturedModels";
import Process from "../components/Home/Process";
import Gallery from "../components/Home/Gallery";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";
import ContactSection from "../components/Home/ContactSection";
import { TrendingUp, Wallet, Calculator } from "lucide-react";
import Button from "../components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Trust Bar */}
      <section className="py-12 bg-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-serif tracking-widest">MOUNTAIN DIGS</span>
              <span className="text-xl font-serif tracking-widest">TIMBER WEEKLY</span>
              <span className="text-xl font-serif tracking-widest">ARCH LAND</span>
              <span className="text-xl font-serif tracking-widest">LOG LIVING</span>
              <span className="text-xl font-serif tracking-widest">CABIN LIFE</span>
          </div>
        </div>
      </section>

      <OurStory />
      <FeaturedModels />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />

      {/* Financing/Planning Help Section (extracted from App.tsx early) */}
      <section className="py-24 bg-charcoal border-y border-white/5 relative overflow-hidden" id="planning">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">INVEST IN LEGACY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-cream mb-8 leading-tight">
                Planning Your <span className="italic font-normal">Mountain Investment</span>
              </h2>
              <p className="text-cream/60 text-lg font-light leading-relaxed mb-10">
                Building a custom log home is one of the most significant investments you'll ever make. We provide in-house planning experts and preferred financing partners who specialize in log home construction loans.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber"><TrendingUp size={18} /></div>
                  <span className="text-cream/80 font-medium">Log homes historically appreciate at 15% higher rates than stick-built.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber"><Wallet size={18} /></div>
                  <span className="text-cream/80 font-medium">Specialized lenders for construction-to-permanent funding.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber"><Calculator size={18} /></div>
                  <span className="text-cream/80 font-medium">Complimentary site evaluation and cost-to-build analysis.</span>
                </div>
              </div>
            </div>

            <div className="bg-espresso p-12 border border-white/5 rounded-sm relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-serif text-cream mb-6">Request Planning Guide</h3>
              <p className="text-cream/40 text-sm mb-8">
                Get our exclusive 42-page guide on financing, land selection, and timber species.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-charcoal border border-white/10 px-4 py-3 text-cream text-sm focus:border-amber/50 outline-none"
                />
                <Button variant="primary" className="w-full">DOWNLOAD GUIDE</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
