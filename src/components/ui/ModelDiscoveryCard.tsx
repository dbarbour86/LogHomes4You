import React from "react";
import { ExternalLink, Bed, Bath, Maximize2, Compass, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { DiscoveryModel } from "../../data/models";

interface ModelDiscoveryCardProps {
  key?: React.Key;
  model: DiscoveryModel;
  matchExplanation?: string;
  showProviderLink?: boolean;
}

export default function ModelDiscoveryCard({
  model,
  matchExplanation,
  showProviderLink = true,
}: ModelDiscoveryCardProps) {
  const explanation = matchExplanation || model.fitSummary;

  return (
    <div className="bg-white border border-sand-border rounded-lg overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Image Header with Badge */}
      <div className="relative aspect-[16/10] bg-sand-muted overflow-hidden">
        <img
          src={model.image}
          alt={`${model.name} log home design`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="bg-forest/90 text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm shadow-xs backdrop-blur-xs">
            {model.sqft} SQ FT
          </span>
          {model.hasLoft && (
            <span className="bg-white/95 text-timber text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm shadow-xs border border-sand-border">
              Loft Layout
            </span>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Title & Provider Line */}
        <div className="mb-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-serif font-bold text-timber tracking-tight">
              {model.name}
            </h3>
            {model.dimensions && (
              <span className="text-xs text-timber-subtle font-mono">
                {model.dimensions}
              </span>
            )}
          </div>
          <p className="text-xs text-timber-subtle mt-0.5">
            Offered by{" "}
            {showProviderLink ? (
              <Link
                to={model.provider.profilePath}
                className="text-cedar font-medium hover:underline"
              >
                {model.provider.name}
              </Link>
            ) : (
              <span className="text-timber font-medium">{model.provider.name}</span>
            )}
          </p>
        </div>

        {/* Spec Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-timber-muted py-2.5 px-3 bg-sand rounded-md border border-sand-border/70 mb-4">
          <div className="flex items-center gap-1.5">
            <Bed size={15} className="text-cedar" />
            <span>{model.beds ? `${model.beds} Bed${model.beds > 1 ? "s" : ""}` : "Flexible"}</span>
          </div>
          <span className="text-sand-border-dark">•</span>
          <div className="flex items-center gap-1.5">
            <Bath size={15} className="text-cedar" />
            <span>{model.baths ? `${model.baths} Bath${model.baths > 1 ? "s" : ""}` : "1 Bath"}</span>
          </div>
          {model.stories && (
            <>
              <span className="text-sand-border-dark">•</span>
              <div className="flex items-center gap-1.5">
                <Layers size={15} className="text-cedar" />
                <span>{model.stories} {model.stories > 1 ? "Levels" : "Level"}</span>
              </div>
            </>
          )}
        </div>

        {/* Fit / Recommendation Explanation */}
        <div className="mb-5 flex-grow">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest mb-1">
            Why It Fits:
          </p>
          <p className="text-xs sm:text-sm text-timber-muted leading-relaxed font-normal">
            {explanation}
          </p>
        </div>

        {/* Action Button: Direct Canonical Link */}
        <div className="pt-3 border-t border-sand-border/70 mt-auto">
          <a
            href={model.canonicalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-dark text-white text-xs sm:text-sm font-semibold tracking-wide py-2.5 px-4 rounded-md transition-colors"
          >
            <span>View Floor Plan at King's Cabins</span>
            <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
