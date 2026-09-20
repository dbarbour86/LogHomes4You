// LogHomes4You - Verified Model Dataset
// All models included here have verified canonical URLs from King's Cabins (inventory.md).
// Unverified models without explicit provider URLs are strictly excluded.

export interface ProviderInfo {
  id: string;
  name: string;
  websiteUrl: string;
  profilePath: string;
}

export const KINGS_CABINS_PROVIDER: ProviderInfo = {
  id: "kings-cabins",
  name: "King's Cabins",
  websiteUrl: "https://kingscabins.com",
  profilePath: "/builders/kings-cabins"
};

export interface DiscoveryModel {
  id: string;
  name: string;
  provider: ProviderInfo;
  canonicalUrl: string;
  sqft: string;
  squareFeet: number;
  dimensions?: string;
  width?: number;
  depth?: number;
  beds?: number;
  baths?: number;
  stories?: number;
  hasLoft?: boolean;
  category: string;
  image: string;
  floorPlanImage?: string;
  tagline: string;
  fitSummary: string;
  keyFeatures: string[];
  idealFor: string[];
  featured?: boolean;
  // Optional fields for legacy component compatibility
  seoTitle?: string;
  seoDescription?: string;
  secondaryDescriptor?: string;
  interiorSqft?: string;
  porchSqft?: string;
  firstFloorSqft?: string;
  secondFloorSqft?: string;
}

