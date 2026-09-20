import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Compass, Check, ArrowRight, RotateCcw, Bed, Maximize2, ShieldCheck } from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import InnerHero from "../components/ui/InnerHero";
import ModelDiscoveryCard from "../components/ui/ModelDiscoveryCard";
import { verifiedModels, DiscoveryModel } from "../data/models";
import { useSEO } from "../hooks/useSEO";

type BedOption = "1" | "2" | "3" | "4+";
type SqftOption = "under-800" | "800-1000" | "1000-1500" | "1500-2000" | "2000+" | "not-sure";
type UseOption = "full-time" | "downsizing" | "vacation" | "rental" | "recreational" | "not-sure";

export default function FindYourLogHomePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Find Your Home", href: "/find-a-log-home" },
  ];

  useSEO({
    title: "Find Your Log Home | Interactive Floor Plan Recommendation Tool",
    description: "Answer four straightforward questions about your bedroom needs, desired square footage, and lifestyle to discover matching log home floor plans.",
    url: "https://loghomes4you.com/find-a-log-home",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Find Your Log Home Tool",
      "description": "Interactive log home floor plan sizing and recommendation tool.",
      "url": "https://loghomes4you.com/find-a-log-home"
    }
  });

  // Tool State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedBeds, setSelectedBeds] = useState<BedOption | null>(null);
  const [selectedSqft, setSelectedSqft] = useState<SqftOption | null>(null);
  const [selectedUse, setSelectedUse] = useState<UseOption | null>(null);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  // Step 4 Options (up to 3 selection)
  const priorityOptions = [
    "Lower cost / budget efficiency",
    "Loft layout",
    "Compact footprint",
    "Extra bedrooms",
    "Multiple bathrooms",
    "Single-level living",
    "Spacious outdoor porches",
    "Open living area",
  ];

  const handlePriorityToggle = (priority: string) => {
    if (selectedPriorities.includes(priority)) {
      setSelectedPriorities(selectedPriorities.filter((p) => p !== priority));
    } else {
      if (selectedPriorities.length < 3) {
        setSelectedPriorities([...selectedPriorities, priority]);
      }
    }
  };

  const resetTool = () => {
    setSelectedBeds(null);
    setSelectedSqft(null);
    setSelectedUse(null);
    setSelectedPriorities([]);
    setCurrentStep(1);
    setShowResults(false);
  };

  // Genuine Recommendation Scoring Algorithm based on actual verified model attributes
  const recommendations = useMemo(() => {
    if (!showResults) return [];

    const scored = verifiedModels.map((model) => {
      let score = 0;
      const reasons: string[] = [];

      // 1. Bedroom Requirement Match
      if (selectedBeds) {
        if (selectedBeds === "1" && model.beds === 1) {
          score += 35;
          reasons.push("Exact 1-bedroom match");
        } else if (selectedBeds === "2" && model.beds === 2) {
          score += 35;
          reasons.push("Exact 2-bedroom match");
        } else if (selectedBeds === "3" && model.beds === 3) {
          score += 35;
          reasons.push("Exact 3-bedroom match");
        } else if (selectedBeds === "4+" && model.beds && model.beds >= 4) {
          score += 35;
          reasons.push(`Spacious ${model.beds}-bedroom layout`);
        } else if (model.beds && Math.abs(model.beds - (selectedBeds === "4+" ? 4 : parseInt(selectedBeds, 10))) === 1) {
          score += 15;
          reasons.push(`Close bedroom alternative (${model.beds} beds)`);
        }
      }

      // 2. Square Footage Preference Match
      if (selectedSqft && selectedSqft !== "not-sure") {
        if (selectedSqft === "under-800" && model.squareFeet < 800) {
          score += 30;
          reasons.push(`Compact ${model.squareFeet} sq ft footprint under 800 sq ft`);
        } else if (selectedSqft === "800-1000" && model.squareFeet >= 800 && model.squareFeet <= 1000) {
          score += 30;
          reasons.push(`Fits your 800–1,000 sq ft range (${model.squareFeet} sq ft)`);
        } else if (selectedSqft === "1000-1500" && model.squareFeet > 1000 && model.squareFeet <= 1500) {
          score += 30;
          reasons.push(`Fits your 1,000–1,500 sq ft target (${model.squareFeet} sq ft)`);
        } else if (selectedSqft === "1500-2000" && model.squareFeet > 1500 && model.squareFeet <= 2000) {
          score += 30;
          reasons.push(`Fits your 1,500–2,000 sq ft range (${model.squareFeet} sq ft)`);
        } else if (selectedSqft === "2000+" && model.squareFeet > 2000) {
          score += 30;
          reasons.push(`Generous ${model.squareFeet} sq ft space over 2,000 sq ft`);
        }
      } else {
        score += 15; // Neutral baseline for "not sure"
      }

      // 3. Intended Use Match
      if (selectedUse) {
        if (selectedUse === "downsizing" && model.squareFeet <= 1400) {
          score += 15;
          reasons.push("Manageable footprint ideal for downsizing");
        } else if (selectedUse === "recreational" && model.squareFeet < 1000) {
          score += 15;
          reasons.push("Straightforward layout for weekend or recreational use");
        } else if (selectedUse === "vacation" && (model.hasLoft || model.squareFeet <= 1600)) {
          score += 15;
          reasons.push("Flexible vacation retreat layout");
        } else if (selectedUse === "full-time" && model.squareFeet >= 1100) {
          score += 15;
          reasons.push("Generous storage and permanent living amenities");
        } else if (selectedUse === "rental" && model.beds && model.beds >= 2) {
          score += 15;
          reasons.push("Proven bedroom configuration for vacation rental appeal");
        }
      }

      // 4. Priorities Check (Supported by real model attributes)
      if (selectedPriorities.includes("Loft layout") && model.hasLoft) {
        score += 10;
        reasons.push("Features an upper loft area");
      }
      if (selectedPriorities.includes("Compact footprint") && model.squareFeet < 900) {
        score += 10;
        reasons.push("Small exterior footprint");
      }
      if (selectedPriorities.includes("Single-level living") && !model.hasLoft && model.stories === 1) {
        score += 10;
        reasons.push("True single-level living without stairs");
      }
      if (selectedPriorities.includes("Multiple bathrooms") && model.baths && model.baths >= 2) {
        score += 10;
        reasons.push(`${model.baths} full bathrooms`);
      }
      if (selectedPriorities.includes("Lower cost / budget efficiency") && model.squareFeet <= 960) {
        score += 10;
        reasons.push("Material-efficient structural envelope");
      }

      // Synthesize 1-2 sentence match summary
      const matchExplanation = reasons.length > 0
        ? `Recommended because it provides a ${reasons.slice(0, 2).join(" and ")}. Perfectly aligned with your preferences.`
        : model.fitSummary;

      return {
        model,
        score,
        matchExplanation,
      };
    });

    // Sort by score descending and return top matches
    return scored.sort((a, b) => b.score - a.score).slice(0, 9);
  }, [showResults, selectedBeds, selectedSqft, selectedUse, selectedPriorities]);

  const canProceed = () => {
    if (currentStep === 1) return selectedBeds !== null;
    if (currentStep === 2) return selectedSqft !== null;
    if (currentStep === 3) return selectedUse !== null;
    if (currentStep === 4) return selectedPriorities.length > 0;
    return false;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <PageLayout showCTA={false}>
      <InnerHero
        title="Find Your Log Home"
        subtitle="A practical 4-step recommendation tool to help you discover floor plans that match your family size, building site, and lifestyle. No account required."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12 md:py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {!showResults ? (
            <div className="bg-white border border-sand-border rounded-xl shadow-card p-6 sm:p-10">
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-timber-subtle mb-3">
                  <span>Step {currentStep} of 4</span>
                  <span>
                    {currentStep === 1 && "Bedroom Requirements"}
                    {currentStep === 2 && "Square Footage Range"}
                    {currentStep === 3 && "Intended Living Use"}
                    {currentStep === 4 && "Key Priorities"}
                  </span>
                </div>
                <div className="w-full h-2 bg-sand-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-forest transition-all duration-300 rounded-full"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Bedrooms */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-3">
                    How many bedrooms do you need?
                  </h2>
                  <p className="text-sm text-timber-muted mb-8 leading-relaxed">
                    Think about permanent household members as well as guest accommodation.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {(["1", "2", "3", "4+"] as BedOption[]).map((beds) => (
                      <button
                        key={beds}
                        type="button"
                        onClick={() => setSelectedBeds(beds)}
                        className={`p-6 rounded-lg border text-center transition-all cursor-pointer ${
                          selectedBeds === beds
                            ? "bg-forest text-white border-forest shadow-md"
                            : "bg-white hover:bg-sand-muted border-sand-border text-timber"
                        }`}
                      >
                        <Bed size={28} className={`mx-auto mb-3 ${selectedBeds === beds ? "text-cedar-light" : "text-forest"}`} />
                        <span className="block text-2xl font-serif font-bold mb-1">{beds}</span>
                        <span className="text-xs uppercase tracking-wider opacity-80">
                          {beds === "1" ? "Bedroom" : "Bedrooms"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Square Footage */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-3">
                    How much space are you considering?
                  </h2>
                  <p className="text-sm text-timber-muted mb-8 leading-relaxed">
                    Keep in mind that log construction is efficient—thoughtful layouts often feel larger than standard stick-built homes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "under-800", label: "Under 800 sq ft", sub: "Ultra-compact cabin or retreat" },
                      { id: "800-1000", label: "800–1,000 sq ft", sub: "Efficient 2-bedroom layout" },
                      { id: "1000-1500", label: "1,000–1,500 sq ft", sub: "Mid-size, balanced living space" },
                      { id: "1500-2000", label: "1,500–2,000 sq ft", sub: "Comfortable family home" },
                      { id: "2000+", label: "2,000+ sq ft", sub: "Spacious multi-level lodge" },
                      { id: "not-sure", label: "Not sure yet", sub: "Show me the best options" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedSqft(opt.id as SqftOption)}
                        className={`p-5 rounded-lg border text-left transition-all cursor-pointer ${
                          selectedSqft === opt.id
                            ? "bg-forest text-white border-forest shadow-md"
                            : "bg-white hover:bg-sand-muted border-sand-border text-timber"
                        }`}
                      >
                        <span className="block text-lg font-serif font-bold mb-1">{opt.label}</span>
                        <span className="text-xs opacity-80">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Intended Use */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber mb-3">
                    How will you use the home?
                  </h2>
                  <p className="text-sm text-timber-muted mb-8 leading-relaxed">
                    Intended use impacts closet space, utility room requirements, and living area design.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "full-time", label: "Full-time primary residence", sub: "Requires ample pantry & storage" },
                      { id: "downsizing", label: "Retirement / Downsizing", sub: "Manageable maintenance & accessibility" },
                      { id: "vacation", label: "Vacation home", sub: "Gathering space & guest accommodations" },
                      { id: "rental", label: "Short-term rental", sub: "Durable layout with appealing amenities" },
                      { id: "recreational", label: "Hunting / recreational cabin", sub: "Practical, low-maintenance footprint" },
                      { id: "not-sure", label: "Not sure yet", sub: "Evaluating multiple options" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedUse(opt.id as UseOption)}
                        className={`p-5 rounded-lg border text-left transition-all cursor-pointer ${
                          selectedUse === opt.id
                            ? "bg-forest text-white border-forest shadow-md"
                            : "bg-white hover:bg-sand-muted border-sand-border text-timber"
                        }`}
                      >
                        <span className="block text-lg font-serif font-bold mb-1">{opt.label}</span>
                        <span className="text-xs opacity-80">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Key Priorities */}
              {currentStep === 4 && (
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-timber">
                      What's most important?
                    </h2>
                    <span className="text-xs font-semibold text-cedar uppercase tracking-wider">
                      Select up to 3 ({selectedPriorities.length}/3)
                    </span>
                  </div>
                  <p className="text-sm text-timber-muted mb-8 leading-relaxed">
                    Choose the features that matter most to your build site and daily living.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {priorityOptions.map((priority) => {
                      const isSelected = selectedPriorities.includes(priority);
                      return (
                        <button
                          key={priority}
                          type="button"
                          onClick={() => handlePriorityToggle(priority)}
                          className={`p-4 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? "bg-forest text-white border-forest shadow-xs font-semibold"
                              : "bg-white hover:bg-sand-muted border-sand-border text-timber"
                          }`}
                        >
                          <span className="text-sm">{priority}</span>
                          {isSelected ? (
                            <Check size={18} className="text-cedar-light shrink-0 ml-2" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-sand-border-dark shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-10 mt-10 border-t border-sand-border">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-bold uppercase tracking-wider text-timber-muted hover:text-timber cursor-pointer"
                  >
                    &larr; Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  disabled={!canProceed()}
                  onClick={handleNext}
                  className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wide px-8 py-3.5 rounded-md transition-all cursor-pointer ${
                    canProceed()
                      ? "bg-cedar hover:bg-cedar-dark text-white shadow-xs"
                      : "bg-sand-border text-timber-subtle cursor-not-allowed opacity-60"
                  }`}
                >
                  <span>{currentStep === 4 ? "Show My Matches" : "Continue"}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div>
              {/* Summary Bar */}
              <div className="bg-white border border-sand-border rounded-lg p-6 mb-10 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-cedar block mb-1">
                    Your Tailored Recommendations
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-timber">
                    Matched {recommendations.length} Floor Plans
                  </h2>
                  <p className="text-xs text-timber-subtle mt-1">
                    Based on: {selectedBeds} Bedrooms • {selectedSqft?.replace("-", "–")} • {selectedUse} use
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetTool}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest hover:text-forest-dark border border-sand-border px-4 py-2.5 rounded-md hover:bg-sand-muted transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Start Over</span>
                </button>
              </div>

              {/* Recommendations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {recommendations.map(({ model, matchExplanation }) => (
                  <ModelDiscoveryCard
                    key={model.id}
                    model={model}
                    matchExplanation={matchExplanation}
                  />
                ))}
              </div>

              {/* Informational Disclaimer */}
              <div className="bg-sand-muted border border-sand-border rounded-lg p-6 text-center text-xs text-timber-subtle max-w-2xl mx-auto">
                <ShieldCheck size={20} className="text-forest mx-auto mb-2" />
                <p className="leading-relaxed">
                  Specifications, inclusions, and current pricing should be verified directly with King's Cabins. Clicking any model opens the canonical builder product page where full blueprints and package quotes can be requested.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
