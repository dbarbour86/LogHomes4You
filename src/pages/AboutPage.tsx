import React from "react";
import { Link } from "react-router-dom";
import { Compass, BookOpen, Layers, ShieldCheck, CheckCircle2, ArrowRight, Home } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import { useSEO } from "../hooks/useSEO";

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Log Homes 4 You",
    "description": "Learn about the mission, editorial standards, and transparent publisher disclosure of LogHomes4You.",
    "url": "https://loghomes4you.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Log Homes 4 You",
      "url": "https://loghomes4you.com",
      "description": "Log home education, floor plan discovery, and sizing resource."
    }
  };

  useSEO({
    title: "About Log Homes 4 You | Mission & Transparency Disclosure",
    description: "Learn about LogHomes4You. We provide straightforward guides, real floor plans, and sizing tools to help you research log homes before contacting builders.",
    url: "https://loghomes4you.com/about",
    structuredData: aboutSchema,
  });

  return (
    <PageLayout showCTA={true}>
      <InnerHero
        title="About Log Homes 4 You"
        subtitle="Making log home research transparent, practical, and accessible before you ever contact a builder or sign a contract."
        badge="Our Mission"
        breadcrumbs={breadcrumbs}
      />

      <article className="py-14 md:py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-10 text-timber text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-4">
                Why Log Homes 4 You Exists
              </h2>
              <p className="text-timber-muted mb-4">
                Researching a log home is often overwhelming. Commercial builder websites are filled with vague pricing, romanticized marketing claims, and complicated package jargon that leaves first-time buyers confused about what they actually need and what a project will truly cost.
              </p>
              <p className="text-timber-muted mb-4">
                LogHomes4You was created to solve this problem. We are a consumer-focused education, comparison, and planning resource. Our goal is to provide honest answers to essential questions: How much space do you actually need? What does a package kit actually include? What are the real tradeoffs of small cabin living? How does turnkey budgeting work?
              </p>
            </section>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 not-prose">
              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <BookOpen size={24} className="text-forest mb-3" />
                <h3 className="font-serif font-bold text-timber text-lg mb-2">
                  Honest Guidance
                </h3>
                <p className="text-xs sm:text-sm text-timber-muted leading-relaxed">
                  We explain real cost drivers, foundation variables, and maintenance demands without sugarcoating the construction reality.
                </p>
              </div>

              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <Compass size={24} className="text-cedar mb-3" />
                <h3 className="font-serif font-bold text-timber text-lg mb-2">
                  Practical Discovery
                </h3>
                <p className="text-xs sm:text-sm text-timber-muted leading-relaxed">
                  Our interactive sizing tools and filtered floor plan directory help you browse real designs based on your actual lifestyle criteria.
                </p>
              </div>

              <div className="bg-white border border-sand-border rounded-lg p-6 shadow-subtle">
                <ShieldCheck size={24} className="text-forest mb-3" />
                <h3 className="font-serif font-bold text-timber text-lg mb-2">
                  Direct Verification
                </h3>
                <p className="text-xs sm:text-sm text-timber-muted leading-relaxed">
                  We link every showcased layout directly to the verified manufacturer product page so you can inspect blueprints and request pricing.
                </p>
              </div>
            </div>

            {/* What We Do & Do Not Do */}
            <section className="bg-white border border-sand-border rounded-xl p-6 sm:p-8 my-10">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-timber mb-4">
                What We Do (and What We Don't)
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-timber-muted">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-forest shrink-0 mt-1" />
                  <p><strong>We do organize real floor plans and educational guides</strong> to help you make informed decisions before contacting builders.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-forest shrink-0 mt-1" />
                  <p><strong>We do provide interactive tools</strong> that evaluate square footage and room counts without requiring an account or collecting personal data.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-forest shrink-0 mt-1" />
                  <p><strong>We do NOT manufacture homes or perform construction services.</strong> We are strictly an informational publisher and discovery resource.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-forest shrink-0 mt-1" />
                  <p><strong>We do NOT make unsupported price guarantees.</strong> Package pricing, engineering stamps, and delivery timelines must always be confirmed directly with the builder.</p>
                </div>
              </div>
            </section>

            {/* Transparent Disclosure Required by Prompt */}
            <section className="bg-sand-muted border-2 border-forest/20 rounded-xl p-6 sm:p-8 my-10">
              <div className="flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck size={18} />
                <span>Publisher & Affiliate Disclosure</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-timber mb-3">
                Our Relationship With King's Cabins
              </h2>
              <p className="text-sm sm:text-base text-timber-muted leading-relaxed mb-4">
                In the interest of complete consumer transparency: the floor plan layouts currently featured on LogHomes4You are designs offered by <strong>King's Cabins</strong>, a handcrafted log home builder and package manufacturer based in Tennessee.
              </p>
              <p className="text-sm sm:text-base text-timber-muted leading-relaxed mb-4">
                While we operate LogHomes4You as a dedicated research and educational destination, the site may receive compensation or benefits if you choose to contact or purchase a home package from King's Cabins through our links. We do not claim false editorial independence.
              </p>
              <p className="text-sm sm:text-base text-timber-muted leading-relaxed">
                We clearly identify King's Cabins as the provider on all model cards and link directly to their canonical product pages so you can verify specifications, package tiers, and pricing firsthand.
              </p>
              <div className="mt-4 pt-4 border-t border-sand-border">
                <Link
                  to="/builders/kings-cabins"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-forest-dark"
                >
                  <span>Learn more about King's Cabins</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
