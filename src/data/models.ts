export interface HomeModel {
  id: string;
  name: string;
  seoTitle?: string;
  seoDescription?: string;
  secondaryDescriptor?: string;
  sqft: string;
  dimensions?: string;
  interiorSqft?: string;
  porchSqft?: string;
  firstFloorSqft?: string;
  secondFloorSqft?: string;
  beds: number | "TBD";
  baths: number | "TBD";
  image: string;
  floorPlanImage?: string;
  tagline: string;
  featured?: boolean;
}

export const homeModels: HomeModel[] = [
  {
    id: "first-chronicles",
    name: "First Chronicles",
    seoTitle: "480 Sq Ft 2 Bedroom Log Home Plan | First Chronicles",
    seoDescription: "Explore First Chronicles, a 480 sq ft King's Cabins log home with 2 bedrooms, 1 bath and an efficient 20' × 24' floor plan. View the plan and request pricing.",
    secondaryDescriptor: "480 Sq. Ft. Two-Bedroom Log Home",
    sqft: "480",
    dimensions: "20' × 24'",
    beds: 2,
    baths: 1,
    image: "/FirstChronicles.png",
    floorPlanImage: "/FirstChronicles_plan.png",
    tagline: "Real log home craftsmanship in an exceptionally efficient footprint.",
    featured: false
  },
  {
    id: "second-chronicles",
    name: "Second Chronicles",
    seoTitle: "660 Sq Ft 2 Bedroom Log Home Plan | Second Chronicles",
    seoDescription: "Explore Second Chronicles, a 660 sq ft King's Cabins log home featuring 2 bedrooms, 1 bath and an efficient 22' × 30' layout. View the floor plan and request pricing.",
    secondaryDescriptor: "660 Sq. Ft. Two-Bedroom Log Home",
    sqft: "660",
    dimensions: "22' × 30'",
    beds: 2,
    baths: 1,
    image: "/SecondChronicles.png",
    floorPlanImage: "/SecondChronicles_plan.png",
    tagline: "A thoughtfully sized log home that proves you don't need a massive footprint to enjoy the warmth, character, and craftsmanship of a King's Cabin.",
    featured: true
  },
  {
    id: "second-peter",
    name: "Second Peter",
    seoTitle: "784 Sq Ft 2 Bedroom Log Home with Porch | Second Peter",
    seoDescription: "Explore Second Peter, a 784 sq ft King's Cabins log home with 2 bedrooms, 1 bath and a full-width covered porch. View the floor plan and request pricing.",
    secondaryDescriptor: "784 Sq. Ft. Two-Bedroom Log Home with Covered Porch",
    sqft: "784",
    interiorSqft: "560",
    porchSqft: "224",
    dimensions: "28' × 20'",
    beds: 2,
    baths: 1,
    image: "/SecondPeter.png",
    floorPlanImage: "/SecondPeter_plan.png",
    tagline: "Two bedrooms and a full-width covered porch make Second Peter a remarkably capable home in a smaller footprint.",
    featured: true
  },
  {
    id: "jude",
    name: "Jude",
    seoTitle: "900 Sq Ft Log Home with Loft | Jude | King's Cabins",
    seoDescription: "Explore Jude, a 900 sq ft King's Cabins log home with 2 bedrooms, 1 bath and additional upper-level living space. View the floor plan and request pricing.",
    secondaryDescriptor: "900 Sq. Ft. Two-Level Log Home",
    sqft: "900",
    firstFloorSqft: "600",
    secondFloorSqft: "300",
    dimensions: "30' × 20'",
    beds: 2,
    baths: 1,
    image: "/Jude.png",
    floorPlanImage: "/Jude_plan.png",
    tagline: "A classic two-level log home that makes exceptional use of its footprint while delivering unmistakable cabin character.",
    featured: true
  },
  {
    id: "philemon",
    name: "Philemon",
    sqft: "1,080",
    firstFloorSqft: "864",
    secondFloorSqft: "216",
    dimensions: "24' × 36'",
    beds: "TBD",
    baths: "TBD",
    image: "/Mark.png",
    tagline: "A perfectly balanced layout offering expanded living space while maintaining attainable luxury.",
    featured: false
  },
  // Keep original larger models for reference
  {
    id: "the-matthew",
    name: "The Matthew",
    sqft: "1,636",
    beds: 3,
    baths: 2,
    image: "/Matthew.png",
    tagline: "A testament to faith and craftsmanship, designed to be a sanctuary where life increases and legacy takes root.",
    featured: false
  },
  {
    id: "the-mark",
    name: "The Mark",
    sqft: "1,888",
    beds: 3,
    baths: 2,
    image: "/Mark.png",
    tagline: "An invitation to the outdoors. Featuring an expansive screened porch and a signature stone hearth for year-round mountain living.",
    featured: false
  },
  {
    id: "the-luke",
    name: "The Luke",
    sqft: "1,926",
    beds: 4,
    baths: 3,
    image: "/Luke.png",
    tagline: "A sanctuary of light and praise, where grand windows frame nature's majesty in every season.",
    featured: false
  }
];
