import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import { Hammer, Ruler, Truck, Home, Sparkles, CheckCircle2 } from "lucide-react";

import imgProcess1 from "../assets/images/regenerated_image_1778949965867.jpg";
import imgProcess2 from "../assets/images/regenerated_image_1778949970715.jpg";

export default function ProcessPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Build Process", href: "/process" },
  ];

  const fullSteps = [
    {
      icon: Ruler,
      title: "Phase 1: Architectural Discovery",
      text: "We begin with a deep-dive consultation. Whether on your land or in our studio, we analyze the views, topography, and your lifestyle needs. This phase ends with a comprehensive 3D model of your custom retreat."
    },
    {
      icon: Hammer,
      title: "Phase 2: Handcrafted Timber Work",
      text: "Every log is hand-scratched and fitted at our Tennessee timber yard. We utilize age-old joinery techniques that allow for natural settling while maintaining structural integrity for generations."
    },
    {
      icon: Truck,
      title: "Phase 3: Logistics & Staging",
      text: "Once the shell is complete, every timber is numbered, disassembled, and carefully loaded for transport to your site. We coordinate all logistics, ensuring your home arrives safely and on schedule."
    },
    {
        icon: Home,
        title: "Phase 4: On-Site Reassembly",
        text: "Our master crew travels to your site to precisely restack the logs onto your foundation. The speed of this 'barn raising' moment is often the highlight of our clients' build journey."
    },
    {
        icon: Sparkles,
        title: "Phase 5: High-End Finishing",
        text: "We work with preferred local contractors or your own team to oversee the install of windows, stone masonry, and premium interior finishes that bring the Kings Cabins mood to life."
    }
  ];

  return (
    <PageLayout>
      <InnerHero 
        title="Our Signature Build Process"
        subtitle="A meticulous journey from raw timber to architectural masterpiece. We build for quality, not speed."
        image="process_1.jpg"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The <span className="italic font-normal">Kings Cabins</span> <br />Standard of Care</h2>
              <div className="space-y-6 text-cream/60 leading-relaxed font-light">
                <p>
                  Most builders focus on the end result. We focus on the integrity of the journey. A log home is a living organism; it breathes, it moves, and it matures. To build one correctly requires an obsession with physics as much as aesthetics.
                </p>
                <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 text-cream">
                        <CheckCircle2 size={16} className="text-amber" />
                        <span className="text-sm font-medium tracking-wide">SHRINKAGE COMPENSATING JOINERY</span>
                    </div>
                    <div className="flex items-center gap-3 text-cream">
                        <CheckCircle2 size={16} className="text-amber" />
                        <span className="text-sm font-medium tracking-wide">PRECISION HAND-SCRATCHING</span>
                    </div>
                    <div className="flex items-center gap-3 text-cream">
                        <CheckCircle2 size={16} className="text-amber" />
                        <span className="text-sm font-medium tracking-wide">MOISTURE-CONTROLLED STACKING</span>
                    </div>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
               <img src={imgProcess1} className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all" alt="Process 1" referrerPolicy="no-referrer" />
               <img src={imgProcess2} className="w-full h-64 object-cover rounded-sm mt-8 grayscale hover:grayscale-0 transition-all" alt="Process 2" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="space-y-0 border-l border-white/5 pl-8 md:pl-20 py-10">
            {fullSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pb-24 last:pb-0"
              >
                <div className="absolute -left-[calc(2rem+1px)] md:-left-[calc(5rem+1px)] top-0 w-8 md:w-20 h-px bg-amber/30" />
                <div className="absolute -left-[calc(2rem+5px)] md:-left-[calc(5rem+5px)] top-0 w-2 h-2 rounded-full bg-amber shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                
                <div className="max-w-3xl">
                    <span className="text-amber/40 text-4xl font-serif mb-4 block">0{i+1}</span>
                    <h3 className="text-2xl font-serif text-cream mb-4">{step.title}</h3>
                    <p className="text-cream/50 leading-relaxed font-light">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
