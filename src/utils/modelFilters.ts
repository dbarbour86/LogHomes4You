import { HomeModel } from "../data/models";

export interface FilterCriteria {
  bedrooms?: number;
  bathrooms?: number;
  stories?: number;
  minSqFt?: number;
  maxSqFt?: number;
  category?: string;
  query?: string;
}

export function filterModels(models: HomeModel[], criteria: FilterCriteria): HomeModel[] {
  return models.filter((model) => {
    if (criteria.bedrooms !== undefined && model.beds !== criteria.bedrooms) return false;
    if (criteria.bathrooms !== undefined && model.baths !== criteria.bathrooms) return false;
    if (criteria.stories !== undefined && model.stories !== criteria.stories) return false;
    if (criteria.minSqFt !== undefined && model.squareFeet < criteria.minSqFt) return false;
    if (criteria.maxSqFt !== undefined && model.squareFeet > criteria.maxSqFt) return false;
    if (criteria.category !== undefined && model.category !== criteria.category) return false;
    if (criteria.query && !model.name.toLowerCase().includes(criteria.query.toLowerCase())) return false;
    return true;
  });
}

export type SortType = "featured" | "sqft-asc" | "sqft-desc";

export function sortModels(models: HomeModel[], sortType: SortType): HomeModel[] {
  const sorted = [...models];
  
  sorted.sort((a, b) => {
    switch (sortType) {
      case "sqft-asc":
        return a.squareFeet - b.squareFeet;
      case "sqft-desc":
        return b.squareFeet - a.squareFeet;
      case "featured":
      default:
        // Featured models come first. If both are featured (or neither), sort by sqft ascending as a stable fallback.
        if (a.featured === b.featured) {
          return a.squareFeet - b.squareFeet;
        }
        return a.featured ? -1 : 1;
    }
  });

  return sorted;
}

export interface FilterMetadata {
  bedrooms: Record<number, number>;
  bathrooms: Record<number, number>;
  stories: Record<number, number>;
  sqFtRanges: {
    "Under 600": number;
    "600-799": number;
    "800-999": number;
    "1000-1499": number;
    "1500-1999": number;
    "2000+": number;
  };
}

export function getFilterMetadata(models: HomeModel[]): FilterMetadata {
  const meta: FilterMetadata = {
    bedrooms: {},
    bathrooms: {},
    stories: {},
    sqFtRanges: {
      "Under 600": 0,
      "600-799": 0,
      "800-999": 0,
      "1000-1499": 0,
      "1500-1999": 0,
      "2000+": 0,
    }
  };

  models.forEach(model => {
    // Bedrooms
    if (model.beds !== undefined) {
      meta.bedrooms[model.beds] = (meta.bedrooms[model.beds] || 0) + 1;
    }
    // Bathrooms
    if (model.baths !== undefined) {
      meta.bathrooms[model.baths] = (meta.bathrooms[model.baths] || 0) + 1;
    }
    // Stories
    if (model.stories !== undefined) {
      meta.stories[model.stories] = (meta.stories[model.stories] || 0) + 1;
    }
    
    // SqFt Ranges
    if (model.squareFeet < 600) {
      meta.sqFtRanges["Under 600"]++;
    } else if (model.squareFeet <= 799) {
      meta.sqFtRanges["600-799"]++;
    } else if (model.squareFeet <= 999) {
      meta.sqFtRanges["800-999"]++;
    } else if (model.squareFeet <= 1499) {
      meta.sqFtRanges["1000-1499"]++;
    } else if (model.squareFeet <= 1999) {
      meta.sqFtRanges["1500-1999"]++;
    } else {
      meta.sqFtRanges["2000+"]++;
    }
  });

  return meta;
}
