import React from "react";
import { Link } from "react-router-dom";
import { Compass, Home, BookOpen, ArrowRight } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import { useSEO } from "../hooks/useSEO";

export default function NotFoundPage() {
  useSEO({
    title: "Page Not Found | Log Homes 4 You",
    description: "The requested page does not exist. Explore floor plans, sizing tools, and log home guides on LogHomes4You.",
    noindex: true,
  });

  return (
    <PageLayout showCTA={false}>
      <div className="py-20 md:py-32 bg-sand text-center px-4 sm:px-6">
        <div className="max-w-xl mx-auto bg-white border border-sand-border rounded-xl p-8 sm:p-12 shadow-card">
          <div className="w-16 h-16 rounded-full bg-forest-light text-forest flex items-center justify-center mx-auto mb-6">
            <Compass size={32} />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-cedar block mb-2">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-timber mb-4">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-timber-muted leading-relaxed mb-8">
            The page you requested may have moved or no longer exists. Use the links below to find what you are looking for:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left mb-8">
            <Link
              to="/log-home-plans"
              className="p-4 rounded-lg bg-sand-muted border border-sand-border hover:border-forest transition-colors flex flex-col justify-between"
            >
              <span className="text-xs font-bold text-timber block mb-1">Floor Plans</span>
              <span className="text-[11px] text-timber-subtle">Browse 50+ designs</span>
            </Link>
            <Link
              to="/find-a-log-home"
              className="p-4 rounded-lg bg-sand-muted border border-sand-border hover:border-forest transition-colors flex flex-col justify-between"
            >
              <span className="text-xs font-bold text-timber block mb-1">Find Your Home</span>
              <span className="text-[11px] text-timber-subtle">Recommendation tool</span>
            </Link>
            <Link
              to="/guides"
              className="p-4 rounded-lg bg-sand-muted border border-sand-border hover:border-forest transition-colors flex flex-col justify-between"
            >
              <span className="text-xs font-bold text-timber block mb-1">Guides</span>
              <span className="text-[11px] text-timber-subtle">Costs & building tips</span>
            </Link>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-md transition-colors"
          >
            <span>Return to Homepage</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
