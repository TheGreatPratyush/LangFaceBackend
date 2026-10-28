# LangFace — Backend Project Context

## Product scope

LangFace is a platform that connects language learners with real people for one-on-one conversation practice.

### Version 1 user journey
1. Users register and log in.
2. Speakers complete profiles and submit them for admin approval.
3. Learners discover approved speakers.
4. Learners request a conversation session with a proposed date, time, duration, and topic.
5. Speakers accept, decline, or propose a different time.
6. Once the time is agreed, the speaker manually creates a Google Meet link and adds it to the booking.
7. The platform provides private meeting-link access, notifications, and scheduled reminders.
8. Eligible sessions can be completed and reviewed.
9. Basic reporting, blocking, moderation, and cancellation rules support a safer experience.

## Technology stack

- Backend: Node.js and Express
- Database: PostgreSQL
- ORM: Prisma 7
- Language/module system: JavaScript CommonJS (`require` and `module.exports`) for application `.js` files
- Development server: Nodemon
- Environment configuration: dotenv
- PostgreSQL driver dependencies currently installed: `pg` and `@prisma/adapter-pg`

Installed dependency versions should be verified from `package.json` and `package-lock.json` rather than assumed.

## Current implementation status

Completed:
- Node.js project initialized in the existing `LangFace` directory.
- Express and Nodemon installed.
- `package.json` configured with `type: commonjs`.
- Development command: `npm run dev`.
- Production-style start command: `npm start`.
- `src/index.js` contains an Express server.
- `GET /health` returns HTTP 200 and `{ "status": "OK" }`.
- `.gitignore` created for dependencies, environment files, generated output, logs, and build artifacts.

Previously discussed but not yet confirmed:
- Successful creation of the PostgreSQL database named `LangFace`.
- Successful Prisma 7 connection to PostgreSQL.
- Successful creation and migration of the actual application schema.

A previous attempt to connect using `psql -U postgres` failed because the PostgreSQL role `postgres` did not exist. Verify the actual local PostgreSQL role and database before attempting migrations.

## Architecture decisions

- Use a modular monolith; do not introduce microservices for Version 1.
- Keep database queries inside service/repository functions rather than directly inside route definitions.
- Separate Express routes, controllers, and services as the application grows.
- Validate input on the server.
- Enforce authorization and business rules in the backend, never only in the frontend.
- Use database migrations to track schema changes.
- Keep secrets in environment variables; never commit `.env`.
- Keep frontend API contracts documented and consistent.
- Use durable background jobs for reminders; do not rely only on in-memory timers.
- Keep booking, session completion, and future payment records logically separate.
- Use CommonJS consistently in application `.js` files. Follow Prisma 7's supported configuration and generated-client requirements rather than copying older Prisma tutorials.

## Version 1 phase roadmap

Phase 0 — Requirements and scope freeze:
- Agree on user roles, journeys, policies, API conventions, and data requirements.

Phase 1 — Project foundation:
- Set up the repository and environments.
- Confirm PostgreSQL connectivity and Prisma 7 configuration.
- Define and migrate the initial database schema.
- Organize the Express server and shared infrastructure.
- Define API conventions and health/error handling.
- Verify frontend-backend connectivity.

Phase 2 — Authentication and account management:
- Registration, login, logout, session handling, password reset, and role-based access.

Phase 3 — Speaker onboarding:
- Speaker profiles, submission, admin approval, and rejection.

Phase 4 — Speaker discovery:
- Public approved profiles, search, filters, pagination, and profile details.

Phase 5 — Booking workflow:
- Booking requests, acceptance, decline, rescheduling, cancellation, and overlap protection.

Phase 6 — Meeting links and notifications:
- Manual Google Meet link submission, private access, email notifications, and durable reminders.

Phase 7 — Session completion and safety:
- Completion, no-show handling, reviews, reports, blocking, and moderation.

Phase 8 — Policies and edge cases:
- Cancellation rules, expiry, retries, concurrency, audit history, and resilience.

Phase 9 — QA and launch:
- End-to-end tests, security review, deployment, backups, monitoring, and production verification.

Phase 10 — Future expansion, outside the initial ten-phase launch plan:
- Payments, refunds, speaker payouts, free-session credits, Google Calendar integration, in-app chat, document sharing, advanced matching, subscriptions, analytics, and other approved extensions.

## Development and teaching workflow

For each implementation task, provide:
1. Objective and explanation.
2. Numbered implementation steps in plain English.
3. Exact files to create or modify.
4. Complete code only after explaining the steps.
5. Exact testing commands and requests.
6. Expected outputs and failure cases.
7. Final implementation summary.
8. A ready-to-paste update for this context file.

Build incrementally. Verify the current task before proceeding to the next one. Do not claim that a feature, database, migration, or test is complete until its result has been confirmed.

## Current next task

Inspect the existing project files and verify PostgreSQL access. Then configure Prisma 7 correctly, create the initial real application models, apply a migration, and test the database connection before building the next API module.