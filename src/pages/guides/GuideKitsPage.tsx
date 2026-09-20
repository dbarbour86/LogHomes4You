import React from "react";
import { Link } from "react-router-dom";
import { Package, CheckCircle, HelpCircle, ArrowRight, AlertCircle, Check, X } from "lucide-react";
import PageLayout from "../../components/Layout/PageLayout";
import InnerHero from "../../components/ui/InnerHero";
import { useSEO } from "../../hooks/useSEO";

export default function GuideKitsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: "Log Home Kits", href: "/guides/log-home-kits-explained" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Log Home Kits Explained: What Do You Actually Get in a Package?",
    "description": "An in-depth explanation of log home kit tiers—from basic log shells to weather-tight dry-in packages—and what materials must be purchased locally.",
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
    "mainEntityOfPage": "https://www.loghomes4you.com/guides/log-home-kits-explained"
  };

  useSEO({
    title: "Log Home Kits Explained: What Do You Actually Get? | Log Homes 4 You",
    description: "Understand log cabin kit inclusions, package tiers, shell vs dry-in packages, and what materials you still need to buy locally before building.",
    url: "https://www.loghomes4you.com/guides/log-home-kits-explained",
    type: "article",
    structuredData: articleSchema,
  });

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="Log Home Kits Explained: What Do You Actually Get?"
        subtitle="Log home packages vary wildly across manufacturers. Here is what is typically included, what is excluded, and the vital questions to ask before signing."
        badge="Package Guide"
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
              A Log Home "Kit" Is a Materials Package, Not a Finished House
            </h2>
            <p className="text-sm sm:text-base text-timber leading-relaxed">
              In the log home industry, a "kit" refers to an engineered bundle of building materials delivered to the building site, not a completed house. Terminology varies by manufacturer, but a basic shell package generally provides exterior wall logs, splines, and structural fasteners, while extended or dry-in packages may add roof framing, decking, windows, and exterior doors. Standard manufacturer packages do not include site excavation, concrete foundations, plumbing, electrical, HVAC, or on-site assembly labor unless explicitly contracted.
            </p>
          </div>

          <div className="space-y-10 text-timber text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                1. Understanding Common Package Concepts & Examples
              </h2>
              <p className="text-timber-muted mb-4">
                Package names and component manifests differ significantly from one manufacturer to another. However, prospective buyers commonly encounter three conceptual tiers across the marketplace:
              </p>
              
              <div className="space-y-6 my-6">
                <div className="bg-white border border-sand-border rounded-lg p-6">
                  <h3 className="text-xl font-serif font-bold text-timber mb-2">
                    Example Concept 1: Log Wall Shell Only
                  </h3>
                  <p className="text-sm text-timber-muted leading-relaxed mb-3">
                    A basic structural baseline. Typically contains the numbered and pre-cut wall logs, dowels or thru-bolts, foam gasketing, and structural timber fasteners. It generally does not include roof trusses, ceiling decking, windows, or floor systems.
                  </p>
                  <span className="text-xs font-semibold text-cedar uppercase tracking-wider">
                    Commonly chosen by: Professional contractors who prefer sourcing roof framing, windows, and conventional lumber from local building yards.
                  </span>
                </div>

                <div className="bg-white border border-sand-border rounded-lg p-6">
                  <h3 className="text-xl font-serif font-bold text-timber mb-2">
                    Example Concept 2: Weather-Tight / "Dry-In" Package
                  </h3>
                  <p className="text-sm text-timber-muted leading-relaxed mb-3">
                    A frequent configuration for owner-builders and custom clients. In addition to wall timbers, this tier typically includes heavy timber roof beams or trusses, tongue-and-groove ceiling decking, exterior doors, exterior windows, and weatherproofing membrane. Once assembled, the building envelope can be sealed against rain and wind.
                  </p>
                  <span className="text-xs font-semibold text-forest uppercase tracking-wider">
                    Commonly chosen by: Homeowners who want a single supplier for the entire exterior architectural shell.
                  </span>
                </div>

                <div className="bg-white border border-sand-border rounded-lg p-6">
                  <h3 className="text-xl font-serif font-bold text-timber mb-2">
                    Example Concept 3: Extended / Complete Materials Package
                  </h3>
                  <p className="text-sm text-timber-muted leading-relaxed mb-3">
                    Expands the exterior dry-in package to include interior partition framing lumber, interior doors, trim moldings, stairs, loft railing systems, and porch decking materials.
                  </p>
                  <span className="text-xs font-semibold text-timber uppercase tracking-wider">
                    Commonly chosen for: Remote building sites where sourcing specialized interior trim, stairs, or wood railing locally would be difficult or costly.
                  </span>
                </div>
              </div>

              <div className="bg-sand-muted border border-sand-border rounded-lg p-4 text-xs text-timber-muted">
                <strong>Important Consumer Rule:</strong> Always request an itemized component schedule from each manufacturer you evaluate. What one company labels a "dry-in package" may exclude exterior windows, doors, or roof underlayment that another manufacturer includes as standard.
              </div>
            </section>

            {/* Checklist Table */}
            <section className="my-8">
              <h3 className="text-xl font-serif font-bold text-timber mb-4">
                What's Typical: Included vs. Sourced Locally
              </h3>
              <div className="overflow-x-auto bg-white border border-sand-border rounded-lg shadow-subtle">
                <table className="w-full text-left text-sm text-timber-muted">
                  <thead className="bg-sand-muted text-xs uppercase tracking-wider text-timber font-bold border-b border-sand-border">
                    <tr>
                      <th className="p-4">Item / Building Phase</th>
                      <th className="p-4 text-center">Typically in Kit?</th>
                      <th className="p-4">Who Provides It</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-border">
                    <tr>
                      <td className="p-4 font-semibold text-timber">Pre-cut Wall Logs & Fasteners</td>
                      <td className="p-4 text-center text-forest font-bold"><Check size={18} className="inline text-forest" /> Yes</td>
                      <td className="p-4">Log home manufacturer.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Roof Timber Beams & Ceiling Decking</td>
                      <td className="p-4 text-center text-forest font-bold"><Check size={18} className="inline text-forest" /> Usually (Dry-in)</td>
                      <td className="p-4">Manufacturer (or sourced locally on shell-only).</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Exterior Windows & Doors</td>
                      <td className="p-4 text-center text-forest font-bold"><Check size={18} className="inline text-forest" /> Often (Dry-in)</td>
                      <td className="p-4">Specified brand from manufacturer or local lumberyard.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Foundation Concrete & Footings</td>
                      <td className="p-4 text-center text-red-600 font-bold"><X size={18} className="inline text-red-600" /> Never</td>
                      <td className="p-4">Local concrete contractor.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Electrical, Plumbing & HVAC (MEP)</td>
                      <td className="p-4 text-center text-red-600 font-bold"><X size={18} className="inline text-red-600" /> Never</td>
                      <td className="p-4">Licensed trade subcontractors.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Kitchen Cabinets, Countertops & Appliances</td>
                      <td className="p-4 text-center text-red-600 font-bold"><X size={18} className="inline text-red-600" /> Rarely</td>
                      <td className="p-4">Local kitchen suppliers or owner-selected retail.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">Assembly & Erection Labor</td>
                      <td className="p-4 text-center text-amber-700 font-bold">Varies</td>
                      <td className="p-4">General contractor, certified builder, or owner-builder.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                2. Delivery, Offloading & Staging Logistics
              </h2>
              <p className="text-timber-muted mb-4">
                Log packages are delivered on flatbed tractor-trailers weighing tens of thousands of pounds. A crucial detail often overlooked by beginners is delivery coordination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-timber-muted mb-4">
                <li><strong>Unloading Equipment:</strong> Flatbed delivery drivers do not unload logs. You or your builder must arrange an all-terrain forklift (telehandler) or rough-terrain crane on delivery day.</li>
                <li><strong>Staging Ground:</strong> You need dry, level ground near the foundation where bundles can be placed on wooden stringers and tarped to prevent ground moisture absorption before wall stacking.</li>
                <li><strong>Bundle Inventory:</strong> Logs arrive numbered according to the construction blueprint. A clean, organized staging layout saves valuable crane and equipment time during wall stacking.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                3. The 5 Questions Every Buyer Must Ask Before Buying a Kit
              </h2>
              <div className="space-y-4 text-timber-muted">
                <div className="p-4 bg-white border border-sand-border rounded-lg">
                  <span className="font-bold text-timber block mb-1">1. Are the logs kiln-dried or green?</span>
                  <p className="text-sm">Kiln-dried logs have a uniform moisture content, dramatically reducing shrinking, settling, twisting, and mold growth during construction.</p>
                </div>
                <div className="p-4 bg-white border border-sand-border rounded-lg">
                  <span className="font-bold text-timber block mb-1">2. Are the logs pre-cut and pre-notched, or random-length?</span>
                  <p className="text-sm">Pre-cut, pre-notched systems snap together like building blocks. Random-length logs require skilled carpenters to cut every corner notch on-site, multiplying labor costs.</p>
                </div>
                <div className="p-4 bg-white border border-sand-border rounded-lg">
                  <span className="font-bold text-timber block mb-1">3. Is freight and delivery insurance included in the quoted price?</span>
                  <p className="text-sm">Heavy freight shipping costs depend heavily on transit distance, fuel surcharges, and state permits for oversized loads.</p>
                </div>
                <div className="p-4 bg-white border border-sand-border rounded-lg">
                  <span className="font-bold text-timber block mb-1">4. Does the package include certified engineering stamps for my county?</span>
                  <p className="text-sm">Local building departments often require an engineer licensed in your specific state to stamp the structural calculations for snow and wind loads.</p>
                </div>
                <div className="p-4 bg-white border border-sand-border rounded-lg">
                  <span className="font-bold text-timber block mb-1">5. Does the company provide on-site technical support?</span>
                  <p className="text-sm">Many reputable manufacturers offer a technical field advisor to assist your crew during the critical first day of sill plate and wall stacking.</p>
                </div>
              </div>
            </section>

            {/* Contextual Links */}
            <div className="bg-sand-muted border border-sand-border rounded-lg p-6 my-8">
              <h4 className="font-serif font-bold text-timber text-lg mb-2">
                Related Planning Guides:
              </h4>
              <ul className="space-y-2 text-sm text-forest font-medium">
                <li>
                  <Link to="/guides/log-home-kit-vs-custom-build" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Log Home Kit vs. Custom Build: What's the Difference?</span>
                  </Link>
                </li>
                <li>
                  <Link to="/guides/how-much-does-a-log-home-cost" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>How Much Does a Log Home Cost? Full Project Expenses</span>
                  </Link>
                </li>
                <li>
                  <Link to="/log-home-plans" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Explore Verified Real Floor Plans</span>
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
