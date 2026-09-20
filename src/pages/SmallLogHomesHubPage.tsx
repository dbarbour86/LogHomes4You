import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, CheckCircle, AlertTriangle, Layers, Home, Box } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import ModelDiscoveryCard from "../components/ui/ModelDiscoveryCard";
import { verifiedModels } from "../data/models";
import { useSEO } from "../hooks/useSEO";

export default function SmallLogHomesHubPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Small Log Homes", href: "/small-log-homes" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Small Log Homes: Plans, Sizes & What to Consider",
    "description": "Comprehensive guide to planning and building small log homes under 1,500 sq ft, including layout tradeoffs and verified floor plans.",
    "url": "https://www.loghomes4you.com/small-log-homes"
  };

  useSEO({
    title: "Small Log Homes: Plans, Sizes & What to Consider | Log Homes 4 You",
    description: "Explore small log homes under 1,500 sq ft. Learn about footprint tradeoffs, sleeping lofts, storage solutions, and view real verified cabin floor plans.",
    url: "https://www.loghomes4you.com/small-log-homes",
    structuredData: collectionSchema,
  });

  // Filter example models by size ranges strictly from verified models
  const under800Models = verifiedModels.filter((m) => m.squareFeet < 800);
  const between800And1000Models = verifiedModels.filter((m) => m.squareFeet >= 800 && m.squareFeet <= 1000);
  const between1000And1500Models = verifiedModels.filter((m) => m.squareFeet > 1000 && m.squareFeet <= 1500).slice(0, 6);

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="Small Log Homes: Plans, Sizes & What to Consider"
        subtitle="A practical guide to planning a smaller log cabin. Learn the structural realities, storage solutions, loft tradeoffs, and explore verified floor plans across three popular compact size ranges."
        breadcrumbs={breadcrumbs}
      />

      {/* Editorial Overview Section */}
      <section className="py-14 md:py-20 bg-sand border-b border-sand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose max-w-none text-timber">
            <h2 className="text-3xl font-serif font-bold text-timber mb-6">
              Why Choose a Smaller Log Home?
            </h2>
            <p className="text-base sm:text-lg text-timber-muted leading-relaxed mb-6">
              Small log homes have surged in popularity not just for recreational cabins, but as permanent residences for downsizers, retirees, and budget-conscious builders. A smaller footprint reduces upfront timber and foundation costs, minimizes ongoing exterior maintenance, and dramatically lowers heating and cooling requirements over the lifetime of the home.
            </p>
            <p className="text-base text-timber-muted leading-relaxed mb-8">
              However, building small in log construction requires careful architectural discipline. Unlike conventional drywall construction, you cannot easily reconfigure solid timber interior walls down the road. Every square foot must serve a dedicated purpose.
            </p>

            {/* Benefits vs Tradeoffs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <div className="flex items-center gap-2 text-forest font-bold text-sm uppercase tracking-wider mb-4">
                  <CheckCircle size={18} />
                  <span>Key Advantages</span>
                </div>
                <ul className="space-y-3 text-sm text-timber-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Lower site & foundation cost:</strong> Smaller footprints require less excavation, shorter perimeter walls, and adapt easily to sloped terrain.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Reduced maintenance:</strong> Less exterior surface area translates into lower overall stain, sealant, and cleaning commitments over time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span><strong>Energy efficiency:</strong> Smaller interior cubic volume is simpler and more economical to heat and cool effectively.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <div className="flex items-center gap-2 text-cedar font-bold text-sm uppercase tracking-wider mb-4">
                  <AlertTriangle size={18} />
                  <span>Practical Tradeoffs</span>
                </div>
                <ul className="space-y-3 text-sm text-timber-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Mechanical space competition:</strong> Water heaters, HVAC equipment, and electrical panels consume valuable floor space.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Storage discipline:</strong> Traditional solid log construction lacks hollow interior wall cavities for recessed shelving or shallow cupboards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cedar font-bold">•</span>
                    <span><strong>Acoustic privacy:</strong> Open great rooms and vaulted ceilings transmit sound easily between bedrooms and living spaces.</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-timber mt-12 mb-4">
              Loft Considerations: Usable Space vs. Headroom
            </h3>
            <p className="text-base text-timber-muted leading-relaxed mb-6">
              Many small log homes feature an upper loft to expand living space without expanding the foundation footprint. While lofts create picturesque open vistas into the great room, pay close attention to roof pitch and knee-wall height. In compact floor plans, steep roof angles may restrict standing center height, leaving the perimeter best suited for sleeping quarters or low-profile storage.
            </p>

            <h3 className="text-2xl font-serif font-bold text-timber mt-10 mb-4">
              Full-Time Living vs. Vacation Use
            </h3>
            <p className="text-base text-timber-muted leading-relaxed mb-6">
              A compact cabin functions wonderfully for weekend retreats where occupants spend much of their waking time outdoors or on covered porches. For full-time year-round living, however, you will need dedicated closet space, laundry hookups, and sufficient kitchen pantry storage for everyday living.
            </p>

            {/* Cross Links to Guides */}
            <div className="bg-sand-muted border border-sand-border rounded-lg p-6 my-10 not-prose flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-timber text-base">Unsure what size fits your situation?</h4>
                <p className="text-xs text-timber-muted mt-1">Read our comprehensive sizing guide or take the interactive recommendation quiz.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/guides/choosing-log-home-size"
                  className="text-xs font-bold uppercase tracking-wider text-forest hover:underline"
                >
                  Read Sizing Guide &rarr;
                </Link>
                <Link
                  to="/find-a-log-home"
                  className="bg-cedar hover:bg-cedar-dark text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  Take Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Under 800 Sq Ft */}
      <section className="py-16 md:py-20 bg-sand-muted border-b border-sand-border" id="under-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cedar block mb-2">
              Category 1
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-timber">
              Under 800 Sq Ft: Compact Footprints & Cabins
            </h2>
            <p className="text-sm sm:text-base text-timber-muted mt-3 leading-relaxed">
              These designs prioritize maximum efficiency in minimal footprints. Ideal for hunting cabins, lakeside retreats, ADUs, and minimalist off-grid homesteads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {under800Models.map((model) => (
              <ModelDiscoveryCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 800–1,000 Sq Ft */}
      <section className="py-16 md:py-20 bg-sand border-b border-sand-border" id="800-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-2">
              Category 2
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-timber">
              800–1,000 Sq Ft: Practical Two-Bedroom Living
            </h2>
            <p className="text-sm sm:text-base text-timber-muted mt-3 leading-relaxed">
              At this scale, you comfortably gain two true enclosed bedrooms, a full residential bathroom, and a defined kitchen and dining nook without requiring a massive building site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {between800And1000Models.map((model) => (
              <ModelDiscoveryCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 1,000–1,500 Sq Ft */}
      <section className="py-16 md:py-20 bg-sand-muted border-b border-sand-border" id="1000-1500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cedar block mb-2">
              Category 3
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-timber">
              1,000–1,500 Sq Ft: Versatile Mid-Size Homes
            </h2>
            <p className="text-sm sm:text-base text-timber-muted mt-3 leading-relaxed">
              The sweet spot for many full-time downsizers. These layouts accommodate up to 3 bedrooms or 2 generous master suites with multiple bathrooms and spacious vaulted great rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {between1000And1500Models.map((model) => (
              <ModelDiscoveryCard key={model.id} model={model} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/log-home-plans?minSqFt=1001&maxSqFt=1500"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest hover:text-forest-dark"
            >
              <span>Explore All 1,000–1,500 Sq Ft Plans</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="py-12 bg-white border-b border-sand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-xs text-timber-subtle">
          <ShieldCheck size={20} className="text-forest mx-auto mb-2" />
          <p className="leading-relaxed">
            All floor plans featured above are offered by King's Cabins. Detailed blueprints, package scope, and current delivery options should be confirmed directly with the builder via the canonical link on each card.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
