import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "James & Eleanor Patterson",
    location: "Blue Ridge, GA",
    text: "Building with Kings Cabins was the most rewarding experience of our lives. From the first log selection to the final stone on the fireplace, their attention to detail was obsessive and inspiring.",
    stars: 5
  },
  {
    name: "Robert McAllister",
    location: "Aspen, CO",
    text: "They don't just build cabins; they build works of art. My mountain retreat is the talk of the ridge. The way the light hits the timber in the morning is something you have to see to believe.",
    stars: 5
  },
  {
    name: "The Sterling Family",
    location: "Gatlinburg, TN",
    text: "Professional, transparent, and masterfully skilled. They transformed our rough sketch into a cinematic generational legacy home that will be in our family for decades.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">CLIENT VOICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">
            Words from <span className="italic font-normal">Our Families</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-deep-brown border border-white/5 relative group hover:border-amber/30 transition-all duration-500 rounded-sm"
            >
              <Quote className="absolute top-6 right-6 text-amber/10 group-hover:text-amber/20 transition-colors duration-500" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber text-amber" />
                ))}
              </div>

              <p className="text-cream/70 italic leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>

              <div>
                <h4 className="text-lg font-serif text-cream">{review.name}</h4>
                <span className="text-[10px] uppercase tracking-widest text-amber font-medium">{review.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
