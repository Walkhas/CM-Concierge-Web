# ROADMAP.md

# C&M Concierge Website — Development Roadmap

## 1. Purpose of This Document

This document defines the implementation sequence for Version 1 of the
C&M Concierge website.

It translates the product requirements defined in `PROJECT.md` and the
development rules defined in `AGENTS.md` into a practical sequence of
milestones.

This roadmap is intended to help developers and AI agents:

- Build the project in the correct order.
- Avoid premature scope expansion.
- Establish dependencies before features that rely on them.
- Validate each milestone before moving forward.
- Keep Version 1 focused on its primary business goal.

The primary Version 1 goal is:

> Convert website visitors into qualified leads through a free initial
> consultation.

The roadmap must preserve the core business rule:

> Consultation First.

---

# 2. Project Documentation Hierarchy

The project documentation should be interpreted in the following order:

```text
PROJECT.md
    ↓
Defines what is being built

AGENTS.md
    ↓
Defines how agents should work

ROADMAP.md
    ↓
Defines when and in what order work should be completed

Codebase
    ↓
Represents the current implementation
```

If implementation priorities change, `PROJECT.md` and this roadmap should be
updated deliberately.

Agents must not silently change the product scope by modifying the roadmap
through code alone.

---

# 3. Version 1 Success Criteria

Version 1 should be considered successful when a visitor can:

1. Open the website in English or Spanish.
2. Understand what C&M Concierge does.
3. Explore the available service categories.
4. Understand that services begin with a free initial consultation.
5. View any active packages or promotions.
6. Read approved customer reviews.
7. Book a free initial consultation.
8. Submit a review after receiving a service.

An authorized C&M Concierge administrator should also be able to:

1. Access the private administrative area.
2. Review submitted customer reviews.
3. Approve, reject, edit, or unpublish reviews.
4. Manage promotional content if that functionality is included in the
   initial production release.

Version 1 does not require:

- Online payments.
- Direct service purchasing.
- A shopping cart.
- A CRM.
- A client portal.
- A custom booking system.

---

# 4. Development Principles

The project should follow these principles throughout all milestones.

## Consultation First

Every potential client journey must lead toward the free initial consultation.

## Equal Languages

English and Spanish must receive equal importance.

## Mobile First

The public website must work well on mobile devices before desktop-specific
enhancements are prioritized.

## Incremental Delivery

Each milestone should produce a meaningful, testable improvement.

## Scope Discipline

Do not implement future functionality before the current milestone requires it.

## Secure by Default

Authentication, authorization, database access, and administrative operations
must be protected appropriately.

## Reusable Foundation

Build reusable patterns where they provide real value, without overengineering.

---

# 5. Milestone Overview

The recommended Version 1 sequence is:

```text
Milestone 0
Project Blueprint
        ↓
Milestone 1
Project Foundation
        ↓
Milestone 2
Brand and Design System
        ↓
Milestone 3
Bilingual Public Website
        ↓
Milestone 4
Booking Integration
        ↓
Milestone 5
Reviews System
        ↓
Milestone 6
Administrative Area
        ↓
Milestone 7
Promotions and Featured Offers
        ↓
Milestone 8
SEO, Accessibility and Performance
        ↓
Milestone 9
Production Readiness
        ↓
Milestone 10
Production Launch
```

Each milestone should be completed and validated before significant work begins
on the next one.

Minor fixes discovered later may be applied as needed.

---

# 6. Milestone 0 — Project Blueprint

## Status

Completed / Finalization Phase

## Objective

Establish the product definition, development rules, and implementation plan
before writing production code.

## Required Documentation

- `PROJECT.md`
- `AGENTS.md`
- `ROADMAP.md`

## Required Decisions

The following decisions must be documented:

- Version 1 product scope.
- Consultation-first business flow.
- Supported languages.
- Core service structure.
- Brand visual references.
- Technical stack.
- Booking strategy.
- Review moderation strategy.
- Administrative scope.
- Explicit out-of-scope features.

## Completion Criteria

Milestone 0 is complete when:

- `PROJECT.md` is approved as the product source of truth.
- `AGENTS.md` defines agent behavior and development rules.
- `ROADMAP.md` defines the implementation sequence.
- No major Version 1 scope questions remain unresolved.

## Next Milestone

Milestone 1 — Project Foundation.

---

# 7. Milestone 1 — Project Foundation

