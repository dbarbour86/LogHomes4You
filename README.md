# King's Cabins - Developer Notes

This file contains important architectural notes and reminders about the King's Cabins project.

## 🛠️ Hidden Features & Infrastructure

### Advanced Model Filtering (Built Aug 2026)
The underlying infrastructure for a premium model filtering experience is already built into the codebase, but the public-facing UI (like a filter sidebar or sorting dropdown) has been intentionally kept hidden until the catalog grows large enough to need it.

**How it works:**
1. **The Data:** Every cabin in `src/data/models.ts` has numerical metadata attached to it (e.g., `squareFeet`, `stories`, `width`, `depth`, `beds`, `baths`). 
2. **The Logic:** `src/utils/modelFilters.ts` contains the engine for filtering, sorting, and automatically calculating the exact count of models that fit into different categories (like square footage ranges).
3. **The Activation:** The main catalog page (`src/pages/FloorPlansPage.tsx`) is actively listening for URL query parameters using `useSearchParams`.

**How to test it right now:**
Even without a visual interface, the filters are active. You can test them by manually appending query parameters to the URL:
- `/floor-plans?bedrooms=2`
- `/floor-plans?minSqFt=500&maxSqFt=1000`
- `/floor-plans?stories=1`
- `/floor-plans?sort=sqft-asc` (Sorts from smallest to largest square footage)

**How to expose the UI later:**
When you are ready to build a visual filter sidebar for the public:
1. Create your visual filter components.
2. When a user clicks a filter (e.g., "2 Bedrooms"), update the browser URL to include `?bedrooms=2`.
3. You don't need to write any new catalog filtering logic—the page will automatically detect the URL change, filter the models, and re-render the grid instantly!

---

### Adding New Cabins
To add a new cabin model to the website, simply add a new object to the `homeModels` array in `src/data/models.ts`. As long as you fill out the numerical fields (`squareFeet`, `beds`, etc.), the model will automatically be integrated into the hidden filtering system and future metadata counts.
