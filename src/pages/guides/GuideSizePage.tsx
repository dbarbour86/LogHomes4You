import React from "react";
import { Link } from "react-router-dom";
import { Ruler, CheckCircle, ArrowRight, Home, Compass, Sun, ShieldCheck } from "lucide-react";
import PageLayout from "../../components/Layout/PageLayout";
import InnerHero from "../../components/ui/InnerHero";
import { useSEO } from "../../hooks/useSEO";

export default function GuideSizePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: "Choosing Home Size", href: "/guides/choosing-log-home-size" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Size Log Home Do You Actually Need? A Practical Sizing Guide",
    "description": "How to calculate the ideal square footage for your log home build based on household size, storage realities, heating volume, and lifestyle needs.",
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
    "mainEntityOfPage": "https://www.loghomes4you.com/guides/choosing-log-home-size"
  };

  useSEO({
    title: "What Size Log Home Do You Actually Need? Sizing Guide | Log Homes 4 You",
    description: "Avoid building too much or too little space. Learn how household size, lofts, covered porches, storage, and heating cubic volume influence ideal log cabin square footage.",
    url: "https://www.loghomes4you.com/guides/choosing-log-home-size",
    type: "article",
    structuredData: articleSchema,
  });

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="What Size Log Home Do You Actually Need?"
        subtitle="In log home construction, square footage carries different tradeoffs than conventional homes. Here is how to determine the right size for your lifestyle and budget."
        badge="Sizing Guide"
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
              Most Cabin Owners Need Less Indoor Square Footage Than They Think
            </h2>
            <p className="text-sm sm:text-base text-timber leading-relaxed">
              Open great rooms, vaulted ceilings, and functional covered porches often allow a well-designed log home to live and entertain like a significantly larger conventional home. Because solid timber construction costs scale with exterior wall surface area and building height, prioritizing functional flow and outdoor living over unneeded indoor square footage frequently yields a comfortable home within a more manageable budget.
            </p>
          </div>

          {/* Sizing Tool Callout */}
          <div className="bg-cedar-light border border-cedar/30 rounded-xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cedar block mb-1">
                Interactive Recommendation Tool
              </span>
              <h3 className="text-xl font-serif font-bold text-timber">
                Try Our Interactive Sizing Tool
              </h3>
              <p className="text-xs sm:text-sm text-timber-muted mt-1 max-w-lg">
                Answer 4 quick questions to see real verified floor plans tailored to your exact bedroom and square footage needs.
              </p>
            </div>
            <Link
              to="/find-a-log-home"
              className="bg-cedar hover:bg-cedar-dark text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-md shadow-xs transition-colors shrink-0"
            >
              Launch Tool &rarr;
            </Link>
          </div>

          <div className="space-y-10 text-timber text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                1. Sizing Matrix by Lifestyle & Household
              </h2>
              <p className="text-timber-muted mb-6">
                The following brackets illustrate how different square footage ranges commonly align with household living dynamics, though personal storage habits and layout efficiency will influence your specific needs:
              </p>

              <div className="overflow-x-auto bg-white border border-sand-border rounded-lg shadow-subtle my-6">
                <table className="w-full text-left text-sm text-timber-muted">
                  <thead className="bg-sand-muted text-xs uppercase tracking-wider text-timber font-bold border-b border-sand-border">
                    <tr>
                      <th className="p-4">Square Footage</th>
                      <th className="p-4">Bedrooms / Baths</th>
                      <th className="p-4">Ideal Use Case</th>
                      <th className="p-4">Living Dynamic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-border">
                    <tr>
                      <td className="p-4 font-semibold text-timber">Under 800 sq ft</td>
                      <td className="p-4">1–2 Beds / 1 Bath</td>
                      <td className="p-4">Hunting cabin, guest ADU, weekend getaway</td>
                      <td className="p-4">Intimate, compact, outdoor-centered living.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">800–1,100 sq ft</td>
                      <td className="p-4">2 Beds / 1–1.5 Baths</td>
                      <td className="p-4">Retirees, solo owners, couples downsizing</td>
                      <td className="p-4">Comfortable single-level living with modest storage.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">1,100–1,600 sq ft</td>
                      <td className="p-4">2–3 Beds / 2 Baths</td>
                      <td className="p-4">Full-time residence, small family, vacation rental</td>
                      <td className="p-4">Balanced great room, master suite, dedicated laundry.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">1,600–2,200 sq ft</td>
                      <td className="p-4">3–4 Beds / 2–2.5 Baths</td>
                      <td className="p-4">Primary family home, frequent guest entertaining</td>
                      <td className="p-4">Spacious loft, pantry, mudroom, multiple suites.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-timber">2,200+ sq ft</td>
                      <td className="p-4">3–4+ Beds / 3+ Baths</td>
                      <td className="p-4">Multi-generational lodge, luxury mountain home</td>
                      <td className="p-4">Expansive footprint, multiple gathering zones.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                2. Cubic Volume: The Hidden Heating & Cooling Factor
              </h2>
              <p className="text-timber-muted mb-4">
                In conventional homes with standard ceiling heights, square footage closely tracks interior air volume. In log homes, high cathedral ceilings in the great room significantly expand the cubic volume of air that heating and cooling systems must condition.
              </p>
              <p className="text-timber-muted mb-4">
                Warm air naturally rises to the peak of the ceiling. In winter, this means upper lofts capture warm air while ground-floor great rooms often benefit from reversible ceiling fans to help circulate warm air back down to the living level. Sizing a home larger than necessary increases seasonal heating and cooling demand.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                3. Covered Porches: Expanding Living Without Adding Square Footage
              </h2>
              <p className="text-timber-muted mb-4">
                One of the greatest architectural assets of a log home is the covered porch. Covered porches cost significantly less per square foot than conditioned indoor space because they require no enclosed drywall, insulation packages, or mechanical climate control.
              </p>
              <p className="text-timber-muted mb-4">
                A deep covered porch functions as an extended living space during favorable seasons. Many owners find that integrating generous outdoor living allows them to choose a more modest indoor footprint without sacrificing everyday comfort or entertaining capability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                4. Long-Term Maintenance Scaling
              </h2>
              <p className="text-timber-muted mb-4">
                Exterior log maintenance (washing, UV stain reapplication, and chink inspection) scales directly with exterior wall square footage and building height:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-timber-muted mb-4">
                <li>A compact single-story cabin with modest wall height is generally straightforward to inspect, clean, and maintain from ground level or basic ladders.</li>
                <li>A larger multi-story home with tall gable peaks, steep dormers, and high ridge lines typically requires scaffolding, safety gear, or professional contractors for washing and re-staining, increasing ongoing maintenance commitments.</li>
              </ul>
            </section>

            {/* Contextual Links */}
            <div className="bg-sand-muted border border-sand-border rounded-lg p-6 my-8">
              <h4 className="font-serif font-bold text-timber text-lg mb-2">
                Explore Relevant Sizing Hubs:
              </h4>
              <ul className="space-y-2 text-sm text-forest font-medium">
                <li>
                  <Link to="/small-log-homes" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Small Log Homes Hub: Plans Under 1,500 Sq Ft</span>
                  </Link>
                </li>
                <li>
                  <Link to="/find-a-log-home" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Find Your Log Home Interactive Sizing Tool</span>
                  </Link>
                </li>
                <li>
                  <Link to="/log-home-plans" className="hover:underline flex items-center gap-1.5">
                    <ArrowRight size={14} />
                    <span>Explore All Log Home Floor Plans</span>
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
