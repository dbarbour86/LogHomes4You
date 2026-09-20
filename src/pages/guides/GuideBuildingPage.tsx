import React from "react";
import { Link } from "react-router-dom";
import { Hammer, CheckCircle, ArrowRight, MapPin, Compass, ShieldCheck, FileText } from "lucide-react";
import PageLayout from "../../components/Layout/PageLayout";
import InnerHero from "../../components/ui/InnerHero";
import { useSEO } from "../../hooks/useSEO";

export default function GuideBuildingPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: "Building Process", href: "/guides/building-a-log-home" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Building a Log Home: A Beginner's Step-by-Step Guide",
    "description": "A realistic 10-step roadmap for building a log home—from raw land evaluation and zoning permits to log stacking, rough-in mechanicals, and final move-in inspection.",
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
    "mainEntityOfPage": "https://www.loghomes4you.com/guides/building-a-log-home"
  };

  useSEO({
    title: "Building a Log Home: A Beginner's Guide | Log Homes 4 You",
    description: "The complete beginner's roadmap to building a log cabin. 10 practical steps covering land search, permitting, choosing a builder, log delivery, and construction.",
    url: "https://www.loghomes4you.com/guides/building-a-log-home",
    type: "article",
    structuredData: articleSchema,
  });

  const steps = [
    {
      num: "01",
      title: "Determine Needs, Long-Term Scope & Realistic Budget",
      desc: "Establish your core lifestyle priorities before looking at floor plans. Determine bedroom counts, full-time vs. vacation use, and set a realistic turnkey financial ceiling that accounts for land, site preparation, materials, labor, and a prudent cash contingency reserve.",
    },
    {
      num: "02",
      title: "Land Evaluation & Utility Feasibility",
      desc: "Never buy land without evaluating access, topography, and utilities. Test soil percolation for septic approval, confirm well water availability or municipal hookups, and verify that large freight delivery trucks can safely access and turn around at your building pad.",
    },
    {
      num: "03",
      title: "Understand Local Zoning, Building Codes & Environmental Setbacks",
      desc: "Local jurisdictions enforce specific snow load calculations, seismic requirements, fire safety setbacks, and energy code compliance. Building codes vary dramatically between mountain counties and valley plains; always check with local building inspectors first.",
    },
    {
      num: "04",
      title: "Select & Refine Your Floor Plan Layout",
      desc: "Choose a proven floor plan that matches your building site's natural sun exposure, prevailing winds, and topography. Make minor modifications to non-bearing interior partitions before engineering stamps are finalized.",
    },
    {
      num: "05",
      title: "Choose Your Log Manufacturer & General Contractor",
      desc: "Verify that your log manufacturer provides kiln-dried timber and certified engineering calculations. Select an experienced general contractor or certified log builder who understands settling joints, screw jacks, and specialized timber sealants.",
    },
    {
      num: "06",
      title: "Finalize Package Scope, Contracts & Construction Financing",
      desc: "Review the manufacturer's materials manifest line-by-line to understand what is included versus sourced locally. Secure a construction-to-permanent loan with clear milestone inspection draws for foundation, dry-in, and trim phases.",
    },
    {
      num: "07",
      title: "Site Clearing, Driveway Access & Excavation",
      desc: "Clear timber and brush within the defensible fire perimeter. Install a stable gravel roadbed capable of supporting concrete mixer trucks and cranes. Excavate the foundation pad down to stable subsoil or bedrock.",
    },
    {
      num: "08",
      title: "Foundation Construction & Subfloor Decking",
      desc: "Pour concrete footings and walls (slab, crawlspace, or full basement) according to engineered tolerances. Log homes tolerate virtually zero foundation deviation. Allow concrete to cure fully before loading heavy timber.",
    },
    {
      num: "09",
      title: "Log Package Delivery, Staging & Wall Erection",
      desc: "Offload numbered timber bundles with an all-terrain telehandler or crane. Stack log courses with structural lag screws, splines, and foam gasketing per the manufacturer manual. Install heavy timber roof beams, decking, and weather barrier.",
    },
    {
      num: "10",
      title: "Mechanical Rough-Ins, Interior Finishes & Final Inspection",
      desc: "Route electrical wiring through pre-drilled vertical chases in log walls. Install plumbing lines, HVAC ductwork/mini-splits, insulation, drywall, cabinetry, and exterior UV stain. Obtain your local Certificate of Occupancy (CO) to move in.",
    },
  ];

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="Building a Log Home: A Beginner's Guide"
        subtitle="A realistic 10-step roadmap from buying rural land and securing permits to package delivery, log stacking, and final inspection."
        badge="Process Roadmap"
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
              Success Depends on Planning Land and Infrastructure First
            </h2>
            <p className="text-sm sm:text-base text-timber leading-relaxed">
              Most building delays and budget surprises don't happen during log stacking—they occur before the timbers ever arrive on site. Soil testing, driveway engineering, septic approvals, and local municipal building permits often require considerable lead time before foundation excavation can begin. Treat site preparation and infrastructure with the same diligence as floor plan design.
            </p>
          </div>

          {/* Step by Step Breakdown */}
          <div className="space-y-8 mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-6">
              The 10-Step Building Roadmap
            </h2>

            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white border border-sand-border rounded-xl p-6 sm:p-8 shadow-subtle flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="w-12 h-12 rounded-lg bg-sand-muted text-forest font-mono font-bold text-lg flex items-center justify-center shrink-0 border border-sand-border">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-timber mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-timber-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Reality Callout */}
          <div className="bg-sand-muted border border-sand-border rounded-xl p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-serif font-bold text-timber mb-3">
              Regional Building Code Realities
            </h3>
            <p className="text-sm text-timber-muted leading-relaxed mb-4">
              Never assume building requirements in your region mirror another state or county. Building codes, engineering mandates, and environmental rules vary significantly across geographic regions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-timber-muted">
              <li><strong>Snow Loads:</strong> High-altitude or northern mountain parcels require heavy timber rafters and roof profiles engineered for demanding local ground snow loads.</li>
              <li><strong>Wildfire & WUI Regulations:</strong> In wildfire-prone areas, local Wildland-Urban Interface (WUI) codes may require ignition-resistant decking, enclosed eaves, and tempered glazing.</li>
              <li><strong>Energy Code Compliance:</strong> Regional energy codes evaluate solid wood thermal mass differently across climate zones. Confirm that your manufacturer's wall profiles and engineering documentation comply with local building department requirements.</li>
            </ul>
          </div>

          {/* Contextual Links */}
          <div className="bg-white border border-sand-border rounded-lg p-6 my-8">
            <h4 className="font-serif font-bold text-timber text-lg mb-2">
              Next Steps in Your Planning:
            </h4>
            <ul className="space-y-2 text-sm text-forest font-medium">
              <li>
                <Link to="/guides/how-much-does-a-log-home-cost" className="hover:underline flex items-center gap-1.5">
                  <ArrowRight size={14} />
                  <span>How Much Does a Log Home Cost? Full Project Expenses</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/log-home-kits-explained" className="hover:underline flex items-center gap-1.5">
                  <ArrowRight size={14} />
                  <span>Log Home Kits Explained: What Do You Actually Get?</span>
                </Link>
              </li>
              <li>
                <Link to="/find-a-log-home" className="hover:underline flex items-center gap-1.5">
                  <ArrowRight size={14} />
                  <span>Find Your Log Home Recommendation Tool</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
