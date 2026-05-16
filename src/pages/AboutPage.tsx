import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import Button from "../components/ui/Button";
import { TreePine, Users, Award, Hammer } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "20+" },
    { label: "Custom Homes Built", value: "128" },
    { label: "Master Craftsmen", value: "15" },
    { label: "Design Awards", value: "12" },
  ];

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
  ];

  return (
    <PageLayout>
      <InnerHero 
        title="Our Story & Philosophy"
        subtitle="Crafting architectural legacies in the heart of the timber country for over two decades."
        image="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=2000"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">THE GENERATIONAL BUILDER</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Rooted in <span className="italic font-normal">Tradition</span>, Driven by <span className="italic font-normal font-serif">Innovation</span>
              </h2>
              <div className="space-y-6 text-cream/70 leading-relaxed font-light text-lg">
                <p>
                  Kings Cabins was founded on a simple, uncompromising principle: that a log home should be an heirloom, not just a structure. What started as a small team of timber artisans in Gatlinburg, Tennessee, has evolved into a leading premium architectural firm specializing in luxury log craftsmanship.
                </p>
                <p>
                  Today, we merge age-old hand-scrawling techniques with advanced CAD modeling and sustainable forestry practices. The result is a home that feels like it has stood for centuries, but functions with the effortless luxury of a modern resort.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-sm overflow-hidden shadow-luxury"
            >
              <img 
                src="https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=1200" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-amber/10 mix-blend-overlay" />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="block text-5xl md:text-6xl font-serif text-amber mb-2">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-espresso/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">The Pillars of <span className="italic font-normal">Kings Cabins</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: TreePine, title: "Noble Materials", text: "We hand-select every timber from cold-climate, slow-growth forests for maximum density and character." },
              { icon: Hammer, title: "Precision Fitting", text: "Our shrinkage-compensating joinery techniques ensure a weather-tight legacy that settles perfectly over time." },
              { icon: Award, title: "Aesthetic Integrity", text: "We refuse generic designs. Every line, stone, and beam is placed with an architect's eye for balance and mood." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full border border-amber/30 mx-auto flex items-center justify-center text-amber">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-serif">{value.title}</h3>
                <p className="text-sm text-cream/50 leading-relaxed max-w-xs mx-auto">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-12 block">THE VISIONARIES</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-[4/5] md:w-4/5 mx-auto overflow-hidden shadow-luxury">
                <img src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200" alt="Founders" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
             </div>
             <div className="text-left">
                <h3 className="text-3xl font-serif mb-4">James & Eleanor King</h3>
                <span className="text-amber uppercase tracking-widest text-xs font-semibold block mb-8 underline decoration-amber/30 decoration-2 underline-offset-8">FOUNDERS & PRINCIPAL DESIGNERS</span>
                <p className="text-cream/60 font-light italic mb-8 leading-relaxed">
                    "Our goal was never to be the biggest builder in the region—only the most intentional. We treat every trunk and timber as if we were building for our own children. Because at the end of the day, your legacy is our reputation."
                </p>
                <div className="h-px w-20 bg-amber/20 mb-8" />
                <Button variant="outline">VIEW OUR PORTFOLIO</Button>
             </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
