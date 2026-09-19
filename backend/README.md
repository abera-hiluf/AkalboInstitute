# AQALBO Backend

Initial modular-monolith scaffold for the AQALBO trusted human expertise platform.

## Run locally

1. Copy `.env.example` to `.env` and configure PostgreSQL.
2. Install dependencies with `npm install`.
3. Start the API with `npm run dev`.
4. Check `GET /health`.

## Initial module boundaries

The empty module directories are intentionally reserved for the MVP roadmap: authentication, users and profiles, expert verification, expertise discovery, services, availability, bookings, payments and payouts, sessions, messaging, reviews, notifications, administration, reports and analytics.

The proposal calls for a modular monolith first. AI matching, semantic search, organizations, advanced learning progress and community features remain later phases.

