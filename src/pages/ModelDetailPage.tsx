import { useParams, Navigate } from "react-router-dom";
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

  useSEO({
    title: model.seoTitle || `${model.name} ${model.sqft} Sq Ft Log Home | King's Cabins`,
    description: model.seoDescription || `Explore the ${model.name}, a King's Cabins log home featuring ${model.sqft} sq ft, genuine log construction, and luxury craftsmanship.`,
    image: `https://www.kingscabins.com${model.image}`,
    url: `https://www.kingscabins.com/floor-plans/${model.id}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `King's Cabins ${model.name}`,
      "image": `https://www.kingscabins.com${model.image}`,
      "description": model.seoDescription || `Explore the ${model.name}, a King's Cabins log home featuring ${model.sqft} sq ft.`,
      "brand": {
        "@type": "Brand",
        "name": "King's Cabins"
      }
    }
  });

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Floor Plans", href: "/floor-plans" },
    { name: model.name, href: `/floor-plans/${model.id}` },
  ];

  return (
    <PageLayout>
      <InnerHero 
        title={model.name}
        subtitle={`${model.sqft} SQ FT • ${model.beds === "TBD" ? "TBD" : model.beds} BEDROOMS • ${model.baths === "TBD" ? "TBD" : model.baths} BATHROOMS • EXTERIOR: ${model.dimensions || "TBD"}`}
        image={model.image}
        breadcrumbs={breadcrumbs}
      />
      
      {/* Intro Section */}
      <section className="pt-12 pb-4 md:pt-16 md:pb-6 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-serif text-cream mb-2">{model.name}</h1>
            {model.secondaryDescriptor && (
              <h2 className="text-amber text-lg font-light mb-6">{model.secondaryDescriptor}</h2>
            )}
            
            {/* At a Glance */}
            <div className="mb-8 inline-block bg-white/5 border border-white/10 p-6 shadow-luxury text-left">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-amber mb-4 border-b border-white/10 pb-2">At a Glance</h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-cream/80 font-light text-sm">
                <li><strong>Total Area:</strong> {model.sqft} sq. ft.</li>
                <li><strong>Bedrooms:</strong> {model.beds}</li>
                <li><strong>Bathrooms:</strong> {model.baths}</li>
                {model.dimensions && <li><strong>Dimensions:</strong> {model.dimensions}</li>}
                {model.interiorSqft && <li><strong>Interior:</strong> {model.interiorSqft} sq. ft.</li>}
                {model.porchSqft && <li><strong>Covered Porch:</strong> {model.porchSqft} sq. ft.</li>}
                {model.firstFloorSqft && <li><strong>First Floor:</strong> {model.firstFloorSqft} sq. ft.</li>}
                {model.secondFloorSqft && <li><strong>Second Floor:</strong> {model.secondFloorSqft} sq. ft.</li>}
              </ul>
            </div>

            <p className="text-cream/70 text-lg font-light leading-relaxed mb-8">
              {model.tagline}
              {" "}
              {model.name === "First Chronicles" && "This design maximizes every square inch, providing a full-featured living experience wrapped in robust, hand-crafted logs. Ideal for mountain getaways or serene retreats, it delivers uncompromising quality. Need a little more room? Explore the 660 sq. ft. "}
              {model.name === "First Chronicles" && <><a href="/floor-plans/second-chronicles" className="text-amber underline hover:text-white transition-colors">Second Chronicles</a>.</>}
              
              {model.name === "Second Chronicles" && "With an expansive open-concept living area and carefully placed bedrooms, this model offers breathing room and natural flow. It embodies the rustic elegance that defines a true log home lifestyle. Considering other sizes? Check out the efficient "}
              {model.name === "Second Chronicles" && <a href="/floor-plans/first-chronicles" className="text-amber underline hover:text-white transition-colors">First Chronicles</a>}
              {model.name === "Second Chronicles" && " or the slightly larger "}
              {model.name === "Second Chronicles" && <><a href="/floor-plans/second-peter" className="text-amber underline hover:text-white transition-colors">Second Peter</a>.</>}

              {model.name === "Second Peter" && "The addition of a full-width covered porch extends the living space into the outdoors, perfect for taking in mountain views or enjoying quiet evenings. Inside, the efficient layout prioritizes comfort without excess. Compare with the smaller "}
              {model.name === "Second Peter" && <a href="/floor-plans/second-chronicles" className="text-amber underline hover:text-white transition-colors">Second Chronicles</a>}
              {model.name === "Second Peter" && " or the two-story "}
              {model.name === "Second Peter" && <><a href="/floor-plans/jude" className="text-amber underline hover:text-white transition-colors">Jude</a>.</>}

              {model.name === "Jude" && "A striking two-story profile gives this home a commanding presence. The main floor handles daily living with grace, while the upper level provides valuable flexibility for guests, a study, or additional retreat space. Alternatively, view the single-level "}
              {model.name === "Jude" && <a href="/floor-plans/second-peter" className="text-amber underline hover:text-white transition-colors">Second Peter</a>}
              {model.name === "Jude" && " or return to the full "}
              {model.name === "Jude" && <><a href="/floor-plans" className="text-amber underline hover:text-white transition-colors">Floor Plans</a> collection.</>}
              
              {model.name === "Philemon" && "Offering a balanced approach to mountain living, this layout provides enough space to host family and friends while maintaining the cozy, intimate feel that makes a log cabin special."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" onClick={() => document.getElementById('inquiry-section')?.scrollIntoView({ behavior: 'smooth' })}>
                REQUEST PRICING
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('floor-plan-section')?.scrollIntoView({ behavior: 'smooth' })}>
                VIEW FLOOR PLAN
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floor Plan & Exterior Images Section */}
      {model.floorPlanImage && (
        <section className="pt-6 pb-20 md:pt-8 md:pb-24 bg-deep-brown" id="floor-plan-section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-cream">
                Explore the <span className="italic font-normal">Floor Plan</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
                  />
                  <div className="mt-2 text-center text-[10px] uppercase tracking-widest text-cream/40 group-hover:text-amber transition-colors">
                    Click to Enlarge Exterior
                  </div>
                </div>
                
                {/* Model Specs */}
                <div className="bg-charcoal p-6 md:p-8 border border-amber/20 shadow-luxury">
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
                      <span className="text-xl font-light text-cream">{model.beds === "TBD" ? "TBD" : model.beds}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Bathrooms</span>
                      <span className="text-xl font-light text-cream">{model.baths === "TBD" ? "TBD" : model.baths}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floor Plan Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 p-4 md:p-8 border border-white/10 shadow-luxury h-full flex flex-col items-center justify-center cursor-zoom-in hover:bg-white/10 transition-colors group"
                onClick={() => setLightboxImage(model.floorPlanImage!)}
              >
                <img 
                  src={model.floorPlanImage} 
                  alt={`${model.name} ${model.sqft} square foot ${model.beds === 1 ? 'one' : 'two'}-bedroom log home floor plan`} 
                  className="w-full h-auto object-contain max-h-[70vh] group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="mt-4 text-[10px] uppercase tracking-widest text-cream/40 group-hover:text-amber transition-colors">
                  Click to Enlarge Floor Plan
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

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

      {/* Q&A Section */}
      <section className="py-16 bg-deep-brown border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-serif text-amber mb-8 text-center uppercase tracking-widest">Questions About the {model.name}?</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-cream mb-2">How large is the {model.name}?</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                {model.name === "First Chronicles" && `The First Chronicles is an efficient 480-square-foot log home with a ${model.dimensions} footprint.`}
                {model.name === "Second Chronicles" && `Second Chronicles provides 660 square feet of total living space in a ${model.dimensions} layout.`}
                {model.name === "Second Peter" && `Second Peter provides 784 square feet total, including 560 square feet of interior space and a 224-square-foot covered porch.`}
                {model.name === "Jude" && `Jude provides 900 square feet of total living space, featuring a 600-square-foot first floor and a 300-square-foot upper level.`}
                {model.name === "Philemon" && `Philemon provides 1,080 square feet of living space across two levels.`}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cream mb-2">How many bedrooms does the {model.name} have?</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                The {model.name} has {model.beds} bedrooms and {model.baths} bathroom{model.baths === 1 ? '' : 's'}.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cream mb-2">Can the {model.name} floor plan be customized?</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                The {model.name} can serve as a starting point for a King's Cabins project. Contact King's Cabins to discuss available modifications, materials and construction options.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cream mb-2">Can King's Cabins ship this home outside Tennessee?</h3>
              <p className="text-cream/70 font-light leading-relaxed">
                King's Cabins serves customers throughout the United States. Contact King's Cabins to discuss shipping or construction options for your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-deep-brown" id="inquiry-section">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal p-10 lg:p-14 border border-white/5 shadow-luxury"
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
