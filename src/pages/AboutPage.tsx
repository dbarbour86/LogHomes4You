import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import Button from "../components/ui/Button";
import { TreePine, Hammer, Heart, ShieldCheck, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

export default function AboutPage() {
  useSEO({
    title: "Our Story & Log Home Heritage | King's Cabins",
    description: "Learn about the heritage, craftsmanship, and faith behind King's Cabins log homes. Building legacy mountain retreats nationwide.",
    url: "https://www.kingscabins.com/about"
  });

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
  ];

  const packageItems = [
    "Premium kiln-dried logs",
    "Roof systems & framing materials",
    "Windows & exterior doors",
    "Structural beams & floor systems",
    "Porches, dormers, and gables",
    "Interior framing packages",
    "Custom floor plans",
    "Optional upgrades & finishing features"
  ];

  return (
    <PageLayout>
      <InnerHero 
        title="About Kings Cabins"
        subtitle="Built on Faith. Crafted for Generations."
        image="hero_about.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">OUR LEGACY</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Nearly 50 Years of <br />
                <span className="italic font-normal">True Craftsmanship</span>
              </h2>
              <div className="space-y-6 text-cream/70 leading-relaxed font-light text-lg">
                <p>
                  Since 1976, Kings Cabins has helped families turn the dream of owning a custom log home into reality. What began as a passion for excellence has grown into a legacy of building homes designed to last for generations.
                </p>
                <p>
                  From the heart of Tennessee, we specialize in handcrafted log homes built with premium Eastern White Pine and Western Red Cedar. Every cabin is designed with strength, beauty, and timeless character in mind — blending rugged craftsmanship with modern comfort.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-sm overflow-hidden"
            >
              <img 
                src="craftsmanship.png" 
                alt="Log Home Craftsmanship" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-espresso/20 mix-blend-overlay" />
              <div className="absolute inset-0 border border-white/5" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
            {[
              { 
                icon: ShieldCheck, 
                title: "Built With Integrity", 
                text: "Faith, honesty, and treating people right have always been part of the Kings Cabins foundation since 1976." 
              },
              { 
                icon: TreePine, 
                title: "Premium Materials", 
                text: "We use carefully selected Eastern White Pine and Western Red Cedar for superior durability and beauty." 
              },
              { 
                icon: Hammer, 
                title: "Quality First", 
                text: "Our goal isn't to be the biggest—it's to build homes we're proud to put our name on." 
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="w-12 h-12 rounded-full border border-amber/30 flex items-center justify-center text-amber">
                  <pillar.icon size={20} />
                </div>
                <h3 className="text-xl font-serif text-cream">{pillar.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed font-light">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Superior Package Teaser Section */}
      <section className="py-24 bg-espresso border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {packageItems.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Check size={14} className="text-amber shrink-0" />
                            <span className="text-cream/60 text-sm font-light">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block underline underline-offset-8">THE KINGS CABINS EXPERIENCE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">More Than a Cabin — <br /><span className="italic font-normal">A Complete Experience</span></h2>
              <p className="text-cream/50 mb-8 font-light leading-relaxed">
                Unlike many companies that only provide logs, our Superior Package is designed to deliver a complete shell package with the essential materials needed to move your home toward completion with confidence.
              </p>
              <Link to="/package">
                <Button className="group">
                    EXPLORE THE SUPERIOR PACKAGE
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Designed Around You Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">TAILORED VISION</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">Designed Around <span className="italic font-normal">You</span></h2>
            <p className="text-cream/50 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              No two families are the same — and no two Kings Cabins homes should be either. Whether you want a simple retreat or a luxury lodge, we create homes that reflect your goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    "Simple Cabin Retreats",
                    "Luxury Mountain Lodges",
                    "Family Legacy Homes",
                    "Fully Customized Layouts"
                ].map((type, i) => (
                    <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-sm hover:border-amber/20 transition-all">
                        <h4 className="text-cream font-serif italic text-lg mb-2">{type}</h4>
                        <div className="h-px w-12 bg-amber/20 mx-auto" />
                    </div>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-32">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden shadow-luxury border border-white/5"
             >
                <img src="interior_1.png" alt="Finished Legacy Home" className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-espresso to-transparent">
                    <p className="text-cream font-light italic">"To us, this business is about more than construction. It's about helping people create a place where memories are made for generations."</p>
                </div>
             </motion.div>
             <div className="space-y-8">
                <h3 className="text-3xl font-serif text-cream">Built with Integrity Since 1976</h3>
                <p className="text-cream/60 font-light leading-relaxed">
                    Over the decades, we've helped families across the country design and build beautiful custom log homes while providing guidance through every step of the process.
                </p>
                <div className="space-y-4">
                    <h4 className="text-amber text-xs uppercase tracking-widest font-semibold">Endless Possibilities</h4>
                    <p className="text-cream/40 text-sm font-light">
                        From rustic escapes to luxury timber-frame homes, we offer floor plans and options to bring your vision to life—whether you need logs only or a complete build package.
                    </p>
                </div>
                <div className="pt-4">
                  <p className="text-amber font-serif italic text-xl mb-6">Your dream cabin starts here.</p>
                  <Link to="/contact">
                      <Button variant="outline">START YOUR JOURNEY</Button>
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

