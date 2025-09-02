# Acoer Frontend Interview Assessment — openFDA Explorer

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

- Starter instructions
- Clear acceptance criteria
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

## Getting Started

We created this starter repo with **Create React App (CRA)** , **Typescript** and **Material UI**.

1. Do NOT fork this repo
2. Instead, use this repo as a template:
   - At the top of the repo, click "Use this template" button.
   - Select "Create new repository".
   - Make sure your new repo is private.
   - Give it a clear name
   - Clone to your machine and complete work
3. Add us as a collaborator on your repo so we can review your solution:
   - Add `amacwhirter` and `amandaluniz`

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

### Submission

- Push your completed solution to your forked repository.
- Share the link to your repo with us.
- Fill in the CANDIDATE_QUESTIONNAIRE.MD

---

✨ Tip: Don’t over-engineer. A clean, functional, and polished submission is far more valuable than unfinished extras. Have fun and show us how you think about building products!