## Objective

Create a clean and stable technical foundation for the project.

This milestone should establish the application structure before building
business features.

## Tasks

### 7.1 Repository Setup

- Create the GitHub repository.
- Add the project documentation files to the repository root.
- Configure `.gitignore`.
- Establish the main branch strategy.
- Confirm that secrets and local environment files are not committed.

### 7.2 Next.js Initialization

Initialize the project using:

- Next.js.
- TypeScript.
- Tailwind CSS.

The project should use the modern Next.js application architecture unless
there is a documented reason not to.

### 7.3 Code Quality Tooling

Configure and verify:

- TypeScript.
- ESLint.
- Formatting conventions where appropriate.
- Build validation.

Avoid adding unnecessary tooling.

### 7.4 Environment Configuration

Create an environment variable strategy for:

- Public application configuration.
- Supabase credentials.
- Server-only credentials.
- Cal.com configuration when required.

Create an `.env.example` file that documents required variables without
including real secrets.

### 7.5 Base Project Structure

Establish a clear directory structure for:

- Application routes.
- Reusable components.
- Features.
- Utilities.
- Types.
- Translation resources.
- Database integration.

The exact structure should follow the selected Next.js architecture and avoid
premature abstraction.

## Validation

Before completing Milestone 1:

- The project installs successfully.
- The development server runs.
- TypeScript validation passes.
- Lint validation passes.
- Production build succeeds.
- No secrets are committed.
- Documentation is available in the repository.

## Deliverable

A clean, deployable application foundation with no major business features yet.

---

# 8. Milestone 2 — Brand and Design System

## Objective

Translate the approved C&M Concierge visual identity into a reusable website
design system.

The primary visual references are:

1. The official C&M Concierge logo.
2. The official C&M Concierge Facebook cover/banner.

Other flyers are not primary visual references unless explicitly approved.

## Tasks

### 8.1 Asset Review

Review the approved visual assets.

Identify:

- Logo variants.
- Primary colors.
- Supporting colors.
- Light and dark tones.
- Typography direction.
- Visual motifs worth carrying into the website.

The final color values should be sampled from the approved assets rather than
invented arbitrarily.

### 8.2 Design Tokens

Create semantic design tokens for concepts such as:

```text
brand-primary
brand-primary-dark
brand-secondary
brand-dark
brand-light
brand-surface
brand-muted
```

The exact implementation may use CSS variables, Tailwind theme tokens, or
another compatible mechanism.

Avoid scattering raw hexadecimal values throughout components.

### 8.3 Typography and Spacing

Define:

- Base typography.
- Heading hierarchy.
- Body text.
- Spacing rhythm.
- Border radius conventions.
- Shadow usage where appropriate.

The design should feel:

- Professional.
- Warm.
- Approachable.
- Trustworthy.
- Personalized.
- Modern.
- Locally connected.

### 8.4 Core UI Components

Create only the reusable primitives that are clearly needed.

Potential initial components include:

- Button.
- Container.
- Section wrapper.
- Section heading.
- Card.
- Form field.
- Language selector.
- Consultation CTA.

Do not create a large component library before actual page requirements demand
it.

## Validation

- Colors are based on approved assets.
- The logo is displayed correctly.
- Components work in both languages.
- Text expansion does not break layouts.
- Contrast is reasonably accessible.
- Components work on mobile and desktop.

## Deliverable

A small, reusable design foundation ready for public page development.

---

# 9. Milestone 3 — Bilingual Public Website

## Objective

Build the public-facing website and establish the primary customer journey.

## Priority

This milestone should focus on communicating the business clearly before
building administrative functionality.

## Tasks

### 9.1 Internationalization Architecture

Implement route-based or otherwise clearly structured bilingual support.

The conceptual public structure should support:

```text
/en
/es
```

Configure:

- Language detection or default behavior.
- Language switching.
- Translation resources.
- Localized metadata architecture.
- Language-aware navigation.

English and Spanish must provide equivalent functionality.

### 9.2 Global Layout

Build:

- Header.
- Navigation.
- Language selector.
- Footer.
- Global consultation CTA.

### 9.3 Homepage

The homepage should include:

1. Hero.
2. About / What We Do.
3. Services.
4. How It Works.
5. Reviews preview.
6. Optional promotions area.
7. Final consultation CTA.
8. Contact / Footer.