export const verifiedModels: DiscoveryModel[] = [
  {
    "id": "the-little-king",
    "name": "The Little King",
    "squareFeet": 960,
    "sqft": "960",
    "dimensions": "40' × 24'",
    "width": 40,
    "depth": 24,
    "beds": 2,
    "baths": 1,
    "stories": 2,
    "category": "log-home",
    "image": "/LittleKing.png",
    "floorPlanImage": "/LittleKing_plan.png",
    "tagline": "An incredible value for a genuine log home. The Little King offers a highly efficient 2-bedroom layout with an additional loft space, all at an unbeatable special price.",
    "featured": true,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-little-king",
    "hasLoft": true,
    "fitSummary": "A practical 960 sq ft 2-bedroom plan balancing an easy-to-build footprint with comfortable living space and dedicated loft area.",
    "keyFeatures": [
      "Upper Loft",
      "40' × 24'"
    ],
    "idealFor": [
      "vacation",
      "recreational",
      "downsizing"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "first-chronicles",
    "name": "First Chronicles",
    "squareFeet": 480,
    "sqft": "480",
    "dimensions": "20' × 24'",
    "width": 24,
    "depth": 20,
    "beds": 2,
    "baths": 1,
    "stories": 1,
    "category": "log-home",
    "image": "/FirstChronicles.png",
    "floorPlanImage": "/FirstChronicles_plan.png",
    "tagline": "Real log home craftsmanship in an exceptionally efficient footprint.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/first-chronicles",
    "hasLoft": false,
    "fitSummary": "An ultra-efficient 480 sq ft 2-bedroom single-level floor plan designed for a compact footprint, recreational cabin, or minimal-maintenance retreat.",
    "keyFeatures": [
      "Compact Footprint",
      "Single-Level Living",
      "20' × 24'"
    ],
    "idealFor": [
      "vacation",
      "recreational",
      "downsizing"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "acts",
    "name": "Acts",
    "squareFeet": 528,
    "sqft": "528",
    "dimensions": "24' × 22'",
    "width": 24,
    "depth": 22,
    "beds": 2,
    "baths": 1,
    "stories": 1,
    "category": "log-home",
    "image": "/Acts.png",
    "floorPlanImage": "/Acts_plan.png",
    "tagline": "A masterful use of space, the Acts model comfortably fits two bedrooms and full living amenities into a streamlined 528 square foot footprint.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/acts",
    "hasLoft": false,
    "fitSummary": "An ultra-efficient 528 sq ft 2-bedroom single-level floor plan designed for a compact footprint, recreational cabin, or minimal-maintenance retreat.",
    "keyFeatures": [
      "Compact Footprint",
      "Single-Level Living",
      "24' × 22'"
    ],
    "idealFor": [
      "vacation",
      "recreational",
      "downsizing"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "little-jude",
    "name": "Little Jude",
    "squareFeet": 550,
    "sqft": "550",
    "dimensions": "20' × 18'",
    "width": 20,
    "depth": 18,
    "beds": 1,
    "baths": 1,
    "stories": 2,
    "category": "log-cabin",
    "image": "/LittleJude.png",
    "floorPlanImage": "/LittleJude_plan.png",
    "tagline": "An adorable and highly efficient 550 square foot cabin featuring a main-floor bedroom, a spacious sleeping loft, and a covered front porch.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/little-jude",
    "hasLoft": true,
    "fitSummary": "An ultra-efficient 550 sq ft 1-bedroom with an upper loft floor plan designed for a compact footprint, recreational cabin, or minimal-maintenance retreat.",
    "keyFeatures": [
      "Compact Footprint",
      "Upper Loft",
      "20' × 18'"
    ],
    "idealFor": [
      "vacation",
      "recreational",
      "downsizing"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "second-chronicles",
    "name": "Second Chronicles",
    "squareFeet": 660,
    "sqft": "660",
    "dimensions": "22' × 30'",
    "width": 30,
    "depth": 22,
    "beds": 2,
    "baths": 1,
    "stories": 1,
    "category": "log-home",
    "image": "/SecondChronicles.png",
    "floorPlanImage": "/SecondChronicles_plan.png",
    "tagline": "A thoughtfully sized log home that proves you don't need a massive footprint to enjoy the warmth, character, and craftsmanship of a King's Cabin.",
    "featured": true,
    "canonicalUrl": "https://kingscabins.com/floor-plans/second-chronicles",
    "hasLoft": false,
    "fitSummary": "An ultra-efficient 660 sq ft 2-bedroom single-level floor plan designed for a compact footprint, recreational cabin, or minimal-maintenance retreat.",
    "keyFeatures": [
      "Compact Footprint",
      "Single-Level Living",
      "22' × 30'"
    ],
    "idealFor": [
      "vacation",
      "recreational",
      "downsizing"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "second-peter",
    "name": "Second Peter",
    "squareFeet": 784,
    "sqft": "784",
    "dimensions": "28' × 20'",
    "width": 28,
    "depth": 20,
    "beds": 2,
    "baths": 1,
    "stories": 1,
    "category": "log-home",
    "image": "/SecondPeter.png",
    "floorPlanImage": "/SecondPeter_plan.png",
    "tagline": "Two bedrooms and a full-width covered porch make Second Peter a remarkably capable home in a smaller footprint.",
    "featured": true,
    "canonicalUrl": "https://kingscabins.com/floor-plans/second-peter",
    "hasLoft": false,
    "fitSummary": "An ultra-efficient 784 sq ft 2-bedroom single-level floor plan designed for a compact footprint, recreational cabin, or minimal-maintenance retreat.",
    "keyFeatures": [
      "Compact Footprint",
      "Single-Level Living",
      "28' × 20'"
    ],
    "idealFor": [
      "vacation",
      "recreational",
      "downsizing"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "brittany-sue",
    "name": "Brittany Sue",
    "squareFeet": 832,
    "sqft": "832",
    "dimensions": "32' × 26'",
    "width": 32,
    "depth": 26,
    "beds": 2,
    "baths": 1,
    "stories": 1,
    "category": "log-home",
    "image": "/BrittanySue.png",
    "floorPlanImage": "/BrittanySue_plan.png",
    "tagline": "A perfectly proportioned single-level home. The Brittany Sue combines an open-concept living area with a massive full-width front porch to maximize both indoor and outdoor living.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/brittany-sue",
    "hasLoft": false,
    "fitSummary": "A practical 832 sq ft 2-bedroom plan balancing an easy-to-build footprint with comfortable living space.",
    "keyFeatures": [
      "Single-Level Living",
      "32' × 26'"
    ],
    "idealFor": [
      "vacation",
      "recreational",
      "downsizing"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "jude",
    "name": "Jude",
    "squareFeet": 900,
    "sqft": "900",
    "dimensions": "30' × 20'",
    "width": 30,
    "depth": 20,
    "beds": 2,
    "baths": 1,
    "stories": 2,
    "category": "log-home",
    "image": "/Jude.png",
    "floorPlanImage": "/Jude_plan.png",
    "tagline": "A classic two-level log home that makes exceptional use of its footprint while delivering unmistakable cabin character.",
    "featured": true,
    "canonicalUrl": "https://kingscabins.com/floor-plans/jude",
    "hasLoft": true,
    "fitSummary": "A practical 900 sq ft 2-bedroom plan balancing an easy-to-build footprint with comfortable living space and dedicated loft area.",
    "keyFeatures": [
      "Upper Loft",
      "30' × 20'"
    ],
    "idealFor": [
      "vacation",
      "recreational",
      "downsizing"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "philemon",
    "name": "Philemon",
    "squareFeet": 1080,
    "sqft": "1,080",
    "dimensions": "24' × 36'",
    "width": 36,
    "depth": 24,
    "stories": 2,
    "category": "log-home",
    "image": "/Mark.png",
    "tagline": "A perfectly balanced layout offering expanded living space while maintaining attainable luxury.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/philemon",
    "hasLoft": true,
    "fitSummary": "A versatile 1080 sq ft layout design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Upper Loft",
      "24' × 36'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "first-peter",
    "name": "First Peter",
    "squareFeet": 1064,
    "sqft": "1,064",
    "dimensions": "38' × 28'",
    "width": 38,
    "depth": 28,
    "beds": 2,
    "baths": 1,
    "stories": 1,
    "category": "log-home",
    "image": "/FirstPeter.png",
    "floorPlanImage": "/FirstPeter_plan.png",
    "tagline": "A remarkably efficient 1,064 square foot layout that maximizes outdoor living with deep covered porches on both the front and back.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/first-peter",
    "hasLoft": false,
    "fitSummary": "A versatile 1064 sq ft 2-bedroom (1 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Single-Level Living",
      "38' × 28'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "first-samuel",
    "name": "First Samuel",
    "squareFeet": 1196,
    "sqft": "1,196",
    "dimensions": "26' × 30'",
    "width": 26,
    "depth": 30,
    "beds": 2,
    "baths": 1,
    "stories": 2,
    "category": "log-home",
    "image": "/FirstSamuel.png",
    "floorPlanImage": "/FirstSamuel_plan.png",
    "tagline": "A classic and efficient 1,196 square foot cabin featuring a soaring open-to-below great room and a flexible upstairs loft.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/first-samuel",
    "hasLoft": true,
    "fitSummary": "A versatile 1196 sq ft 2-bedroom (1 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Upper Loft",
      "26' × 30'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "first-thessalonians",
    "name": "First Thessalonians",
    "squareFeet": 1200,
    "sqft": "1,200",
    "dimensions": "30' × 20'",
    "width": 30,
    "depth": 20,
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/FirstThessalonians.png",
    "floorPlanImage": "/FirstThessalonians_plan.png",
    "tagline": "A classic two-story log home that efficiently packages three bedrooms and two full baths into a highly functional 1,200 square foot layout.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/first-thessalonians",
    "hasLoft": true,
    "fitSummary": "A versatile 1200 sq ft 3-bedroom (2 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "30' × 20'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "constance",
    "name": "Constance",
    "squareFeet": 1210,
    "sqft": "1,210",
    "dimensions": "34' × 32'",
    "width": 34,
    "depth": 32,
    "beds": 2,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/Constance.png",
    "floorPlanImage": "/Constance_plan.png",
    "tagline": "A clever 1,210 square foot design with an offset 34' x 32' footprint, dual main-floor bedrooms, and a bright, open loft.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/constance",
    "hasLoft": true,
    "fitSummary": "A versatile 1210 sq ft 2-bedroom (2 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Upper Loft",
      "Multiple Bathrooms",
      "34' × 32'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "first-john",
    "name": "First John",
    "squareFeet": 1300,
    "sqft": "1,300",
    "dimensions": "52' × 28'",
    "width": 52,
    "depth": 28,
    "beds": 2,
    "baths": 3,
    "stories": 1,
    "category": "log-home",
    "image": "/FirstJohn.png",
    "floorPlanImage": "/FirstJohn_plan.png",
    "tagline": "A stunning single-story design featuring a dramatic bay-window living area, cathedral ceilings, and an incredibly luxurious master bath.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/first-john",
    "hasLoft": false,
    "fitSummary": "A versatile 1300 sq ft 2-bedroom (3 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Single-Level Living",
      "Multiple Bathrooms",
      "52' × 28'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "titus",
    "name": "Titus",
    "squareFeet": 1326,
    "sqft": "1,326",
    "dimensions": "34' × 26'",
    "width": 34,
    "depth": 26,
    "beds": 4,
    "baths": 1,
    "stories": 2,
    "category": "log-home",
    "image": "/Titus.png",
    "floorPlanImage": "/Titus_plan.png",
    "tagline": "An impressive design that maximizes volume and capacity, offering four bedrooms and a dramatic open-to-below living space in just 1,326 square feet.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/titus",
    "hasLoft": true,
    "fitSummary": "A versatile 1326 sq ft 4-bedroom (1 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "34' × 26'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "daniel",
    "name": "Daniel",
    "squareFeet": 1356,
    "sqft": "1,356",
    "dimensions": "40' × 26'",
    "width": 40,
    "depth": 26,
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/Daniel.png",
    "floorPlanImage": "/Daniel_plan.png",
    "tagline": "A beautifully arranged two-story home that perfectly balances private bedroom suites with expansive, open gathering spaces.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/daniel",
    "hasLoft": false,
    "fitSummary": "A versatile 1356 sq ft 3-bedroom (2 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "40' × 26'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-believer",
    "name": "The Believer",
    "squareFeet": 1392,
    "sqft": "1,392",
    "dimensions": "48' × 29'",
    "width": 48,
    "depth": 29,
    "beds": 3,
    "baths": 2,
    "stories": 1,
    "category": "log-home",
    "image": "/TheBeliever.png",
    "floorPlanImage": "/TheBeliever_plan.png",
    "tagline": "A straightforward 1,392 square foot single-story layout surrounded by massive 10-foot deep wrap-around porches.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-believer",
    "hasLoft": false,
    "fitSummary": "A versatile 1392 sq ft 3-bedroom (2 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Single-Level Living",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "48' × 29'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "derek",
    "name": "Derek",
    "squareFeet": 1400,
    "sqft": "1,400",
    "dimensions": "50' × 28'",
    "width": 50,
    "depth": 28,
    "beds": 3,
    "baths": 2,
    "stories": 1,
    "category": "log-home",
    "image": "/Derek.png",
    "floorPlanImage": "/Derek_plan.png",
    "tagline": "A beautifully proportioned single-story layout highlighted by a spectacular cathedral ceiling spanning the central living and dining areas.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/derek",
    "hasLoft": false,
    "fitSummary": "A versatile 1400 sq ft 3-bedroom (2 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Single-Level Living",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "50' × 28'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "second-thessalonians",
    "name": "Second Thessalonians",
    "squareFeet": 1440,
    "sqft": "1,440",
    "dimensions": "30' × 24'",
    "width": 30,
    "depth": 24,
    "beds": 3,
    "baths": 1,
    "stories": 2,
    "category": "log-home",
    "image": "/SecondThessalonians.png",
    "floorPlanImage": "/SecondThessalonians_plan.png",
    "tagline": "A generous two-story layout featuring expansive main-floor living and dining areas, with all three bedrooms peacefully tucked away on the upper level.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/second-thessalonians",
    "hasLoft": true,
    "fitSummary": "A versatile 1440 sq ft 3-bedroom (1 bath) design suited for small families, downsizing homeowners, or spacious second homes.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "30' × 24'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "romans",
    "name": "Romans",
    "squareFeet": 1512,
    "sqft": "1,512",
    "dimensions": "36' × 28'",
    "width": 36,
    "depth": 28,
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/Romans.png",
    "floorPlanImage": "/Romans_plan.png",
    "tagline": "A stunning two-story design featuring a dramatic open-to-below living area, expansive covered porches, and a spacious 1,512 square foot layout.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/romans",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1512 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "36' × 28'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "queen-esther",
    "name": "Queen Esther",
    "squareFeet": 1536,
    "sqft": "1,536",
    "dimensions": "32' × 24'",
    "width": 32,
    "depth": 24,
    "beds": 2,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/QueenEsther.png",
    "floorPlanImage": "/QueenEsther_plan.png",
    "tagline": "A comfortable two-story home featuring a 32' wide footprint, matching front and rear porches, and a spacious second-floor master suite.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/queen-esther",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1536 sq ft 2-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Multiple Bathrooms",
      "32' × 24'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "proverbs",
    "name": "Proverbs",
    "squareFeet": 1590,
    "sqft": "1,590",
    "dimensions": "28' × 35'",
    "width": 28,
    "depth": 35,
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/Proverbs.png",
    "floorPlanImage": "/Proverbs_plan.png",
    "tagline": "A beautiful 1,590 square foot design featuring a massive open-to-below living area, a main-floor master suite, and two upstairs bedrooms.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/proverbs",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1590 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "28' × 35'"
    ],
    "idealFor": [
      "full-time",
      "downsizing",
      "vacation"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-glory",
    "name": "The Glory",
    "squareFeet": 1632,
    "sqft": "1,632",
    "dimensions": "34' × 24'",
    "width": 34,
    "depth": 24,
    "beds": 2,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/TheGlory.png",
    "floorPlanImage": "/TheGlory_plan.png",
    "tagline": "A compact 1,632 square foot two-story design maximizing its 34' × 24' footprint with deep 10-foot porches on both the front and back.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-glory",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1632 sq ft 2-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "Multiple Bathrooms",
      "34' × 24'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-matthew",
    "name": "The Matthew",
    "squareFeet": 1636,
    "sqft": "1,636",
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/Matthew.png",
    "tagline": "A testament to faith and craftsmanship, designed to be a sanctuary where life increases and legacy takes root.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-matthew",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1636 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "gentleness",
    "name": "Gentleness",
    "squareFeet": 1814,
    "sqft": "1,814",
    "dimensions": "44' × 24'",
    "width": 44,
    "depth": 24,
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/Gentleness.png",
    "floorPlanImage": "/Gentleness_plan.png",
    "tagline": "A beautifully balanced 1.5-story home offering a private second-floor master suite, an open loft, and wrap-around covered porches.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/gentleness",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1814 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "44' × 24'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "steven",
    "name": "Steven",
    "squareFeet": 1728,
    "sqft": "1,728",
    "dimensions": "36' × 24'",
    "width": 36,
    "depth": 24,
    "stories": 2,
    "category": "log-home",
    "image": "/Steven.png",
    "floorPlanImage": "/Steven_plan.png",
    "tagline": "A substantial two-story design providing wide-open main floor living spaces and ample room to grow on the upper level.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/steven",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1728 sq ft layout layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "36' × 24'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "kristy",
    "name": "Kristy",
    "squareFeet": 1728,
    "sqft": "1,728",
    "dimensions": "58' × 32'",
    "width": 58,
    "depth": 32,
    "beds": 4,
    "baths": 2,
    "stories": 1,
    "category": "log-home",
    "image": "/Kristy.png",
    "floorPlanImage": "/Kristy_plan.png",
    "tagline": "A sprawling single-story ranch boasting 1,728 square feet, four bedrooms, and multiple dedicated gathering spaces.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/kristy",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1728 sq ft 4-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Single-Level Living",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "58' × 32'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-prosperous",
    "name": "The Prosperous",
    "squareFeet": 1750,
    "sqft": "1,750",
    "dimensions": "70' × 40'",
    "width": 70,
    "depth": 40,
    "beds": 3,
    "baths": 2,
    "stories": 1,
    "category": "log-home",
    "image": "/TheProsperous.png",
    "floorPlanImage": "/The Prosperous_plan.png",
    "tagline": "A wide 70-foot single-story footprint offering an attached two-car garage, three bedrooms, and a massive central great room.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-prosperous",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1750 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Single-Level Living",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "70' × 40'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "danny-boy",
    "name": "Danny Boy",
    "squareFeet": 1760,
    "sqft": "1,760",
    "dimensions": "42' × 24'",
    "width": 42,
    "depth": 24,
    "beds": 3,
    "baths": 1.5,
    "stories": 2,
    "category": "log-home",
    "image": "/DannyBoy.png",
    "floorPlanImage": "/DannyBoy_plan.png",
    "tagline": "A unique T-shaped two-story design providing 1,760 square feet of comfortable living space with a sprawling main-floor layout.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/danny-boy",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1760 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "42' × 24'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "ephesians",
    "name": "Ephesians",
    "squareFeet": 1792,
    "sqft": "1,792",
    "dimensions": "30' × 32'",
    "width": 30,
    "depth": 32,
    "beds": 4,
    "baths": 1.5,
    "stories": 2,
    "category": "log-home",
    "image": "/Ephesians.png",
    "floorPlanImage": "/Ephesians_plan.png",
    "tagline": "A robust two-story design featuring four bedrooms and expansive gathering areas within a highly efficient 1,792 square foot footprint.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/ephesians",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1792 sq ft 4-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "30' × 32'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "second-samuel",
    "name": "Second Samuel",
    "squareFeet": 1848,
    "sqft": "1,848",
    "dimensions": "28' × 44'",
    "width": 28,
    "depth": 44,
    "beds": 3,
    "baths": 1,
    "stories": 2,
    "category": "log-home",
    "image": "/SecondSamuel.png",
    "floorPlanImage": "/SecondSamuel_plan.png",
    "tagline": "A soaring 1,848 square foot layout featuring an open-to-below great room and a versatile second-floor loft and bedroom.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/second-samuel",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1848 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "28' × 44'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-blessed",
    "name": "The Blessed",
    "squareFeet": 1876,
    "sqft": "1,876",
    "dimensions": "56' × 38'",
    "width": 56,
    "depth": 38,
    "beds": 3,
    "baths": 2,
    "stories": 1,
    "category": "log-home",
    "image": "/TheBlessed.png",
    "floorPlanImage": "/TheBlessed_plan.png",
    "tagline": "A sprawling single-story sanctuary offering a split-bedroom layout, massive open gathering spaces, and deep covered porches.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-blessed",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1876 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Single-Level Living",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "56' × 38'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-mark",
    "name": "The Mark",
    "squareFeet": 1888,
    "sqft": "1,888",
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/Mark.png",
    "tagline": "An invitation to the outdoors. Featuring an expansive screened porch and a signature stone hearth for year-round mountain living.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-mark",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1888 sq ft 3-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-saint",
    "name": "The Saint",
    "squareFeet": 1900,
    "sqft": "1,900",
    "dimensions": "38' × 30'",
    "width": 38,
    "depth": 30,
    "beds": 2,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/TheSaint.png",
    "floorPlanImage": "/TheSaint_plan.png",
    "tagline": "A beautifully arranged 1.5-story layout with expansive wrap-around porches, a large loft, and a private second-floor master suite.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-saint",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1900 sq ft 2-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "Multiple Bathrooms",
      "38' × 30'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-wonderful",
    "name": "The Wonderful",
    "squareFeet": 1920,
    "sqft": "1,920",
    "dimensions": "40' × 32'",
    "width": 40,
    "depth": 32,
    "beds": 2,
    "baths": 1,
    "stories": 2,
    "category": "log-home",
    "image": "/TheWonderful.png",
    "floorPlanImage": "/TheWonderful_plan.png",
    "tagline": "A spacious 1,920 square foot layout providing two main-floor bedrooms and a massive 40-foot wide second-story loft.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-wonderful",
    "hasLoft": true,
    "fitSummary": "A well-proportioned 1920 sq ft 2-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Upper Loft",
      "40' × 32'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "saint-james",
    "name": "Saint James",
    "squareFeet": 1920,
    "sqft": "1,920",
    "dimensions": "32' × 36' (L-Shape)",
    "width": 32,
    "depth": 36,
    "beds": 2,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/SaintJames.png",
    "floorPlanImage": "/SaintJames_plan.png",
    "tagline": "An elegant L-shaped 1,920 square foot home offering a huge second-floor family room and two spacious upstairs bedrooms.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/saint-james",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1920 sq ft 2-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "Multiple Bathrooms",
      "32' × 36' (L-Shape)"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-luke",
    "name": "The Luke",
    "squareFeet": 1926,
    "sqft": "1,926",
    "beds": 4,
    "baths": 3,
    "stories": 2,
    "category": "log-home",
    "image": "/Luke.png",
    "tagline": "A sanctuary of light and praise, where grand windows frame nature's majesty in every season.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-luke",
    "hasLoft": false,
    "fitSummary": "A well-proportioned 1926 sq ft 4-bedroom layout offering open living areas, dedicated private spaces, and room for family or entertaining.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "third-john",
    "name": "Third John",
    "squareFeet": 2030,
    "sqft": "2,030",
    "dimensions": "52' × 28'",
    "width": 52,
    "depth": 28,
    "beds": 3,
    "baths": 1.5,
    "stories": 2,
    "category": "log-home",
    "image": "/ThirdJohn.png",
    "floorPlanImage": "/ThirdJohn_plan.png",
    "tagline": "A spacious 2,030 square foot home featuring three main-floor bedrooms, a large country kitchen, and a versatile 414 square foot loft.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/third-john",
    "hasLoft": true,
    "fitSummary": "A generous 2030 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "52' × 28'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "galatians",
    "name": "Galatians",
    "squareFeet": 2100,
    "sqft": "2,100",
    "dimensions": "62' × 42'",
    "width": 62,
    "depth": 42,
    "beds": 3,
    "baths": 2,
    "stories": 1,
    "category": "log-home",
    "image": "/Galatians.png",
    "floorPlanImage": "/Galatians_plan.png",
    "tagline": "A sprawling L-shaped 2,100 square foot ranch with a grand 25-foot living room and a massive wrap-around deck.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/galatians",
    "hasLoft": false,
    "fitSummary": "A generous 2100 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Single-Level Living",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "62' × 42'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "his-peace",
    "name": "His Peace",
    "squareFeet": 2108,
    "sqft": "2,108",
    "dimensions": "Approx 80' × 28' (with Garage)",
    "width": 80,
    "depth": 28,
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/HisPeace.png",
    "floorPlanImage": "/HisPeace_plan.png",
    "tagline": "A spacious 2,108 square foot home featuring a massive attached garage, matching front and rear porches, and three main-floor bedrooms.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/his-peace",
    "hasLoft": true,
    "fitSummary": "A generous 2108 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "Approx 80' × 28' (with Garage)"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "second-corinthians",
    "name": "Second Corinthians",
    "squareFeet": 2124,
    "sqft": "2,124",
    "dimensions": "90' × 28' (with Garage)",
    "width": 90,
    "depth": 28,
    "beds": 3,
    "baths": 2.5,
    "stories": 2,
    "category": "log-home",
    "image": "/SecondCorinthians.png",
    "floorPlanImage": "/SecondCorinthians_plan.png",
    "tagline": "A rambling 2,124 square foot ranch-style design featuring an attached garage, a massive 27-foot living room, and a pair of generous dormer bedrooms.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/second-corinthians",
    "hasLoft": false,
    "fitSummary": "A generous 2124 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "90' × 28' (with Garage)"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "philippians",
    "name": "Philippians",
    "squareFeet": 2130,
    "sqft": "2,130",
    "dimensions": "Approx 41' × 26'",
    "width": 41,
    "depth": 26,
    "beds": 3,
    "baths": 2.5,
    "stories": 2,
    "category": "log-home",
    "image": "/Philippians.png",
    "floorPlanImage": "/Philippians_plan.png",
    "tagline": "A classic two-story design providing over 2,100 square feet, a massive great room, and three generous upstairs bedrooms.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/philippians",
    "hasLoft": false,
    "fitSummary": "A generous 2130 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "Approx 41' × 26'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-conqueror",
    "name": "The Conqueror",
    "squareFeet": 2132,
    "sqft": "2,132",
    "dimensions": "34' × 46'",
    "width": 34,
    "depth": 46,
    "beds": 3,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/TheConqueror.png",
    "floorPlanImage": "/TheConqueror_plan.png",
    "tagline": "A striking two-story prow-front design featuring an expansive wrap-around deck and over 2,100 square feet of living space.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-conqueror",
    "hasLoft": true,
    "fitSummary": "A generous 2132 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "34' × 46'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "first-timothy",
    "name": "First Timothy",
    "squareFeet": 2136,
    "sqft": "2,136",
    "dimensions": "72' × 28' (with Garage)",
    "width": 72,
    "depth": 28,
    "beds": 3,
    "baths": 3,
    "stories": 2,
    "category": "log-home",
    "image": "/FirstTimothy.png",
    "floorPlanImage": "/FirstTimothy_plan.png",
    "tagline": "A beautiful 2,136 square foot home featuring an attached garage via a breezeway mudroom, plus a main-floor master suite.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/first-timothy",
    "hasLoft": false,
    "fitSummary": "A generous 2136 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "72' × 28' (with Garage)"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "second-timothy",
    "name": "Second Timothy",
    "squareFeet": 2149,
    "sqft": "2,149",
    "dimensions": "47' × 34'",
    "width": 47,
    "depth": 34,
    "beds": 4,
    "baths": 2.5,
    "stories": 2,
    "category": "log-home",
    "image": "/SecondTimothy.png",
    "floorPlanImage": "/SecondTimothy_plan.png",
    "tagline": "A grand 2,149 square foot design centered around a massive cathedral-ceiling living room, featuring a sprawling first-floor master suite.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/second-timothy",
    "hasLoft": true,
    "fitSummary": "A generous 2149 sq ft 4-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "47' × 34'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "first-corinthians",
    "name": "First Corinthians",
    "squareFeet": 2240,
    "sqft": "2,240",
    "dimensions": "40' × 28'",
    "width": 40,
    "depth": 28,
    "beds": 4,
    "baths": 3,
    "stories": 2,
    "category": "log-home",
    "image": "/FirstCorinthians.png",
    "floorPlanImage": "/FirstCorinthians_plan.png",
    "tagline": "A stately 2,240 square foot home offering highly customizable first-floor living spaces and expansive second-story bedrooms.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/first-corinthians",
    "hasLoft": false,
    "fitSummary": "A generous 2240 sq ft 4-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "40' × 28'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "apostle-paul",
    "name": "Apostle Paul",
    "squareFeet": 2280,
    "sqft": "2,280",
    "dimensions": "38' × 30'",
    "width": 38,
    "depth": 30,
    "beds": 3,
    "baths": 1.5,
    "stories": 2,
    "category": "log-home",
    "image": "/ApostlePaul.png",
    "floorPlanImage": "/ApostlePaul_plan.png",
    "tagline": "A solid 2,280 square foot two-story design featuring a massive 50-foot front porch and three large bedrooms all situated on the second floor.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/apostle-paul",
    "hasLoft": false,
    "fitSummary": "A generous 2280 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "3+ Bedrooms",
      "38' × 30'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "charity",
    "name": "Charity",
    "squareFeet": 2337,
    "sqft": "2,337",
    "dimensions": "48' × 28'",
    "width": 48,
    "depth": 28,
    "beds": 3,
    "baths": 2.5,
    "stories": 2,
    "category": "log-home",
    "image": "/Charity.png",
    "floorPlanImage": "/Charity_plan.png",
    "tagline": "A generous 2,337 square foot traditional two-story featuring four distinct gathering spaces on the main level and all bedrooms tucked privately upstairs.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/charity",
    "hasLoft": true,
    "fitSummary": "A generous 2337 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "48' × 28'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "second-kings",
    "name": "Second Kings",
    "squareFeet": 2464,
    "sqft": "2,464",
    "dimensions": "38' × 28'",
    "width": 38,
    "depth": 28,
    "beds": 4,
    "baths": 2,
    "stories": 2,
    "category": "log-home",
    "image": "/SecondKings.png",
    "floorPlanImage": "/SecondKings_plan.png",
    "tagline": "A massive 2,464 square foot design featuring a spectacular 24' × 28' second-floor bedroom and loft space open to the living room below.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/second-kings",
    "hasLoft": true,
    "fitSummary": "A generous 2464 sq ft 4-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "38' × 28'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "the-faithful",
    "name": "The Faithful",
    "squareFeet": 2500,
    "sqft": "2,500+",
    "dimensions": "Approx 90' × 40'",
    "width": 90,
    "depth": 40,
    "beds": 3,
    "baths": 2.5,
    "stories": 2,
    "category": "log-home",
    "image": "/TheFaithful.png",
    "floorPlanImage": "/TheFaithful_plan.png",
    "tagline": "A massive, sprawling ranch-style layout with an attached garage, wide open center living area, and a versatile second-floor loft and bonus room.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/the-faithful",
    "hasLoft": true,
    "fitSummary": "A generous 2500 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Upper Loft",
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "Approx 90' × 40'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "colossian",
    "name": "Colossian",
    "squareFeet": 2548,
    "sqft": "2,548",
    "dimensions": "64' × 30'",
    "width": 64,
    "depth": 30,
    "beds": 3,
    "baths": 1.5,
    "stories": 2,
    "category": "log-home",
    "image": "/Colossian.png",
    "floorPlanImage": "/Colossian_plan.png",
    "tagline": "A unique 2,548 square foot layout featuring an attached double garage with a massive 520 sq ft bonus family room built right above it.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/colossian",
    "hasLoft": false,
    "fitSummary": "A generous 2548 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "3+ Bedrooms",
      "64' × 30'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "eagles-nest",
    "name": "Eagle's Nest",
    "squareFeet": 2652,
    "sqft": "2,652",
    "dimensions": "See Blueprint",
    "beds": 2,
    "baths": 2.5,
    "stories": 2,
    "category": "log-home",
    "image": "/EaglesNest.png",
    "floorPlanImage": "/EaglesNest_plan.png",
    "tagline": "A massive 2,652 square foot, two-bedroom retreat featuring an expansive loft and a unique 108 sq ft 'Love Nest' hideaway.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/eagles-nest",
    "hasLoft": true,
    "fitSummary": "A generous 2652 sq ft 2-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "Upper Loft",
      "Multiple Bathrooms",
      "See Blueprint"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  },
  {
    "id": "second-john",
    "name": "Second John",
    "squareFeet": 2704,
    "sqft": "2,704",
    "dimensions": "56' × 52'",
    "width": 56,
    "depth": 52,
    "beds": 3,
    "baths": 3,
    "stories": 2,
    "category": "log-home",
    "image": "/SecondJohn.png",
    "floorPlanImage": "/SecondJohn_plan.png",
    "tagline": "A stunning 2,704 square foot cross-shaped home with dual main-floor bedroom suites and an incredible open-to-below second story.",
    "featured": false,
    "canonicalUrl": "https://kingscabins.com/floor-plans/second-john",
    "hasLoft": false,
    "fitSummary": "A generous 2704 sq ft 3-bedroom floor plan offering expansive great room living, multiple bedroom suites, and flexible long-term lifestyle space.",
    "keyFeatures": [
      "3+ Bedrooms",
      "Multiple Bathrooms",
      "56' × 52'"
    ],
    "idealFor": [
      "full-time",
      "family",
      "entertaining"
    ],
    "provider": {
      "id": "kings-cabins",
      "name": "King's Cabins",
      "websiteUrl": "https://kingscabins.com",
      "profilePath": "/builders/kings-cabins"
    }
  }
];

// Default export alias for backward compatibility in components
export const homeModels = verifiedModels;

// Export list of excluded model IDs for auditing and reporting
export const excludedModelIds: string[] = [
  "saint-john",
  "hebrews",
  "revelation",
  "petra",
  "first-kings",
  "the-truthful",
  "sandy-t"
];
