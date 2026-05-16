import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does the average custom log home build take?",
    answer: "Typically, the process from initial design to move-in takes 14 to 18 months. This includes 2-4 months for architectural design and permitting, and 12-14 months for the actual handcrafted build and finishing."
  },
  {
    question: "Do you ship log home packages nationwide?",
    answer: "Yes. We offer nationwide shipping for our 'Handcrafted Shell' packages. Our artisans build the shell at our facility, then transport and reassemble it on your site anywhere in the continental US."
  },
  {
    question: "What types of timber species do you work with?",
    answer: "We primarily work with Eastern White Pine, Western Red Cedar, and Douglas Fir. Each species offers unique characteristics in terms of grain patterns, thermal properties, and aesthetic appeal."
  },
  {
    question: "Are log homes energy efficient?",
    answer: "Extremely. Logs have 'thermal mass' which naturally stores heat and releases it slowly. When precision-fitted by our master craftsmen, our homes often outperform traditional stick-built homes in energy audits."
  },
  {
    question: "Can I customize an existing floor plan?",
    answer: "Absolutely. Every Kings Cabin is unique. Our existing models are meant to serve as starting points for inspiration. We can scale, modify, or completely redesign any element to fit your needs."
  }
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  key?: number;
}

function FAQItem({ faq, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className={`text-lg md:text-xl font-serif transition-colors duration-300 ${isOpen ? 'text-amber' : 'text-cream group-hover:text-amber/80'}`}>
          {faq.question}
        </span>
        <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'border-amber bg-amber text-charcoal' : 'border-white/10 text-cream/40'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="pb-8 text-cream/50 leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-charcoal" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">CLARITY & TRANSPARENCY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">
            Frequently <span className="italic font-normal">Asked Questions</span>
          </h2>
        </div>

        <div className="bg-espresso/30 p-4 md:p-8 rounded-sm border border-white/5">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
