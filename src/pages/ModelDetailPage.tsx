import { useParams, Navigate, Link } from "react-router-dom";
import { homeModels } from "../data/models";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import InquiryForm from "../components/Forms/InquiryForm";
import Button from "../components/ui/Button";
import ImageLightbox from "../components/ui/ImageLightbox";
import { useSEO } from "../hooks/useSEO";
import { useState } from "react";
import { motion } from "motion/react";

export default function ModelDetailPage() {
  const { modelId } = useParams();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const model = homeModels.find(m => m.id === modelId);

  if (!model) {
    return <Navigate to="/floor-plans" replace />;
  }

  // Generate Title Tag
  const bedsText = model.beds ? `${model.beds}-Bedroom ` : "";
  const autoTitle = `${model.name} — ${model.sqft} Sq Ft ${bedsText}Log Home | Kings Cabins`;
  const finalTitle = model.seoTitle || autoTitle;

  // Generate Meta Description
  const autoDesc = `Explore the ${model.name} floor plan. A ${model.sqft} square foot log home featuring ${model.beds ? model.beds + ' bedrooms' : 'genuine log construction'} and luxury craftsmanship from Kings Cabins.`;
  const finalDesc = model.seoDescription || autoDesc;

  // Schema Generation
  const floorPlanSchema = {
    "@context": "https://schema.org",
    "@type": "FloorPlan",
    "name": `King's Cabins ${model.name}`,
    "image": `https://kingscabins.com${model.image}`,
    "description": finalDesc,
    ...(model.beds && { "numberOfBedrooms": model.beds }),
    ...(model.baths && { "numberOfBathroomsTotal": model.baths }),
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": model.squareFeet,
      "unitCode": "FTK"
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Floor Plans", href: "/floor-plans" },
    // If it's a small log home, we could inject that. But we'll stick to a clean hierarchy.
    { name: model.name, href: `/floor-plans/${model.id}` },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": `https://kingscabins.com${b.href === '/' ? '' : b.href}`
    }))
  };

  useSEO({
    title: finalTitle,
    description: finalDesc,
    image: `https://kingscabins.com${model.image}`,
    url: `https://kingscabins.com/floor-plans/${model.id}`,
    structuredData: [floorPlanSchema, breadcrumbSchema]
  });

  // Calculate Similar Models
  const similarModels = [...homeModels]
    .filter(m => m.id !== model.id)
    .sort((a, b) => {
      // Primary sort by square feet difference
      const diffA = Math.abs(a.squareFeet - model.squareFeet);
      const diffB = Math.abs(b.squareFeet - model.squareFeet);
      
      if (diffA === diffB && model.beds) {
        // Secondary sort by bed count match
        const bedsMatchA = a.beds === model.beds ? 0 : 1;
        const bedsMatchB = b.beds === model.beds ? 0 : 1;
        return bedsMatchA - bedsMatchB;
      }
      
      return diffA - diffB;
    })
    .slice(0, 3);

  return (
    <PageLayout>
      <InnerHero 
        title={model.name}
        subtitle={`${model.sqft} SQ FT • ${model.beds ?? "TBD"} BEDROOMS • ${model.baths ?? "TBD"} BATHROOMS • EXTERIOR: ${model.dimensions || "TBD"}`}
        image={model.image}
        breadcrumbs={breadcrumbs}
      />
      
      {/* Main Content Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-charcoal" id="floor-plan-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl font-serif text-cream mb-2">{model.name}</h1>
              <span className="block text-amber text-lg font-light mb-4">
                {model.sqft} Sq Ft • {model.beds ? `${model.beds} Bedroom` : "Log Home"} • {model.baths ? `${model.baths} Bath` : ""}
              </span>
              {model.secondaryDescriptor && (
                <h2 className="text-cream/70 text-base font-light mb-8 max-w-2xl mx-auto">{model.secondaryDescriptor}</h2>
              )}
            </motion.div>
          </div>

          {/* Floor Plan & Exterior Images Grid */}
          <div className={`grid grid-cols-1 ${model.floorPlanImage ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'} gap-10 items-start mb-16`}>
            {/* Exterior Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div 
                className="bg-white/5 p-4 border border-white/10 shadow-luxury group cursor-zoom-in"
                onClick={() => setLightboxImage(model.image)}
              >
                <img 
                  src={model.image} 
                  alt={`${model.name} ${model.sqft} square foot King's Cabins log home exterior`} 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:opacity-90 transition-opacity"
                  width={800}
                  height={600}
                />
                <div className="mt-2 text-center text-[10px] uppercase tracking-widest text-cream/40 group-hover:text-amber transition-colors">
                  Click to Enlarge Exterior
                </div>
              </div>
              
              {/* Model Specs */}
              <div className="bg-deep-brown p-6 md:p-8 border border-amber/20 shadow-luxury">
                <h3 className="text-xl font-serif text-amber mb-6 uppercase tracking-widest text-center">Specifications</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Total Area</span>
                    <span className="text-xl font-light text-cream">{model.sqft} sq ft</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Dimensions</span>
                    <span className="text-xl font-light text-cream">{model.dimensions || "TBD"}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Bedrooms</span>
                    <span className="text-xl font-light text-cream">{model.beds ?? "TBD"}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Bathrooms</span>
                    <span className="text-xl font-light text-cream">{model.baths ?? "TBD"}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floor Plan Column */}
            {model.floorPlanImage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 p-4 md:p-8 border border-white/10 shadow-luxury h-full flex flex-col items-center justify-center cursor-zoom-in hover:bg-white/10 transition-colors group"
                onClick={() => setLightboxImage(model.floorPlanImage!)}
              >
                <img 
                  src={model.floorPlanImage} 
                  alt={`${model.name} ${model.sqft} square foot ${model.beds ? model.beds + '-bedroom' : ''} log home floor plan`} 
                  className="w-full h-auto object-contain max-h-[70vh] group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                <div className="mt-4 text-[10px] uppercase tracking-widest text-cream/40 group-hover:text-amber transition-colors">
                  Click to Enlarge Floor Plan
                </div>
              </motion.div>
            )}
          </div>
          
          {model.floorPlanImage && (
            <div className="text-center text-[10px] text-cream/30 italic mb-12 max-w-2xl mx-auto -mt-6">
              Artist rendering — Actual plans may vary. Refer to blueprints for specific details.
            </div>
          )}

          {/* Intro Description & Details */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 inline-block bg-white/5 border border-white/10 p-6 shadow-luxury text-left w-full sm:w-auto min-w-[300px]">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-amber mb-4 border-b border-white/10 pb-2">At a Glance</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-cream/80 font-light text-sm">
                  <li><strong>Total Area:</strong> {model.sqft} sq. ft.</li>
                  <li><strong>Bedrooms:</strong> {model.beds ?? "TBD"}</li>
                  <li><strong>Bathrooms:</strong> {model.baths ?? "TBD"}</li>
                  {model.dimensions && <li><strong>Dimensions:</strong> {model.dimensions}</li>}
                  {model.interiorSqft && <li><strong>Interior:</strong> {model.interiorSqft} sq. ft.</li>}
                  {model.porchSqft && <li><strong>Covered Porch:</strong> {model.porchSqft} sq. ft.</li>}
                  {model.firstFloorSqft && <li><strong>First Floor:</strong> {model.firstFloorSqft} sq. ft.</li>}
                  {model.secondFloorSqft && <li><strong>Second Floor:</strong> {model.secondFloorSqft} sq. ft.</li>}
                </ul>
              </div>

              {/* Dynamic Verified Summary */}
              <p className="text-cream/70 text-lg font-light leading-relaxed mb-4 text-left sm:text-center">
                {model.tagline}
              </p>
              <p className="text-cream/70 text-lg font-light leading-relaxed mb-8 text-left sm:text-center">
                The {model.name} is a {model.squareFeet}-square-foot log home plan {model.beds ? `featuring ${model.beds} bedroom${model.beds > 1 ? 's' : ''}` : ''} {model.baths ? `and ${model.baths} bathroom${model.baths > 1 ? 's' : ''}` : ''}.
                {model.dimensions ? ` Its ${model.dimensions} footprint provides a well-considered layout.` : ''}
                {model.stories ? ` The home is designed with ${model.stories} stor${model.stories > 1 ? 'ies' : 'y'}.` : ''}
                
                {model.name === "First Chronicles" && " This design maximizes every square inch, providing a full-featured living experience wrapped in robust, hand-crafted logs."}
                {model.name === "Second Chronicles" && " With an expansive open-concept living area and carefully placed bedrooms, this model offers breathing room and natural flow."}
                {model.name === "Second Peter" && " The addition of a full-width covered porch extends the living space into the outdoors, perfect for taking in mountain views or enjoying quiet evenings."}
                {model.name === "Jude" && " A striking two-story profile gives this home a commanding presence."}
                {model.name === "Philemon" && " Offering a balanced approach to mountain living, this layout provides enough space to host family and friends while maintaining the cozy, intimate feel that makes a log cabin special."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" onClick={() => document.getElementById('inquiry-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  REQUEST PRICING
                </Button>
                <Link to="/floor-plans" className="text-amber underline hover:text-white transition-colors ml-4 text-sm tracking-wide uppercase">
                  Back to Floor Plans
                </Link>
                {model.squareFeet < 1000 && (
                  <Link to="/small-log-homes" className="text-amber underline hover:text-white transition-colors ml-4 text-sm tracking-wide uppercase hidden sm:inline">
                    Small Log Homes Collection
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 border border-amber/20 bg-espresso relative shadow-luxury"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-charcoal border border-amber/20 px-6 py-2">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-amber">MAKE IT YOURS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cream">Built From a Proven Plan. <span className="italic font-normal">Made for You.</span></h2>
                <p className="text-cream/70 text-lg font-light leading-relaxed mb-8">
                    King's Cabins plans serve as an excellent starting point. Speak with us about available modifications, materials, finishes, and construction options to tailor this layout to your exact vision and land.
                </p>
                <Button variant="primary" className="mx-auto" onClick={() => document.getElementById('inquiry-section')?.scrollIntoView({ behavior: 'smooth' })}>
                    TALK TO US ABOUT THIS HOME
                </Button>
            </motion.div>
        </div>
      </section>

      {/* Similar Floor Plans Section */}
      {similarModels.length > 0 && (
        <section className="py-20 bg-deep-brown border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif text-cream mb-2">Similar Log Home Floor Plans</h2>
              <p className="text-cream/60 font-light">Explore other designs that might fit your project.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarModels.map(similar => (
                <Link to={`/floor-plans/${similar.id}`} key={similar.id} className="group block bg-charcoal border border-white/5 shadow-luxury hover:border-amber/30 transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={similar.image} 
                      alt={`${similar.name} log home exterior`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif text-amber mb-1">{similar.name}</h3>
                      <p className="text-cream/80 text-sm">{similar.sqft} Sq Ft • {similar.beds ?? 'TBD'} Beds • {similar.baths ?? 'TBD'} Baths</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form Section */}
      <section className="py-24 bg-charcoal border-t border-white/5" id="inquiry-section">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-deep-brown p-10 lg:p-14 border border-white/5 shadow-luxury"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-cream mb-4">Interested in the {model.name}?</h2>
              <p className="text-cream/60 font-light">Tell us a little about your project and we'll help you understand the next steps.</p>
            </div>
            <InquiryForm interestedModel={model.name} />
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <ImageLightbox 
        isOpen={!!lightboxImage} 
        imageSrc={lightboxImage || ""} 
        onClose={() => setLightboxImage(null)} 
      />
    </PageLayout>
  );
}
