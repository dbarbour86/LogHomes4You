import { motion } from "motion/react";
import PageLayout from "../components/Layout/PageLayout";
import Button from "../components/ui/Button";
import { useSEO } from "../hooks/useSEO";
import { homeModels } from "../data/models";
import { Link } from "react-router-dom";
import InvestorInquiryForm from "../components/Forms/InvestorInquiryForm";

export default function InvestorsPage() {
  useSEO({
    title: "Investors & Strategic Partners | King's Cabins",
    description: "King's Cabins is exploring relationships with qualified investors and strategic partners as we build the next chapter of our nationwide log-home business.",
    url: "https://kingscabins.com/investors"
  });

  const featuredModelsIds = ["first-chronicles", "second-chronicles", "second-peter", "jude"];
  const featuredModels = homeModels.filter(m => featuredModelsIds.includes(m.id));

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/craftsmanship.png" 
            alt="King's Cabins Craftsmanship" 
            className="w-full h-full object-cover grayscale-[10%] brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-6 block">
              KING'S CABINS · THE NEXT CHAPTER
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-cream">
              Building <span className="italic font-normal serif">What's Next.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/70 font-light leading-relaxed mb-12">
              For decades, King's Cabins has built genuine log homes around craftsmanship, flexibility and enduring American character. Today, we're exploring strategic relationships that can help us increase capacity, reach more customers and build the next chapter of King's Cabins.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto px-8"
                onClick={() => document.getElementById('investor-inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              >
                START A CONVERSATION
              </Button>
              <Link to="/floor-plans" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  EXPLORE KING'S CABINS
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Foundation Section */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-amber text-[10px] uppercase tracking-[0.3em] mb-4 block">THE FOUNDATION</span>
              <h2 className="text-3xl md:text-4xl font-serif text-cream mb-8">Built on Something Real.</h2>
              <p className="text-cream/70 text-lg font-light leading-relaxed">
                King's Cabins is not an idea being developed from scratch. We operate on a foundation of established log-home designs, decades of craftsmanship, and the ability to work with customers throughout the United States—from efficient smaller footprints to substantial traditional log homes.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="border-t border-amber/20 pt-6">
                <h3 className="text-cream text-lg font-medium tracking-wide mb-3">PROVEN DESIGNS</h3>
                <p className="text-cream/50 font-light text-sm leading-relaxed">
                  A broad catalog of established King's Cabins floor plans.
                </p>
              </div>
              <div className="border-t border-amber/20 pt-6">
                <h3 className="text-cream text-lg font-medium tracking-wide mb-3">REAL CRAFTSMANSHIP</h3>
                <p className="text-cream/50 font-light text-sm leading-relaxed">
                  Genuine log-home construction built around traditional materials and methods.
                </p>
              </div>
              <div className="border-t border-amber/20 pt-6">
                <h3 className="text-cream text-lg font-medium tracking-wide mb-3">NATIONWIDE OPPORTUNITY</h3>
                <p className="text-cream/50 font-light text-sm leading-relaxed">
                  King's Cabins can sell, ship and build for customers across the United States.
                </p>
              </div>
              <div className="border-t border-amber/20 pt-6">
                <h3 className="text-cream text-lg font-medium tracking-wide mb-3">ROOM TO GROW</h3>
                <p className="text-cream/50 font-light text-sm leading-relaxed">
                  An established foundation with opportunities to increase reach and capacity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-32 bg-deep-brown relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber text-[10px] uppercase tracking-[0.3em] mb-4 block">THE OPPORTUNITY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-10">
              More Homes. More Customers. <span className="italic font-normal serif">More King's Cabins.</span>
            </h2>
            <p className="text-cream/70 text-lg md:text-xl font-light leading-relaxed mb-8">
              King's Cabins believes there is an opportunity to build on its existing foundation by making its homes easier to discover, easier to understand and available to more customers across the country.
            </p>
            <p className="text-cream/60 font-light leading-relaxed">
              We are focused on increasing production capacity, improving production throughput, expanding nationwide customer acquisition, and developing strategic relationships that can help King's reach additional customers and markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Homes Section */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber text-[10px] uppercase tracking-[0.3em] mb-4 block">THE HOMES</span>
            <h2 className="text-3xl md:text-4xl font-serif text-cream">A Product People Can See, Touch & Live In.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredModels.map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative block overflow-hidden aspect-[4/5] border border-white/5"
              >
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-serif text-cream mb-1">{model.name}</h3>
                  <p className="text-amber text-xs uppercase tracking-widest">{model.sqft} SQ FT</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/floor-plans">
              <Button variant="outline">EXPLORE ALL FLOOR PLANS</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Possible Section */}
      <section className="py-24 bg-deep-brown border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-amber text-[10px] uppercase tracking-[0.3em] mb-4 block">WHAT'S POSSIBLE</span>
            <h2 className="text-3xl md:text-4xl font-serif text-cream">Building Capacity for What's Ahead.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif text-cream mb-4">Production Capacity</h3>
              <p className="text-cream/60 font-light leading-relaxed">
                Opportunities to increase the number of King's Cabins homes that can move through production.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-serif text-cream mb-4">Materials & Working Capital</h3>
              <p className="text-cream/60 font-light leading-relaxed">
                Greater flexibility around inventory, materials and active projects.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif text-cream mb-4">Customer Acquisition</h3>
              <p className="text-cream/60 font-light leading-relaxed">
                Expanding the systems and marketing that introduce King's Cabins to customers nationwide.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-serif text-cream mb-4">Strategic Expansion</h3>
              <p className="text-cream/60 font-light leading-relaxed">
                Exploring relationships, capabilities and infrastructure that can extend King's reach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 bg-charcoal border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 border border-amber/20 bg-espresso shadow-luxury"
          >
            <span className="text-amber text-[10px] uppercase tracking-[0.3em] mb-6 block">PARTNERSHIP</span>
            <h2 className="text-3xl md:text-4xl font-serif text-cream mb-8">We're Open to the Right Conversation.</h2>
            <p className="text-cream/70 font-light leading-relaxed mb-8">
              King's Cabins is exploring conversations with qualified investors and strategic partners who understand the opportunity to build on an established American log-home business.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10 text-cream/80 font-light">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                Growth capital
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                Strategic investment
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                Business partnerships
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                Builder/dealer relationships
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                Development opportunities
              </li>
            </ul>

            <p className="text-cream/50 text-sm font-light italic border-t border-white/10 pt-8 max-w-lg mx-auto">
              Specific opportunities and structures would be discussed privately with King's Cabins and appropriate professional advisors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investor Inquiry Section */}
      <section className="py-24 bg-deep-brown" id="investor-inquiry">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-charcoal p-10 lg:p-14 border border-white/5 shadow-luxury">
            <div className="text-center mb-10">
              <span className="text-amber text-[10px] uppercase tracking-[0.3em] mb-4 block">LET'S TALK</span>
              <h2 className="text-3xl md:text-4xl font-serif text-cream mb-4">Interested in Building the Next Chapter With Us?</h2>
              <p className="text-cream/60 font-light">
                If you're interested in learning more about King's Cabins, tell us a little about yourself and the type of opportunity you'd like to discuss.
              </p>
            </div>
            
            <InvestorInquiryForm />
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
