import { motion } from "motion/react";
import InnerHero from "../components/ui/InnerHero";
import PageLayout from "../components/Layout/PageLayout";
import Button from "../components/ui/Button";
import { useSEO } from "../hooks/useSEO";
import { ArrowRight, MapPin, Truck, Home } from "lucide-react";

export default function NationwideLogHomesPage() {
  useSEO({
    title: "Log Homes Shipped & Built Nationwide | King's Cabins",
    description: "King's Cabins works with customers throughout the United States. Explore our log home packages, nationwide shipping, and construction options.",
    url: "https://kingscabins.com/nationwide-log-homes"
  });

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Nationwide", href: "/nationwide-log-homes" },
  ];

  return (
    <PageLayout>
      <InnerHero 
        title="King's Cabins Across America"
        subtitle="King's Cabins works with customers throughout the United States to deliver genuine log homes. Whether you are building in the mountains of Tennessee, the plains of Texas, or the forests of the Pacific Northwest, we provide the packages and expertise to bring your vision to life."
        image="/Luke.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif text-cream mb-6">Building Without Borders</h2>
            <p className="text-cream/70 text-lg font-light leading-relaxed">
              We understand that the perfect piece of land isn't always local. That's why King's Cabins has developed a streamlined process to sell, ship, and assist in building log homes nationwide. You don't have to settle for regional alternatives when you can have a genuine King's Cabin delivered directly to your site.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-deep-brown p-8 border border-white/5 shadow-luxury text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber mx-auto mb-6">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-serif text-cream mb-4">Nationwide Planning</h3>
              <p className="text-cream/60 font-light text-sm">
                Our in-house design team works with you remotely to adapt our floor plans to your specific location, considering your land's topography and views.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-deep-brown p-8 border border-white/5 shadow-luxury text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber mx-auto mb-6">
                <Truck size={20} />
              </div>
              <h3 className="text-xl font-serif text-cream mb-4">Direct Shipping</h3>
              <p className="text-cream/60 font-light text-sm">
                We carefully package and ship your log home materials directly to your building site anywhere in the United States, fully organized for assembly.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-deep-brown p-8 border border-white/5 shadow-luxury text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber mx-auto mb-6">
                <Home size={20} />
              </div>
              <h3 className="text-xl font-serif text-cream mb-4">Construction Options</h3>
              <p className="text-cream/60 font-light text-sm">
                Contact us to discuss how we can assist with construction in your specific state, working with local builders or providing specialized support.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-espresso p-10 border border-amber/20 shadow-luxury text-center"
          >
            <h3 className="text-2xl font-serif text-cream mb-4">Ready to build in your state?</h3>
            <p className="text-cream/70 font-light mb-8 max-w-2xl mx-auto">
              Every location is unique. Reach out to discuss your specific property, and we will guide you through the process of bringing a King's Cabin to your state.
            </p>
            <Button variant="primary" className="flex items-center gap-2 mx-auto" onClick={() => window.location.href = '/contact'}>
              CONTACT US <ArrowRight size={18} />
            </Button>
          </motion.div>

        </div>
      </section>
    </PageLayout>
  );
}
