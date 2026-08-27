import { motion } from "motion/react";
import Hero from "../components/Home/Hero";
import OurStory from "../components/Home/OurStory";
import FeaturedModels from "../components/Home/FeaturedModels";
import Process from "../components/Home/Process";
import SuperiorTeaser from "../components/Home/SuperiorTeaser";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";
import ContactSection from "../components/Home/ContactSection";
import { TrendingUp, Wallet, Calculator, MapPin } from "lucide-react";
import Button from "../components/ui/Button";
import React, { useState } from "react";
import { useSEO } from "../hooks/useSEO";

export default function HomePage() {
  const [guideEmail, setGuideEmail] = useState("");
  const [guideStatus, setGuideStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useSEO({
    title: "Log Homes, Floor Plans & Packages | King's Cabins",
    description: "Explore handcrafted King's Cabins log homes, floor plans and building packages. Choose from proven designs or customize your home. Available nationwide.",
    url: "https://kingscabins.com/"
  });

  const handleGuideSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGuideStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "Guide Request",
          lastName: "User",
          email: guideEmail,
          interest: "Planning Guide Download",
          message: "User requested the 42-page planning guide."
        }),
      });

      const data = await response.json();
      if (data.success) {
        setGuideStatus("success");
        setGuideEmail("");
      } else {
        setGuideStatus("error");
      }
    } catch (error) {
      console.error("Guide request error:", error);
      setGuideStatus("error");
    }
  };

  return (
    <>
      <Hero />
      
      {/* Trust Bar & Nationwide Notice */}
      <section className="py-12 bg-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
              <span className="text-xl font-serif tracking-widest">MOUNTAIN DIGS</span>
              <span className="text-xl font-serif tracking-widest">TIMBER WEEKLY</span>
              <span className="text-xl font-serif tracking-widest">ARCH LAND</span>
              <span className="text-xl font-serif tracking-widest">LOG LIVING</span>
              <span className="text-xl font-serif tracking-widest">CABIN LIFE</span>
          </div>
          
          <div className="text-center max-w-2xl mx-auto flex items-center justify-center gap-3 border border-white/5 bg-deep-brown px-6 py-4">
            <MapPin size={16} className="text-amber flex-shrink-0" />
            <p className="text-cream/80 text-sm font-light">
              King's Cabins offers log home plans, packages and construction options for customers throughout the United States.
            </p>
          </div>
        </div>
      </section>

      <OurStory />
      
      {/* The Little King Special Promo */}
      <section className="py-20 bg-espresso border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-amber/10 border border-amber/20 px-4 py-1.5 mb-6">
                <span className="text-amber text-[10px] uppercase tracking-[0.3em] font-medium">LIMITED TIME SPECIAL</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
                The Little King <br/>
                <span className="italic font-normal serif text-amber">$49,925.00</span>
              </h2>
              <p className="text-cream/70 text-lg font-light leading-relaxed mb-8">
                An incredible value for a genuine log home. The Little King offers a highly efficient 960 sq. ft. footprint featuring a 2-bedroom main floor layout with an additional loft space, all at an unbeatable special price.
              </p>
              <ul className="space-y-3 text-cream/80 font-light mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                  960 Total Sq. Ft. (Under Roof)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                  2 Bedrooms / 1 Bath
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                  Spacious Loft & Covered Porch
                </li>
              </ul>
              <Button 
                variant="primary" 
                onClick={() => window.location.href = '/floor-plans/the-little-king'}
              >
                VIEW FLOOR PLAN & DETAILS
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber/20 to-transparent blur-3xl rounded-full opacity-50 -z-10"></div>
              <img 
                src="/LittleKing.png" 
                alt="The Little King Log Home Special" 
                className="w-full h-auto object-cover border border-white/10 shadow-luxury"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedModels />
      <Process />
      <SuperiorTeaser />
      <Testimonials />
      <FAQ />

      {/* Financing/Planning Help Section */}
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
              <form onSubmit={handleGuideSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={guideEmail}
                  onChange={(e) => setGuideEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-charcoal border border-white/10 px-4 py-3 text-cream text-sm focus:border-amber/50 outline-none"
                />
                <Button 
                  variant="primary" 
                  className="w-full disabled:opacity-50"
                  type="submit"
                  disabled={guideStatus === "loading"}
                >
                  {guideStatus === "loading" ? "SENDING..." : guideStatus === "success" ? "SENT! CHECK EMAIL" : "DOWNLOAD GUIDE"}
                </Button>
                {guideStatus === "error" && (
                  <p className="text-red-400 text-xs italic text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Investor Teaser Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="/craftsmanship.png" 
            alt="King's Cabins Craftsmanship" 
            className="w-full h-full object-cover grayscale-[20%] brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-6 block">THE NEXT CHAPTER</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">We've Built the Homes.</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-8"><span className="italic font-normal serif">Now We're Building What's Next.</span></h2>
            <p className="text-cream/70 text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              King's Cabins has spent decades building genuine log homes made to last for generations. We're now exploring relationships with qualified investors and strategic partners who share our vision for expanding production and bringing King's Cabins to more customers across America.
            </p>
            <Button 
              variant="primary" 
              className="mx-auto block"
              onClick={() => window.location.href = '/investors'}
            >
              EXPLORE THE OPPORTUNITY
            </Button>
            <p className="text-[10px] uppercase tracking-widest text-cream/40 mt-6">
              Investor & strategic partnership inquiries
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
