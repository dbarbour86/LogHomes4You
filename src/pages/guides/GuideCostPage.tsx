import React from "react";
import { Link } from "react-router-dom";
import { DollarSign, CheckCircle, HelpCircle, ArrowRight, Layers, AlertCircle } from "lucide-react";
import PageLayout from "../../components/Layout/PageLayout";
import InnerHero from "../../components/ui/InnerHero";
import { useSEO } from "../../hooks/useSEO";

export default function GuideCostPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: "Log Home Costs", href: "/guides/how-much-does-a-log-home-cost" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does a Log Home Cost? What Actually Drives the Budget",
    "description": "A comprehensive, realistic guide to understanding the true cost of building a log home, explaining why the materials package is only one part of total turnkey expenses.",
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
    "mainEntityOfPage": "https://www.loghomes4you.com/guides/how-much-does-a-log-home-cost"
  };

  useSEO({
    title: "How Much Does a Log Home Cost? Real Budget Factors | Log Homes 4 You",
    description: "Understand the real cost of building a log home. Learn why materials packages are only one component of total turnkey expenses, and explore site prep, foundation, and labor variables.",
    url: "https://www.loghomes4you.com/guides/how-much-does-a-log-home-cost",
    type: "article",
    structuredData: articleSchema,
  });

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="How Much Does a Log Home Cost?"
        subtitle="The honest answer: it depends heavily on your site, builder, and finish choices. Here is what actually drives the budget beyond the advertised package price."
        badge="Budgeting Guide"
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
              The Materials Package Is Only One Component of the Total Finished Cost
            </h2>
            <p className="text-sm sm:text-base text-timber leading-relaxed">
              When log home manufacturers advertise package prices, this covers the specified pre-cut timber and framing components delivered to your job site. Total completed (turnkey) project expenses are significantly higher once you factor in land preparation, foundation excavation and pouring, assembly and framing labor, electrical, plumbing, heating, and interior finishes. Depending on the building site, finish selections, and regional labor markets, the package itself accounts for only a portion of the overall investment.
            </p>
          </div>

          {/* Main Editorial Content */}
          <div className="space-y-10 text-timber text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                1. The Package Price vs. Turnkey Cost Reality
              </h2>
              <p className="text-timber-muted mb-4">
                The single most common misunderstanding among first-time log home builders is assuming the price listed on a manufacturer's catalog is the total cost to build the home.
              </p>
              <p className="text-timber-muted mb-4">
                A log home package is fundamentally a specialized building materials order. It provides the exterior log walls, roof framing beams, fasteners, and often windows and exterior doors. It does not include the ground underneath it, the concrete foundation, the heavy equipment required to unload and erect timbers, or the skilled mechanical trades required to make the home livable.
              </p>
              <p className="text-timber-muted">
                Understanding this separation early allows you to plan an honest, realistic construction budget rather than experiencing cost shock halfway through site preparation.
              </p>
            </section>

            {/* Cost Breakdown Table */}
            <section className="my-8">
              <h3 className="text-xl font-serif font-bold text-timber mb-4">
                Major Cost Categories in a Turnkey Build
              </h3>
              <div className="overflow-x-auto bg-white border border-sand-border rounded-lg shadow-subtle">
                <table className="w-full text-left text-sm text-timber-muted">
                  <thead className="bg-sand-muted text-xs uppercase tracking-wider text-timber font-bold border-b border-sand-border">
                    <tr>
                      <th className="p-4">Expense Area</th>
                      <th className="p-4">What It Covers</th>
                      <th className="p-4">Primary Cost Drivers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-border">
                    <tr>
                      <td className="p-4 font-semibold text-timber">Land & Site Access</td>
                      <td className="p-4">Property acquisition, driveway, tree clearing, temporary power.</td>
                      <td className="p-4">Slope, soil stability, distance from existing public roads.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Excavation & Foundation</td>
                      <td className="p-4">Footings, poured concrete walls, crawlspace, or basement slab.</td>
                      <td className="p-4">Bedrock, soil compaction, frost depth, slope severity.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Log Materials Package</td>
                      <td className="p-4">Pre-cut wall logs, splines, gasketing, roof timbers, fasteners.</td>
                      <td className="p-4">Timber species (pine vs. cedar), wall profile thickness, home footprint.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Erection & Framing Labor</td>
                      <td className="p-4">Log wall stacking, roof framing, crane rental, dry-in labor.</td>
                      <td className="p-4">Regional labor rates, builder familiarity with timber systems.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Mechanical Systems (MEP)</td>
                      <td className="p-4">Plumbing rough-in, electrical wiring, HVAC ductwork or mini-splits.</td>
                      <td className="p-4">Distance to municipal utilities vs. private well and septic install.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Interior & Exterior Finishes</td>
                      <td className="p-4">Cabinetry, countertops, flooring, bathroom tile, exterior stain.</td>
                      <td className="p-4">Material quality choices (builder-grade vs. custom hardwood/stone).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                2. Site Preparation & Rural Infrastructure Variables
              </h2>
              <p className="text-timber-muted mb-4">
                Many log homes are built on scenic, sloping, or rural acreage. While mountain or wooded properties offer unmatched natural privacy, their infrastructure requirements represent a substantial and highly variable expense:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-timber-muted mb-4">
                <li><strong>Driveway and Delivery Access:</strong> Delivery tractor-trailers carrying long structural timbers require wide turning radii and packed roadbeds. If your site requires a lengthy gravel driveway through dense woods or challenging terrain, road construction, culverts, and tree clearing become major upfront expenses before foundation work can even begin.</li>
                <li><strong>Well and Septic Systems:</strong> If municipal water and sewer are unavailable, a drilled water well and engineered septic leach field are necessary. Costs vary drastically depending on depth to the water table and soil percolation rates.</li>
                <li><strong>Electrical Service Drop:</strong> Running utility power poles or underground conduit across long distances from the nearest county transformer can be costly.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                3. Foundation Types & Regional Engineering
              </h2>
              <p className="text-timber-muted mb-4">
                Log homes are heavy, rigid structures. They require an unyielding, properly engineered foundation to prevent uneven settling that could pinch window and door openings.
              </p>
              <p className="text-timber-muted mb-4">
                Your choice of foundation—monolithic concrete slab, conditioned crawlspace, or walk-out daylight basement—will significantly impact budget. On sloping lots, a walk-out basement is often an efficient way to expand usable square footage because the foundation walls already have to be constructed down to stable subsoil or bedrock.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                4. Labor: General Contractor vs. Owner-Builder
              </h2>
              <p className="text-timber-muted mb-4">
                Labor represents a major portion of any turnkey building budget. Timber stacking, specialized craning, roofing, electrical and plumbing rough-in, and finish carpentry each require skilled trades. While some buyers consider acting as their own general contractor or assisting with assembly, owner-building demands substantial construction management experience, daily on-site availability, and specialized equipment.
              </p>
              <p className="text-timber-muted">
                Hiring an experienced log home builder ensures that proper settling jacks, slip joints, and flashing details are installed according to manufacturer specifications, preserving warranties and structural integrity.
              </p>
            </section>

            {/* Contextual Links */}
            <div className="bg-sand-muted border border-sand-border rounded-lg p-6 my-8">
              <h4 className="font-serif font-bold text-timber text-lg mb-2">
                Continue Researching Your Project:
              </h4>
              <ul className="space-y-2 text-sm text-forest font-medium">
                <li>
                  <Link to="/guides/log-home-kits-explained" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Log Home Kits Explained: What Do You Actually Get?</span>
                  </Link>
                </li>
                <li>
                  <Link to="/guides/choosing-log-home-size" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>What Size Log Home Do You Actually Need?</span>
                  </Link>
                </li>
                <li>
                  <Link to="/find-a-log-home" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Interactive Floor Plan Recommendation Tool</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* FAQ Section */}
            <section className="pt-8 border-t border-sand-border">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-6">
                Frequently Asked Cost Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-sand-border rounded-lg p-6">
                  <h3 className="font-serif font-bold text-timber text-lg mb-2">
                    Are log homes more expensive than standard stick-built homes?
                  </h3>
                  <p className="text-sm text-timber-muted leading-relaxed">
                    Cost comparisons between log homes and conventional stick-framed homes depend heavily on architectural complexity and interior finishes. Heavy structural timbers, freight shipping, specialized crane or stacking labor, and exterior timber sealants can increase initial construction costs compared to basic tract-built homes. However, solid wood walls also provide natural thermal mass and architectural character that conventional framing requires additional finishes to emulate.
                  </p>
                </div>

                <div className="bg-white border border-sand-border rounded-lg p-6">
                  <h3 className="font-serif font-bold text-timber text-lg mb-2">
                    Does financing work the same as a conventional mortgage?
                  </h3>
                  <p className="text-sm text-timber-muted leading-relaxed">
                    Building a custom log home generally involves specialized construction financing (such as a construction-to-permanent loan) rather than a standard existing-home mortgage. During construction, lenders typically disburse funds to the builder in scheduled draws as independent inspectors verify completion of specific phases (such as foundation, framing/dry-in, and mechanical rough-ins). Specific loan structures, down payment criteria, and appraisal requirements vary by financial institution.
                  </p>
                </div>

                <div className="bg-white border border-sand-border rounded-lg p-6">
                  <h3 className="font-serif font-bold text-timber text-lg mb-2">
                    How much should I reserve for contingencies?
                  </h3>
                  <p className="text-sm text-timber-muted leading-relaxed">
                    Maintaining a dedicated cash contingency reserve is strongly advised for any custom build. Unanticipated site conditions—such as subsurface ledge or bedrock, adverse weather delays, utility connection complications, and finish upgrades—frequently introduce expenses beyond the initial contracted estimate.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
