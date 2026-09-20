import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, CheckCircle, ShieldCheck, MapPin, Compass, ArrowRight, Home } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import ModelDiscoveryCard from "../components/ui/ModelDiscoveryCard";
import { verifiedModels, KINGS_CABINS_PROVIDER } from "../data/models";
import { useSEO } from "../hooks/useSEO";

export default function KingsCabinsProviderPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Providers", href: "/log-home-plans" },
    { name: "King's Cabins", href: "/builders/kings-cabins" },
  ];

  const providerSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "King's Cabins",
    "url": "https://kingscabins.com/",
    "description": "Log home builder and materials package manufacturer based in Tennessee offering residential cabin packages nationwide.",
    "sameAs": "https://kingscabins.com"
  };

  useSEO({
    title: "King's Cabins | Provider Overview & Floor Plans | Log Homes 4 You",
    description: "Learn about King's Cabins, the manufacturer and provider behind the floor plans featured on LogHomes4You. Handcrafted packages and nationwide delivery.",
    url: "https://loghomes4you.com/builders/kings-cabins",
    structuredData: providerSchema,
  });

  // Showcase a selection of verified King's Cabins models
  const sampleModels = verifiedModels.slice(0, 6);

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="King's Cabins"
        subtitle="Provider Profile: Handcrafted log home packages, residential floor plans, and nationwide delivery based in Tennessee timber country."
        badge="Featured Builder"
        breadcrumbs={breadcrumbs}
      />

      <article className="py-14 md:py-20 bg-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Provider Overview Card */}
          <div className="bg-white border border-sand-border rounded-xl p-6 sm:p-10 shadow-subtle mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-sand-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-1">
                  Manufacturer & Builder
                </span>
                <h2 className="text-3xl font-serif font-bold text-timber">
                  King's Cabins Overview
                </h2>
                <div className="flex items-center gap-2 text-xs text-timber-subtle mt-2">
                  <MapPin size={14} className="text-cedar" />
                  <span>Headquartered in Tennessee • Shipping Nationwide</span>
                </div>
              </div>

              <div>
                <a
                  href={KINGS_CABINS_PROVIDER.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-semibold text-sm px-6 py-3 rounded-md shadow-xs transition-colors"
                >
                  <span>Visit King's Cabins</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Factual Information Verified from Codebase */}
            <div className="space-y-6 text-timber text-base leading-relaxed">
              <p className="text-timber-muted">
                <strong>King's Cabins</strong> is a premier log home manufacturer and builder specializing in handcrafted log cabins, residential homes, and commercial mountain lodges. Operating from Tennessee timber country, King's Cabins engineers and cuts structural log packages shipped to building sites throughout the United States.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg bg-sand-muted border border-sand-border">
                  <span className="font-bold text-timber block text-sm mb-1">Extensive Floor Plan Portfolio</span>
                  <p className="text-xs text-timber-muted">Proven layouts ranging from compact 480 sq ft cabins up to 2,700+ sq ft luxury multi-level retreats.</p>
                </div>
                <div className="p-4 rounded-lg bg-sand-muted border border-sand-border">
                  <span className="font-bold text-timber block text-sm mb-1">Premium Kiln-Dried Timber</span>
                  <p className="text-xs text-timber-muted">Precision-milled Eastern White Pine and Western Red Cedar logs dried to minimize settling and shrinkage.</p>
                </div>
                <div className="p-4 rounded-lg bg-sand-muted border border-sand-border">
                  <span className="font-bold text-timber block text-sm mb-1">Package Options & Delivery</span>
                  <p className="text-xs text-timber-muted">Offers engineered materials packages including wall logs, roof beam systems, and complete dry-in components delivered nationwide.</p>
                </div>
                <div className="p-4 rounded-lg bg-sand-muted border border-sand-border">
                  <span className="font-bold text-timber block text-sm mb-1">Custom Plan Flexibility</span>
                  <p className="text-xs text-timber-muted">In-house drafting team capable of modifying existing stock blueprints or designing bespoke floor plans.</p>
                </div>
              </div>

              <div className="p-4 bg-sand rounded-lg border border-sand-border text-xs text-timber-subtle leading-relaxed">
                <strong>Note on Inquiries & Pricing:</strong> LogHomes4You does not provide price quotes, sell building materials, or contract construction on behalf of King's Cabins. For current package pricing, blueprint sets, and site delivery estimates, visit the official King's Cabins website directly.
              </div>
            </div>
          </div>

          {/* Sample Floor Plans Offered by King's Cabins */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cedar block mb-1">
                  Catalog Highlights
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-timber">
                  Floor Plans Offered by King's Cabins
                </h3>
              </div>
              <Link
                to="/log-home-plans"
                className="text-xs sm:text-sm font-semibold text-forest hover:underline uppercase tracking-wider"
              >
                Browse All 50+ Plans &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleModels.map((model) => (
                <ModelDiscoveryCard key={model.id} model={model} showProviderLink={false} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
