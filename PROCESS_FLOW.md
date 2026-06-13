# Kudos System – Process Flow (Spec-Driven Development)

## Step 1: Specification Initiation

The initial requirement was provided as a high-level prompt:

"Create a feature for an internal web app that allows users to give kudos to their colleagues..."

An AI-assisted specification process was initiated to convert this ambiguous requirement into structured functional and technical requirements.

---

## Step 2: Specification Review & Refinement

The generated specification was reviewed and refined as follows:

### Added Requirement (Moderation)
A new user story was introduced:

- As an administrator, I want to be able to hide or delete inappropriate kudos messages to maintain platform integrity.

### Updated Database Design
The Kudos table was updated to include:

- is_visible (boolean, default: true)

This allows soft deletion of kudos without removing data permanently.

---

## Step 3: Implementation

The approved specification was implemented using a Next.js application.

### Features Implemented:
- Users can create kudos messages
- Users can view a public feed of kudos
- API routes handle creation and retrieval of kudos
- Admin moderation endpoint allows toggling visibility of kudos
- Hidden kudos are excluded from the public feed

---

## Step 4: Repository & Delivery

The completed project was:

- Initialised as a Git repository
- Committed with version control
- Pushed to a public GitHub repository
- Includes full source code and SPECIFICATION.md

---

## Outcome

This process demonstrates a spec-driven development workflow where:
- Requirements are clarified before implementation
- Design is validated before coding
- AI-assisted development is guided by structured architecture decisions