### 9.4 Hero

The hero should clearly communicate:

- What C&M Concierge does.
- Who it helps.
- The value of personalized assistance.
- That the initial consultation is free.

Primary CTA:

> Book a Free Consultation.

Secondary CTA:

> Explore Our Services.

Equivalent Spanish messaging must be provided.

### 9.5 Services Section

Present the established service categories:

1. Personal Assistance.
2. Childcare.
3. House Cleaning.
4. Transportation & Tours.
5. Meal Preparation.
6. Personalized Activity Itineraries.
7. Language Support & Real-Time Interpretation.

The original service catalog establishes the first six categories and their
general scope. The language support category is an approved project addition
that should be represented as a distinct service without making unsupported
claims about certification. fileciteturn8file1

Services must be presented as flexible categories of assistance.

Do not add:

- Prices.
- Shopping carts.
- Direct purchase buttons.
- Checkout flows.

Every service CTA should support the consultation-first flow.

### 9.6 How It Works

Implement the conceptual flow:

1. Book a free consultation.
2. Tell us what you need.
3. We help identify the right solution.
4. Enjoy more time and less stress.

### 9.7 Contact

Include the approved C&M Concierge contact methods and ensure they are easy
to update later.

## Validation

- All public content works in English and Spanish.
- No user-facing strings are unintentionally left untranslated.
- The site works on mobile, tablet, and desktop.
- Consultation CTAs are consistent.
- No direct service purchasing flow exists.
- Navigation works correctly.
- Layouts handle longer Spanish text.

## Deliverable

A complete bilingual public website shell with the core customer journey.

---

# 10. Milestone 4 — Booking Integration

## Objective

Allow visitors to book a free initial consultation.

## Booking Strategy

Version 1 should use Cal.com or another explicitly approved external booking
provider.

Do not build a custom scheduling system.

## Tasks

### 10.1 Booking Configuration

Configure the external booking provider for:

- Free initial consultations.
- Availability.
- Calendar synchronization.
- Time zone support.
- Booking confirmations.
- Rescheduling.
- Cancellation.

### 10.2 Video Call Setup

Configure the booking flow so confirmed appointments include the intended
video-call method.

The exact video provider should be selected during booking configuration.

### 10.3 Website Integration

Integrate booking CTAs into:

- Header.
- Hero.
- Service sections where appropriate.
- Promotions.
- Final CTA.

### 10.4 Language Experience

Ensure English-speaking and Spanish-speaking visitors have an understandable
booking experience.

If the booking provider has localization limitations, document them and choose
the best practical solution.

## Validation

Test:

- Booking creation.
- Availability.
- Time zone display.
- Confirmation.
- Rescheduling.
- Cancellation.
- Calendar conflict prevention.
- Video-call information.

## Deliverable

A working end-to-end free consultation booking flow.

---

# 11. Milestone 5 — Reviews System

## Objective

Allow customers to submit reviews while preventing unmoderated content from
appearing publicly.

## Tasks

### 11.1 Supabase Setup

Configure:

- Supabase project.
- Database connection.
- Required environment variables.
- Security policies.

### 11.2 Reviews Data Model

Implement a reviews model with fields conceptually similar to:

```text
id
name
rating
comment
service
status
created_at
updated_at
```

Future fields should not be added unless currently useful.

### 11.3 Public Review Submission

Create a bilingual review form.

The form should support:

- Name.
- Rating.
- Written review.
- Optional service category.

All submitted reviews should default to:

```text
pending
```

### 11.4 Validation and Abuse Protection

Implement appropriate validation.

Consider reasonable anti-spam protections when needed.

Do not expose administrative capabilities through public forms.

### 11.5 Public Reviews Display

Only reviews with approved status may be displayed publicly.

The public website should never automatically display pending submissions.

## Validation

Test:

- Valid submission.
- Invalid submission.
- English and Spanish validation messages.
- Database insertion.
- Default pending status.
- Public display filtering.

## Deliverable

A secure review submission and public display foundation.

---

# 12. Milestone 6 — Administrative Area

## Objective

Create the minimum private administration functionality required for Version 1.

## Tasks

### 12.1 Authentication

Configure secure administrator authentication using Supabase Auth.

### 12.2 Authorization

Ensure administrative routes and operations are protected.

Do not rely only on hidden navigation.

### 12.3 Review Moderation

Provide functionality to:

- View submitted reviews.
- View pending reviews.
- Approve reviews.
- Reject reviews.
- Edit reviews where appropriate.
- Unpublish approved reviews.

### 12.4 Security

Verify:

- Unauthorized users cannot access admin routes.
- Unauthorized users cannot perform administrative actions.
- Database policies protect moderation data.
- Privileged credentials are not exposed.

## Validation

Test:

- Login.
- Logout.
- Unauthorized access.
- Review approval.
- Review rejection.
- Review editing.
- Review unpublishing.
- Public visibility changes.

## Deliverable

A secure minimum administrative area for review moderation.

---

# 13. Milestone 7 — Promotions and Featured Offers

## Objective

Allow C&M Concierge to display temporary packages and promotional offers
without breaking the consultation-first business model.

## Important Rule

Promotions are informational and lead-generation tools.

They must not become direct checkout products.

## Implementation Strategy

This milestone may be implemented in two stages.

### Stage A — Static or Controlled Promotions

Implement promotion content using a simple, maintainable source.

Potential approaches:

- Structured local content.
- Database-driven content.

The choice should depend on the state of the project at this milestone.

### Stage B — Admin Management

If needed for the Version 1 launch, allow administrators to:

- Create promotions.
- Edit promotions.
- Activate promotions.
- Deactivate promotions.
- Set optional start and end dates.

## Promotion Fields

Conceptually:

```text
id
title
description
image
language
status
start_date
end_date
created_at
updated_at
```

The final schema should be based on actual needs.

## Public Behavior

If no promotion is active:

- Do not display an empty promotions section.

If promotions are active:

- Display them clearly.
- Include an appropriate consultation CTA.
- Respect language-specific content.

## Validation

- Active promotions display correctly.
- Inactive promotions do not display.
- Expired promotions behave correctly if scheduling is implemented.
- Promotion CTAs lead toward consultation.
- Both languages are supported.

## Deliverable

A controlled promotional section that remains consistent with the Version 1
conversion flow.

---

# 14. Milestone 8 — SEO, Accessibility and Performance

## Objective

Prepare the public website for discoverability, usability, and efficient
performance.

## 14.1 SEO

Implement:

- Localized page titles.
- Localized descriptions.
- Language-aware metadata.
- Semantic heading hierarchy.
- Appropriate social sharing metadata.
- Language-aware URLs.
- Natural, useful content.

Avoid keyword stuffing.

### Local Relevance

Where appropriate, content should communicate the business's connection to
Mérida and its local support role without making unsupported claims.

## 14.2 Accessibility

Review:

- Semantic HTML.
- Keyboard navigation.
- Focus states.
- Form labels.
- Error messages.
- Color contrast.
- Meaningful image alt text.
- Touch target sizes.

## 14.3 Performance

Review:

- Image optimization.
- Unnecessary JavaScript.
- Large client-side dependencies.
- Unnecessary requests.
- Loading behavior.
- Responsive images.

Do not introduce complex optimization infrastructure without evidence that it
is needed.

## Validation

Run available audits and manually inspect important pages.

Fix meaningful issues discovered before production launch.

## Deliverable

A faster, more discoverable, and more accessible public website.

---

# 15. Milestone 9 — Production Readiness

## Objective

Prepare the complete Version 1 application for public deployment.

## Tasks

### 15.1 Full Functional Review

Verify:

- Navigation.
- Language switching.
- Service content.
- Consultation CTAs.
- Booking flow.
- Reviews.
- Admin authentication.
- Review moderation.
- Promotions if included.

### 15.2 Responsive Review

Test important flows on:

- Mobile.
- Tablet.
- Desktop.

### 15.3 Security Review

Verify:

- Environment variables.
- Database access.
- Row Level Security.
- Authentication.
- Authorization.
- Admin routes.
- Public review submission.

### 15.4 Content Review

Review both languages for:

- Missing content.
- Broken formatting.
- Incorrect translations.
- Placeholder text.
- Incorrect service descriptions.
- Unsupported claims.

### 15.5 Production Build

Confirm:

- Type checking passes.
- Linting passes.
- Production build succeeds.
- Required environment variables are configured.

## Completion Criteria

Milestone 9 is complete when no known critical issue blocks launch.

## Deliverable

A production-ready Version 1 release candidate.

---

# 16. Milestone 10 — Production Launch

## Objective

