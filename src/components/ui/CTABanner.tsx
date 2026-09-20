import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 bg-forest text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-cedar-light text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6 backdrop-blur-xs">
          <Compass size={14} />
          <span>Interactive Recommendation Engine</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          Not Sure Which Size or Layout Fits You Best?
        </h2>

        <p className="text-sand/90 text-base sm:text-lg max-w-2xl mx-auto font-light mb-8 leading-relaxed">
          Answer four straightforward questions about your bedrooms, footprint, and how you intend to use your cabin. We'll recommend floor plans that match.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/find-a-log-home"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cedar hover:bg-cedar-dark text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md shadow-md transition-colors"
          >
            <span>Launch Recommendation Tool</span>
            <ArrowRight size={17} />
          </Link>
          <Link
            to="/log-home-plans"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-colors border border-white/20"
          >
            <span>Browse All Floor Plans</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
