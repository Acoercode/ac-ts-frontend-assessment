# Acoer Frontend Interview Assessment — openFDA Explorer

A small, real-world task that reveals practical frontend skills: **data fetching**, **component design**, **state management**, **accessibility**, and attention to **UI detail**.  
Designed to fit **90–120 minutes**, with optional stretch goals if you’d like to go further.

---

## Overview

Build a **OpenFDA Explorer** dashboard in React that pulls **live data from one (or more) openFDA APIs** and lets users:

- View via table and charts
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

Your goal is to build a filterable dashboard using data from one openFDA endpoint. The dashboard should combine a data table with at least three ApexCharts visualizations of different types, alongside filters and controls that make the data easy to explore.

Core Requirements (90–120 minutes)
1. Pick one endpoint: Select a single openFDA endpoint (Drug Events, Device Events, or Food Recalls).
2. Data table:
   - Search input → translates into openFDA search queries
   - 2–3 meaningful filters (e.g., date range + manufacturer or classification)
   - Sorting by at least one relevant field (e.g., newest date first)
   - Pagination using limit + skip
3. Visualization: Use openFDA’s count endpoint to create at least three ApexCharts visualizations (e.g., top reactions, recalls by class/state).
4. Detail panel: Clicking a record should display more information (either JSON pretty-view or selected key fields).
5. States: Handle loading, empty, and error states (including rate-limit 429 errors).
6. UI: Ensure the dashboard is responsive, accessible, and uses Material UI (MUI) for layout and components.

---

## Stretch Goals (Optional)

- Multi-endpoint toggle (Drug / Device / Food)
- More advanced charting (multiple facets, interactivity, drill-downs).
- **AI Bonus:**
  - Summarize a record
  - Explain a facet trend
  - Natural-language → query translation
- Add one or more unit tests (e.g., query builder or filter logic).

---

## What We're Evaluating

- **Code Quality & Organization:** modular components, hooks, helpers.
- **API/query handling:** clean query builder, state management, error handling.
- **Senior-level trade-offs:** decisions about architecture, clarity, and scalability.
- **Correctness:** Search/filter/pagination/facets work against live API, displaying correct data.
- **UX polish:** Usability, meaningful defaults, professional detail.

---

## Getting Started

We created this starter repo with **Create React App (CRA)** , **Typescript**, **Material UI**, and **ApexCharts**.

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

- `search` — build queries
- `sort` — order results
- `count` — facet aggregation
- `limit` — results per request (max 1000)
- `skip` — pagination offset

### Popular Endpoints

- **Drug adverse events:** `/drug/event.json`
- **Device adverse events:** `/device/event.json`
- **Food recalls:** `/food/enforcement.json`

### Submission

- Push your completed solution to your private repository.
- Invite `amacwhirter` and `amandaluniz` as collaborators to view your submission.
- Fill in the CANDIDATE_QUESTIONNAIRE.MD

---

Tip: Don’t over-engineer. A clean, functional, and polished submission is far more valuable than unfinished extras. Have fun and show us how you think about building products!
