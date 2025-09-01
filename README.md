# Frontend Interview Exercise — Product Explorer Dashboard (React) — openFDA Edition

A small, real-world task that reveals practical frontend skills: **data fetching**, **component design**, **state management**, **accessibility**, and attention to **UI detail**.  
Designed to fit **90–120 minutes**, with optional stretch goals if you’d like to go further.

---

## Overview

Build a **Product Explorer** dashboard in React that pulls **live data from one (or more) openFDA APIs** and lets users:

- Search
- Filter
- Sort
- Paginate
- View a detail panel

Aim for **clean, readable code** and a **polished, responsive UI**.

### Choose at least one endpoint:

- **Drug Adverse Events**: `/drug/event.json`
- **Device Adverse Events (MAUDE)**: `/device/event.json`
- **Food Recall Enforcement**: `/food/enforcement.json`

---

## What We Provide

- Starter instructions (you choose Vite/CRA/Next — **Vite recommended**)
- Clear acceptance criteria and scoring rubric
- A **query cheat-sheet** for openFDA

---

## Candidate Task

1. **Pick endpoint(s):** Choose one or more openFDA endpoints.
2. **Build a query UI:** Translate inputs into openFDA `search` syntax.
3. **Filters (2–3 relevant):** Examples: date range, manufacturer, classification.
4. **Sorting:** Sort by a relevant field (e.g., newest date first).
5. **Pagination:** Use `limit` + `skip` (10–50 per page recommended).
6. **Faceted summary:** Use `count` (e.g., top reactions, recalls by class or state).
7. **Detail panel:** Show JSON pretty-view or selected key fields.
8. **States:** Loading, empty, error (handle 429s gracefully).
9. **Accessibility & responsiveness.**

> **Use Material UI (MUI)** for layout and components. Avoid heavy UI libraries beyond MUI.

---

## Stretch Goals (Optional)

- Persist state in the URL (query params)
- Multi-endpoint toggle (Drug / Device / Food)
- Client-side caching & abortable requests
- Unit test a helper (e.g., query builder)
- **AI Bonus (+10):**
  - Summarize a record
  - Explain a facet trend
  - Natural-language → query translation

---

## Acceptance Criteria

- **Correctness:** Search/filter/pagination/facets work against live API
- **UX polish:** Clear, usable controls with proper empty/error states
- **Code quality:** Helpers for query assembly, minimal re-renders
- **Accessibility:** Labeled inputs, ARIA, tab order
- **Responsiveness:** Layout adapts across devices

---

## Scoring Rubric (100 pts)

- Functionality: **35**
- Code organization & readability: **25**
- UX & accessibility: **20**
- Error/loading/empty states: **10**
- Responsiveness: **10**

Stretch goals: **+10 bonus**

---

## Getting Started

We recommend **Create React App (CRA)** with **Material UI**:

```bash
npx create-react-app openfda-explorer --template cra-template
cd openfda-explorer
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm start
```

---

## API Cheat-Sheet

- **Base URL:** `https://api.fda.gov`
- **Docs:** [openFDA APIs](https://open.fda.gov/apis/)
- **Open access:** No API key required. Use example queries from the docs as a starting point.

### Core Parameters

- `search` — build queries (e.g., `patient.reaction.reactionmeddrapt:"headache"`)
- `sort` — order results (e.g., `sort=date_received:desc`)
- `count` — facet aggregation (e.g., `count=classification`)
- `limit` — results per request (max 1000)
- `skip` — pagination offset

### Popular Endpoints

- **Drug adverse events:** `/drug/event.json`
- **Device adverse events:** `/device/event.json`
- **Food recalls:** `/food/enforcement.json`

### Examples

- **Faceting:**  
  `count=patient.reaction.reactionmeddrapt`  
  `count=classification`

- **Pagination:**  
  `limit=50&skip=0`  
  `limit=50&skip=50`

### Rate Limiting

- Watch for **HTTP 429 Too Many Requests**.
- If a `Retry-After` header is present, respect it.
- Otherwise, implement exponential backoff.

---
