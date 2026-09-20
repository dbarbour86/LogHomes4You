import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface InnerHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  badge?: string;
  breadcrumbs: { name: string; href: string }[];
}

export default function InnerHero({
  title,
  subtitle,
  image,
  badge,
  breadcrumbs,
}: InnerHeroProps) {
  if (image) {
    return (
      <section className="relative bg-forest-dark text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image with warm overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/90 to-forest-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-6" aria-label="Breadcrumbs">
            {breadcrumbs.map((crumb, idx) => (
              <div key={crumb.name} className="flex items-center gap-2">
                <Link
                  to={crumb.href}
                  className="text-xs uppercase tracking-wider text-sand/70 hover:text-white transition-colors"
                >
                  {crumb.name}
                </Link>
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight size={12} className="text-sand/40" />
                )}
              </div>
            ))}
          </nav>

          {badge && (
            <span className="inline-block bg-cedar text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm mb-4">
              {badge}
            </span>
          )}

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-5 tracking-tight max-w-4xl">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-sand/90 max-w-3xl font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  // Pure Editorial Header without image
  return (
    <section className="bg-sand-muted border-b border-sand-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-4" aria-label="Breadcrumbs">
          {breadcrumbs.map((crumb, idx) => (
            <div key={crumb.name} className="flex items-center gap-2">
              <Link
                to={crumb.href}
                className="text-xs uppercase tracking-wider text-timber-subtle hover:text-forest transition-colors"
              >
                {crumb.name}
              </Link>
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight size={12} className="text-timber-subtle/50" />
              )}
            </div>
          ))}
        </nav>

        {badge && (
          <span className="inline-block bg-forest-light text-forest text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-sm mb-3 border border-forest/10">
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-timber mb-4 tracking-tight max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-timber-muted max-w-3xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
