import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import { Check, Info } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

const mainPackage = [
  {
    category: "Floor System",
    items: [
      "Sills-Pressure Treated 2x8's",
      "Girders - Three or Four 2x10's or 2x12's",
      "Double Bands - 2x10's",
      "Floor Joist - 2x10's - 16\" O/C",
      "3/4\" OSB T&G for Sub-Floor (1st Floor)"
    ]
  },
  {
    category: "Walls, Dormers & Gables",
    items: [
      "Log's Air/Kiln Dried Double T&G White Pine & Western Red Cedar",
      "Available Sizes: 6x6, 8x8, 8x8-6x10-6x12",
      "Oly-Log Fastener or Bolts & Washers",
      "Technical Grade Caulking & Sealants",
      "Splines or Dowels for structural alignment",
      "Premium Log Siding for Dormers",
      "Skirting surrounding Floor Joists",
      "6x6 Porch Post W.P. & 6x8 Carrier Beams",
      "Matching Log Siding for Gables"
    ]
  },
  {
    category: "Roof System",
    items: [
      "6x12 Ridge Beam or LVL Options",
      "4x8 or 6x8 Rafters (Dimensional or Truss)",
      "1x8 T&G Sheeting for Roof",
      "4x8 Nail base Panels",
      "7/16 OSB Board (with Panel Boards)",
      "15#-Felt Paper moisture barrier",
      "25-30 Year Premium Asphalt Shingles"
    ]
  },
  {
    category: "Porch & Deck Material",
    items: [
      "6x6 Pressure Treated (PT) Posts",
      "Double 2x10 PT Bands",
      "2x8 - 16\" O/C PT Joists",
      "5/4\" x 6's Decking PT (quoted separately)"
    ]
  },
  {
    category: "Interior & Second Floor",
    items: [
        "Framing - 2x4 and 2x6 Studs and Plates",
        "4x8 or 6x8 Heavy Floor Beams",
        "2x6 or 2x8 T&G Flooring",
        "2x8, 10's, or 12's Joists as required"
    ]
  },
  {
    category: "Windows & Doors",
    items: [
        "Double Hung and Casements (Low E Glass)",
        "Full Screens & Grills included",
        "1-3/4\" Pre-Hung Wood Exterior Doors",
        "Customizable Style Options",
        "Coordinating Exterior Trimming"
    ]
  },
  {
    category: "Miscellaneous",
    items: [
        "Exterior Overhang Trim",
        "2x12's Interior Stairs",
        "Complete Set of House Plans (3-5 Sets)"
    ]
  }
];

const optionalItems = [
  "V-Groove Knotty Pine for all partition walls",
  "Western Red Cedar Log Upgrades",
  "Oak and Pine Finished Flooring",
  "Professional On-Job Supervision",
  "Luxury Metal Roof Upgrades",
  "Basement, Porch, and Deck Stairs",
  "Log Size & Style Customization",
  "Premium Stains for Exterior Finish",
  "Door Hardware & Finished Screens"
];

export default function SuperiorPackagePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Superior Package", href: "/package" },
  ];

  return (
    <PageLayout>
      <InnerHero 
        title="The Superior Package"
        subtitle="The most complete log home kit in the industry. Everything you need to turn vision into reality."
        image="packages.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">UNCOMPROMISING QUALITY</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 leading-[1.1]">
                    The <span className="italic font-normal">Superior</span> Package
                </h2>
                <div className="w-12 h-px bg-amber mb-8" />
                <p className="text-cream/50 font-light leading-relaxed mb-10">
                    Our flagship ensemble, designed to be the most comprehensive shell kit in the industry. We provide a dried-in sanctuary that meets the highest standards of mountain architecture.
                </p>
                <div className="p-8 bg-white/5 border border-white/5 rounded-sm">
                    <h4 className="text-amber text-[11px] uppercase tracking-widest font-bold mb-4">Note to Builders</h4>
                    <p className="text-cream/40 text-xs italic font-light leading-loose">
                        All materials may be substituted if not available or due to structural requirements. Any substitution will be of equal or superior quality. Please consult with your project manager for specific timber size inquiries.
                    </p>
                </div>
            </div>

            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {mainPackage.map((section, idx) => (
                    <motion.div
                        key={section.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group"
                    >
                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-amber mb-6 pb-2 border-b border-white/10 group-hover:border-amber/30 transition-colors">
                        {section.category}
                        </h3>
                        <ul className="space-y-4">
                        {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group/item">
                            <div className="w-1 h-1 rounded-full bg-amber/20 mt-2 shrink-0 group-hover/item:bg-amber transition-colors" />
                            <span className="text-cream/70 text-sm font-light leading-relaxed">{item}</span>
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                    ))}

                    {/* Optional Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-espresso/50 p-8 rounded-sm border border-amber/10 md:col-span-2"
                        id="package-optional"
                    >
                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white mb-8 flex items-center gap-2">
                        <Info size={14} className="text-amber" />
                        Optional & Custom Upgrades
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                            {optionalItems.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 list-none">
                                    <Check size={12} className="text-amber/40" />
                                    <span className="text-cream/50 text-sm font-light italic">{item}</span>
                                </li>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
