import React from "react";
import { Link } from "react-router-dom";
import { GitCompare, CheckCircle, ArrowRight, Check, X, Compass } from "lucide-react";
import PageLayout from "../../components/Layout/PageLayout";
import InnerHero from "../../components/ui/InnerHero";
import { useSEO } from "../../hooks/useSEO";

export default function GuideKitVsCustomPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: "Kit vs. Custom", href: "/guides/log-home-kit-vs-custom-build" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Log Home Kit vs. Custom Build: What's the Real Difference?",
    "description": "An objective educational comparison of pre-cut manufactured log home packages versus architect-led custom builds.",
    "author": {
      "@type": "Organization",
      "name": "Log Homes 4 You",
      "url": "https://www.loghomes4you.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Log Homes 4 You",
      "url": "https://www.loghomes4you.com"
    },
    "mainEntityOfPage": "https://www.loghomes4you.com/guides/log-home-kit-vs-custom-build"
  };

  useSEO({
    title: "Log Home Kit vs. Custom Build: What's the Difference? | Log Homes 4 You",
    description: "Compare pre-cut manufactured log home packages with full custom builds. Learn the pros, cons, cost predictability, timelines, and when each approach makes sense.",
    url: "https://www.loghomes4you.com/guides/log-home-kit-vs-custom-build",
    type: "article",
    structuredData: articleSchema,
  });

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="Log Home Kit vs. Custom Build: What's the Difference?"
        subtitle="Neither path is universally better. Each serves different priorities for budget predictability, site constraints, and architectural customization."
        badge="Comparison Guide"
        breadcrumbs={breadcrumbs}
      />

      <article className="py-14 md:py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Quick Answer Callout Box */}
          <div className="bg-forest-light border-2 border-forest/30 rounded-xl p-6 sm:p-8 mb-12">
            <div className="flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-wider mb-2">
              <CheckCircle size={18} />
              <span>Quick Answer</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-timber mb-3">
              Standardized Efficiency vs. Bespoke Architectural Freedom
            </h2>
            <p className="text-sm sm:text-base text-timber leading-relaxed">
              A <strong>pre-cut kit package</strong> utilizes factory-engineered precision, pre-tested floor plans, and locked-in material pricing to minimize design delays and on-site labor. A <strong>full custom build</strong> starts with an architect and a blank slate, accommodating complex sloping sites, unique room geometries, or handcrafted artisan logs. The right choice depends on your site topography, budget tolerance, and desire for customization.
            </p>
          </div>

          <div className="space-y-10 text-timber text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                1. Side-by-Side Comparison
              </h2>
              <p className="text-timber-muted mb-6">
                Evaluating the two construction paths side-by-side helps clarify which trade-offs align with your risk tolerance and project goals:
              </p>

              <div className="overflow-x-auto bg-white border border-sand-border rounded-lg shadow-subtle my-6">
                <table className="w-full text-left text-sm text-timber-muted">
                  <thead className="bg-sand-muted text-xs uppercase tracking-wider text-timber font-bold border-b border-sand-border">
                    <tr>
                      <th className="p-4">Criteria</th>
                      <th className="p-4">Pre-Cut Kit / Package</th>
                      <th className="p-4">Full Custom Build</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-border">
                    <tr>
                      <td className="p-4 font-semibold text-timber">Design Process</td>
                      <td className="p-4">Selected from proven library of models; minor modifications possible.</td>
                      <td className="p-4">Fully bespoke design crafted with an architect from scratch.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Material Cost Predictability</td>
                      <td className="p-4 font-medium text-forest">Moderate to High: Established by the manufacturer's materials contract, though shipping or design adjustments can affect final totals.</td>
                      <td className="p-4 font-medium text-amber-700">Variable: Subject to fluctuations in lumber markets and architectural revisions during drafting.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Engineering & Permitting</td>
                      <td className="p-4">Pre-calculated load engineering often available from manufacturer.</td>
                      <td className="p-4">Requires independent structural engineer review and calculations.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">On-Site Framing Speed</td>
                      <td className="p-4 font-medium text-forest">Faster: Numbered logs with factory corner notches stack quickly.</td>
                      <td className="p-4 font-medium text-amber-700">Slower: Hand-scribed or on-site notched logs require meticulous cuts.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Adaptability to Extreme Sites</td>
                      <td className="p-4">Moderate: Best on standard or moderately sloped building pads.</td>
                      <td className="p-4 font-medium text-forest">High: Specifically engineered to wrap steep cliffs, rocks, or trees.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                2. When a Pre-Cut Package Makes the Most Sense
              </h2>
              <p className="text-timber-muted mb-4">
                For the vast majority of consumers, a manufactured pre-cut package represents the most practical path forward:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-timber-muted mb-6">
                <li><strong>Budget Discipline:</strong> Because the manufacturer's CAD machines mill exact joints and optimize log yield, waste is minimized and costs are locked in early.</li>
                <li><strong>Proven Space Planning:</strong> Catalog models have been constructed multiple times. Hallway clearances, stair runs, plumbing stack alignments, and ceiling pitches have already been debugged in the real world.</li>
                <li><strong>Easier Builder Sourcing:</strong> Many local framing contractors who might hesitate to hand-scribe a custom log cabin are comfortable stacking pre-cut, numbered, and slotted timbers with detailed manufacturer assembly manuals.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                3. When a Ground-Up Custom Build Is Worth It
              </h2>
              <p className="text-timber-muted mb-4">
                Despite higher architectural costs and longer timelines, a custom build is sometimes the only viable solution:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-timber-muted mb-6">
                <li><strong>Severe Site Topography:</strong> If your building pad has complex rock outcroppings, steep slopes, or strict height limitations imposed by local zoning, standard catalog footprints may require extensive customization.</li>
                <li><strong>Handcrafted Artisan Timber:</strong> If you desire full-round, hand-peeled logs with natural fluted root flares (such as Western Red Cedar or Douglas Fir character timbers), this level of organic handwork requires custom artisan craftsmen.</li>
                <li><strong>Unique Living Demands:</strong> If your family requires specialized multi-generational suites, commercial catering kitchens, or unique indoor-outdoor breezeways, bespoke architecture provides complete freedom.</li>
              </ul>
            </section>

            {/* Decision Framework */}
            <section className="bg-sand-muted border border-sand-border rounded-xl p-6 sm:p-8 my-10">
              <h3 className="text-xl font-serif font-bold text-timber mb-4">
                Quick Decision Checklist: Which Direction Fits You?
              </h3>
              <div className="space-y-4 text-sm text-timber">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                  <p><strong>If predictable budgeting and faster construction are paramount:</strong> Start by browsing proven floor plans in our directory. You can often make small tweaks (moving an interior non-bearing wall or adding a dormer) with the package manufacturer at modest cost.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cedar text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                  <p><strong>If you have a difficult parcel or non-standard vision:</strong> Consult an architect experienced specifically in log and heavy timber construction before ordering any materials.</p>
                </div>
              </div>
            </section>

            {/* Contextual Links */}
            <div className="bg-white border border-sand-border rounded-lg p-6 my-8">
              <h4 className="font-serif font-bold text-timber text-lg mb-2">
                Explore Practical Tools & Guides:
              </h4>
              <ul className="space-y-2 text-sm text-forest font-medium">
                <li>
                  <Link to="/log-home-plans" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Explore Verified Real Floor Plans</span>
                  </Link>
                </li>
                <li>
                  <Link to="/find-a-log-home" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Find Your Log Home Recommendation Tool</span>
                  </Link>
                </li>
                <li>
                  <Link to="/guides/building-a-log-home" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Building a Log Home: Step-by-Step Beginner's Guide</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