Deploy Version 1 and verify the live experience.

## Tasks

### 16.1 Vercel Deployment

Configure:

- Production project.
- Environment variables.
- Production branch.
- Deployment settings.

### 16.2 Domain

Initially, the website may be deployed using a temporary Vercel domain.

When an official domain is acquired:

- Connect the custom domain.
- Configure DNS.
- Verify HTTPS.
- Update canonical and SEO configuration where necessary.

Domain acquisition is not required to begin development.

### 16.3 Production Verification

Test the live website:

- English.
- Spanish.
- Mobile.
- Booking.
- Reviews.
- Admin access.
- Promotion visibility.
- Contact links.

### 16.4 Launch Checklist

Confirm:

- No test content remains.
- No development credentials are exposed.
- Contact information is correct.
- Booking is connected to the correct calendar.
- Video-call information works.
- Reviews are moderated.
- The consultation-first flow is preserved.

## Deliverable

C&M Concierge Website Version 1 is publicly available.

---

# 17. Recommended Build Order Within Milestones

The following sequence should generally be followed:

```text
1. Documentation
2. Repository
3. Next.js foundation
4. Environment configuration
5. Internationalization architecture
6. Brand tokens
7. Core UI components
8. Global layout
9. Homepage structure
10. Service content
11. Consultation CTAs
12. Booking integration
13. Supabase reviews foundation
14. Public review form
15. Admin authentication
16. Review moderation
17. Promotions
18. SEO
19. Accessibility
20. Performance review
21. Production validation
22. Deployment
```

This order is intentional.

For example:

- Do not build review moderation before the review data model exists.
- Do not build booking before the public conversion flow exists.
- Do not build promotions before the consultation flow is established.
- Do not build complex administrative features before public Version 1
  functionality works.

---

# 18. Version 1 Feature Priorities

## Priority A — Required for Core Launch

- Bilingual public website.
- English and Spanish support.
- Service presentation.
- Consultation-first messaging.
- Booking integration.
- Responsive design.
- Basic SEO.
- Production deployment.

## Priority B — Strongly Recommended for Version 1

- Review submission.
- Review moderation.
- Public testimonials.
- Basic administrative authentication.

## Priority C — Include If Ready

- Admin-managed promotions.
- Scheduled promotion activation.
- Featured reviews.
- Additional content management improvements.

Priority C features should not delay the core launch unnecessarily.

---

# 19. Explicitly Deferred Features

The following features are intentionally deferred beyond Version 1:

- Online payments.
- Direct service purchasing.
- Shopping carts.
- Custom scheduling infrastructure.
- Full CRM.
- Client profiles.
- Client portal.
- Direct service request workflow.
- Staff management.
- Complex dashboards.
- Automated service fulfillment.
- Advanced marketing automation.

These features may be revisited after Version 1 has been launched and used.

---

# 20. Post-Launch Review

After Version 1 has been live long enough to collect meaningful usage, review:

- Booking conversion.
- Visitor behavior.
- Most visited services.
- Common consultation requests.
- Review submission activity.
- Language usage.
- Promotion performance.
- Administrative workload.

The next roadmap should be based on real usage rather than assumptions.

Potential Version 2 areas may include:

- Lead tracking.
- Client management.
- Service coordination.
- Improved promotional management.
- Review automation.
- Client portals.

Version 2 should not be defined until Version 1 usage provides useful evidence.

---

# 21. Current Project Status

Project Phase: Planning / Documentation

Current Version: V1

Current Milestone: Milestone 0 — Project Blueprint

Documentation:

- `PROJECT.md` — Product source of truth.
- `AGENTS.md` — Agent and development rules.
- `ROADMAP.md` — Implementation sequence.

## Immediate Next Step

Once this roadmap is approved:

1. Create the project repository.
2. Add `PROJECT.md`, `AGENTS.md`, and `ROADMAP.md`.
3. Begin Milestone 1 — Project Foundation.
4. Initialize the Next.js application.
5. Establish the bilingual architecture before building public pages.

---

# 22. Final Roadmap Principle

The purpose of this roadmap is not to create the largest possible application.

The purpose is to launch a useful, trustworthy, bilingual website that helps
C&M Concierge convert interested visitors into qualified consultation leads.

The guiding principle for every milestone is:

> Build the next thing that is necessary, validate it, and avoid building the
> future before the present version needs it.
