import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface InnerHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs: { name: string; href: string }[];
}

export default function InnerHero({ title, subtitle, image, breadcrumbs }: InnerHeroProps) {
  return (
    <section className="relative h-[65vh] min-h-[500px] flex items-center pt-20 md:pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[10%] brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8" id="breadcrumbs">
            {breadcrumbs.map((crumb, idx) => (
              <div key={crumb.name} className="flex items-center gap-2">
                <Link
                  to={crumb.href}
                  className="text-[10px] uppercase tracking-widest text-cream/40 hover:text-amber transition-colors"
                >
                  {crumb.name}
                </Link>
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight size={10} className="text-cream/20" />
                )}
              </div>
            ))}
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 && word.length > 3 ? "italic font-normal serif" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-cream/60 max-w-2xl font-light italic leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Texture overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]" />
    </section>
  );
}
