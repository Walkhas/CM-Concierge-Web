# AGENTS.md

# C&M Concierge Website — Agent Instructions

## 1. Purpose of This Document

This document defines the development rules and working behavior for AI agents contributing to the C&M Concierge website.

All agents must treat `PROJECT.md` as the primary source of truth for:

- Product requirements.
- Business rules.
- Project scope.
- Service structure.
- Architecture decisions.
- Brand direction.
- Version boundaries.

`ROADMAP.md` defines the implementation order and project milestones.

If a conflict exists between this document and `PROJECT.md`, the requirements defined in `PROJECT.md` take priority unless explicitly updated.

Agents must not make significant product, architectural, or business decisions without checking the existing project documentation first.

---

# 2. Core Agent Behavior

Agents should work carefully, incrementally, and predictably.

Before implementing a task:

1. Read the relevant sections of `PROJECT.md`.
2. Read the relevant section of `ROADMAP.md`.
3. Inspect the existing codebase.
4. Understand the current implementation.
5. Identify the smallest appropriate change.
6. Implement only what is necessary.
7. Validate the implementation.

Do not assume that the current task requires a large refactor.

Prefer small, focused changes over broad rewrites.

Do not modify unrelated files unless necessary.

---

# 3. Source of Truth

The project documentation hierarchy is:

```text
PROJECT.md
    ↓
Product and business requirements

AGENTS.md
    ↓
Development and agent behavior

ROADMAP.md
    ↓
Implementation sequence and milestones

Codebase
    ↓
Current implementation
```

Agents must not silently change project requirements through code.

If a requested feature conflicts with `PROJECT.md`, the agent should identify the conflict rather than quietly implementing a contradictory solution.

---

# 4. Project Scope Rules

The current project is Version 1 of the C&M Concierge website.

The primary goal is:

> Convert website visitors into qualified leads through a free initial consultation.

The website is not an e-commerce platform.

Agents must not implement direct service purchasing or service checkout unless the project scope is explicitly updated.

## 4.1 Consultation First

All potential client journeys begin with a free initial consultation.

Agents must preserve this business rule throughout the project.

The following patterns are allowed:

- Learn more about a service.
- Explore available services.
- View a promotion.
- Book a free consultation.
- Contact C&M Concierge.

The following patterns are not allowed in Version 1:

- Buy service.
- Purchase now.
- Checkout.
- Pay for service.
- Add service to cart.
- Request immediate fulfillment without consultation.

Promotional packages must also direct users toward the consultation process.

---

# 5. Internationalization Rules

English and Spanish have equal importance.

Agents must not treat English as the primary product language with Spanish added as an afterthought.

Every public-facing feature should be designed with both languages in mind.

This includes:

- Navigation.
- Pages.
- Calls to action.
- Forms.
- Validation messages.
- Error messages.
- Service descriptions.
- Promotional content.
- Reviews.
- Metadata.
- SEO content.

Do not hardcode user-facing text directly inside reusable components when the project's internationalization architecture provides a translation mechanism.

New user-facing strings should be added to the appropriate translation system.

## 5.1 Language Consistency

Translations should preserve meaning and intent rather than translating individual words literally.

English and Spanish content should provide equivalent information.

Minor differences in phrasing are acceptable when necessary for natural language and readability.

Do not leave incomplete translations.

Do not display mixed languages unintentionally.

## 5.2 Language-Specific Content

Some future content may intentionally differ between languages.

For example:

- Reviews.
- Testimonials.
- Promotions.
- Marketing copy.

The architecture should support language-specific content where appropriate.

Do not assume that every piece of content must always be identical between English and Spanish.

---

# 6. Technology Rules

The Version 1 technology stack is defined in `PROJECT.md`.

The expected stack includes:

- Next.js.
- TypeScript.
- Tailwind CSS.
- shadcn/ui where appropriate.
- Supabase.
- Cal.com.
- Vercel.
- GitHub.

Agents must not replace major technologies without explicit approval.

Examples of prohibited unilateral changes:

- Replacing Next.js.
- Replacing Supabase with another backend.
- Replacing Cal.com with a custom booking system.
- Adding a second database.
- Introducing a CMS unnecessarily.
- Replacing the internationalization architecture.

---

# 7. Dependency Rules

Dependencies should be added only when they provide clear value.

Before adding a dependency, consider:

1. Can the requirement be implemented with existing tools?
2. Does the dependency solve a meaningful problem?
3. Is it actively maintained?
4. Is it compatible with the existing stack?
5. Does it introduce unnecessary complexity?

Avoid adding packages for trivial functionality.

Do not install multiple libraries that solve the same problem.

When a dependency is added, prefer established and well-maintained solutions.

---

# 8. TypeScript Rules

Use TypeScript consistently.

Avoid `any` unless there is a strong technical reason and the use is isolated and documented.

Prefer:

- Explicit types.
- Interfaces where appropriate.
- Type inference when it improves readability.
- Reusable domain types.
- Narrow and predictable data structures.

Validate external data before trusting it.

Database data, form input, API responses, and third-party integrations should not be assumed to be valid automatically.

---

# 9. Component Architecture

Components should be:

- Focused.
- Reusable when appropriate.
- Easy to understand.
- Easy to maintain.

Avoid creating extremely large components that contain:

- Data fetching.
- Complex business logic.
- Form logic.
- Layout.
- Multiple unrelated sections.

Separate responsibilities when doing so improves maintainability.

However, do not over-componentize simple UI.

A component should not be split into multiple files merely for the sake of having smaller files.

Use judgment.

## 9.1 Reusable Components

Reusable components may eventually include patterns such as:

- Buttons.
- Section containers.
- Language-aware navigation.
- Service cards.
- Promotion cards.
- Review cards.
- Section headers.
- Consultation CTAs.
- Form fields.

Agents should avoid duplicating UI patterns when an existing component can be extended cleanly.

Before creating a new reusable component, inspect the existing component library.

---

# 10. Styling Rules

Use Tailwind CSS according to the project's established conventions.

Do not introduce a competing styling architecture without approval.

Avoid:

- Large inline style objects.
- Random hardcoded colors.
- Inconsistent spacing values.
- Arbitrary design decisions that conflict with the design system.

Prefer semantic and reusable design tokens where available.

---

# 11. Brand and Design Rules

The website design must be based on the approved C&M Concierge visual identity.

The primary visual references are:

1. The official C&M Concierge logo.
2. The official C&M Concierge Facebook cover/banner.

Other promotional flyers or campaign-specific graphics are not primary visual references for the website unless explicitly approved.

## 11.1 Color Rules

The design system should be based on colors extracted from the approved brand assets.

The visual direction includes:

- Deep teal.
- Teal and blue-green tones.
- Charcoal or dark gray.
- Warm cream or light neutral tones.
- Muted blue-gray or soft teal tones.

Do not invent permanent brand colors without checking the approved assets.

Prefer semantic color tokens rather than repeatedly using raw hexadecimal values throughout the application.

Examples:

```text
brand-primary
brand-primary-dark
brand-secondary
brand-dark
brand-light
brand-surface
brand-muted
```

## 11.2 Design Personality

The website should feel:

- Professional.
- Warm.
- Approachable.
- Trustworthy.
- Personalized.
- Organized.
- Modern.
- Locally connected.

Avoid making the website look:

- Excessively corporate.
- Like a generic SaaS dashboard.
- Like an e-commerce store.
- Overly minimal to the point of feeling impersonal.
- Visually disconnected from C&M Concierge.

---

# 12. Responsive Design Rules

The website must be mobile-first.

Agents should test layouts conceptually across:

- Mobile.
- Tablet.
- Desktop.

Do not design desktop-only interfaces.

Avoid layouts that:

- Require horizontal scrolling.
- Depend entirely on hover interactions.
- Use excessively small touch targets.
- Break when text expands in Spanish.
- Assume all screen sizes have the same available space.

Spanish text may be longer than English.

Components should accommodate text expansion without breaking the layout.

---

# 13. Accessibility Rules

Accessibility should be considered during implementation.

At minimum:

- Use semantic HTML.
- Provide labels for form inputs.
- Ensure buttons are identifiable.
- Avoid using color as the only source of meaning.
- Maintain reasonable contrast.
- Support keyboard navigation.
- Provide alt text for meaningful images.
- Avoid unnecessary accessibility complexity for purely decorative elements.

Interactive elements must be usable without relying exclusively on a mouse.

---

# 14. Services Rules

The current C&M Concierge service structure includes:

1. Personal Assistance.
2. Childcare.
3. House Cleaning.
4. Transportation & Tours.
5. Meal Preparation.
6. Personalized Activity Itineraries.
7. Language Support & Real-Time Interpretation.

Agents must preserve the distinction between:

- Transportation & Tours.
- Personalized Activity Itineraries.

These are separate service categories.

Do not merge them into a single generic "Experiences" category unless the product documentation is explicitly updated.

## 14.1 Service Representation

Services are not fixed products.

The website should communicate that:

- Services may be personalized.
- Availability may vary.
- Scope may vary.
- Pricing may depend on the situation.
- Specific requirements are discussed during the consultation.

Do not build a product catalog or shopping cart.

## 14.2 Language Support

Language Support & Real-Time Interpretation is a proposed additional service.

Agents must not describe it as:

- Certified translation.
- Legal translation.
- Official document translation.

unless those capabilities are explicitly established in future project documentation.

---

# 15. Booking Rules

The Version 1 booking system is used for:

> Free initial consultations.

Do not build a custom scheduling system in Version 1.

The initial architecture uses an external booking provider.

The current recommended provider is Cal.com.

The booking flow should support:

- Availability management.
- Time zones.
- Booking confirmation.
- Rescheduling.
- Cancellation.
- Video call coordination.

Do not duplicate booking functionality already provided by the external provider unless there is a specific product requirement.

---

# 16. Review System Rules

Reviews submitted by users must not automatically appear publicly.

The expected flow is:

```text
Customer
    ↓
Review Submission
    ↓
Database
    ↓
Pending
    ↓
Admin Moderation
    ↓
Approved / Rejected / Unpublished
    ↓
Public Website
```

Only approved reviews may appear publicly.

Agents must not implement automatic public publication.

---

# 17. Administrative Area Rules

Administrative functionality must remain separate from the public website.

Admin routes must:

- Require authentication.
- Verify authorization.
- Protect sensitive actions.
- Avoid exposing administrative data publicly.

Version 1 administrative functionality should remain limited to the approved scope.

Primary Version 1 responsibilities include:

- Review moderation.
- Basic promotional content management where implemented.

Do not build a CRM, client management platform, or operational dashboard unless the roadmap explicitly reaches that scope.

---

# 18. Supabase and Database Rules

Supabase should be used according to secure practices.

Agents must:

- Respect Row Level Security.
- Avoid exposing privileged credentials to the client.
- Keep secrets in environment variables.
- Separate public and administrative access.
- Validate authorization for protected operations.

Do not rely exclusively on hidden frontend UI for security.

Security must be enforced at the backend and database level.

## 18.1 Database Changes

Database schema changes should be deliberate.

Before modifying the schema:

1. Inspect the current schema.
2. Check whether the required structure already exists.
3. Avoid duplicate tables or overlapping concepts.
4. Define clear relationships.
5. Consider authorization requirements.
6. Consider future maintainability.

Do not create speculative tables for distant future features.

---

# 19. Forms and User Input

All user-submitted data should be validated.

This includes:

- Review forms.
- Contact forms.
- Future administrative forms.

Validation should exist at appropriate layers.

Do not rely exclusively on client-side validation.

Forms should provide clear feedback for:

- Invalid input.
- Required fields.
- Successful submissions.
- Unexpected errors.

Messages should be available in both supported languages.

---

# 20. Error Handling

Avoid silent failures.

When an error occurs:

- Handle it intentionally.
- Log useful information where appropriate.
- Avoid exposing sensitive technical information to users.
- Provide understandable feedback.

Do not show raw database errors or stack traces to public users.

---

# 21. Environment Variables and Secrets

Never hardcode:

- API keys.
- Database credentials.
- Service tokens.
- Administrative secrets.
- Private URLs intended to remain confidential.

Use environment variables.

Do not expose server-only environment variables to the client.

When adding a new environment variable, document it appropriately.

Example categories may include:

```text
NEXT_PUBLIC_*
SUPABASE_*
CAL_*
```

Actual variable names should follow the requirements of the selected integration.

---

# 22. Security Rules

Agents must treat the following as security-sensitive:

- Authentication.
- Authorization.
- Database policies.
- Administrative routes.
- User-submitted content.
- Third-party integrations.
- Environment variables.

Do not assume a user is authorized because a UI element is hidden.

Authorization must be enforced server-side and/or through database policies.

---

# 23. SEO Rules

SEO should be considered from the beginning.

Public pages should eventually support:

- Localized metadata.
- Meaningful page titles.
- Meaningful descriptions.
- Language-aware URLs.
- Proper heading hierarchy.
- Accessible semantic structure.
- Appropriate social metadata.

Do not add keyword stuffing.

Content should remain natural and useful.

English and Spanish SEO should be treated independently where appropriate.

---

# 24. Performance Rules

Prioritize a fast public website.

Avoid:

- Unnecessary JavaScript.
- Heavy dependencies.
- Large unoptimized images.
- Client-side rendering when server rendering is more appropriate.
- Unnecessary API requests.

Optimize images using the tools provided by the chosen framework.

Do not introduce premature optimization complexity.

---

# 25. Future Scalability Rules

The project may eventually expand beyond Version 1.

Potential future areas include:

- Lead management.
- Client profiles.
- Service coordination.
- Client portals.
- Payments.
- Operational tools.

However:

> Future possibilities must not justify unnecessary complexity today.

Do not build infrastructure for speculative features unless it provides meaningful value to the current Version 1 architecture.

The guiding principle is:

> Build small, but do not build something disposable.

---

# 26. Code Modification Rules

Before changing existing functionality:

1. Understand the existing behavior.
2. Identify dependencies.
3. Make the smallest safe change.
4. Preserve working functionality.
5. Validate affected areas.

Do not rewrite working code merely because a different approach appears more interesting.

Refactors should have a clear benefit.

Large refactors should be separated from unrelated feature implementation when possible.

---

# 27. Validation Before Completion

Before considering a task complete, agents should perform the appropriate validation for the change.

Depending on the project state, this may include:

- Type checking.
- Linting.
- Build validation.
- Relevant tests.
- Manual inspection.
- Responsive verification.

At minimum, changes should not knowingly introduce:

- TypeScript errors.
- Broken imports.
- Broken routes.
- Obvious runtime errors.
- Missing translations.
- Exposed secrets.

---

# 28. Definition of Done

A task is complete when:

- The requested functionality is implemented.
- The implementation respects `PROJECT.md`.
- The implementation stays within the current roadmap scope.
- Existing functionality remains intact.
- Relevant TypeScript checks pass.
- Relevant lint checks pass.
- Relevant build checks pass.
- New user-facing content supports English and Spanish where applicable.
- Security requirements are respected.
- The implementation does not introduce unnecessary dependencies or unrelated refactors.

---

# 29. Communication Rules

When reporting completed work, agents should communicate:

- What was implemented.
- Which important files were changed.
- Any architectural decisions made.
- Any limitations or follow-up work.
- Any validation performed.

Keep implementation summaries concise.

Do not claim that functionality has been tested if it has not been tested.

Do not claim production readiness without appropriate validation.

---

# 30. When Requirements Are Unclear

Agents should not invent major product requirements.

If missing information materially affects:

- Business logic.
- Architecture.
- Security.
- Data structure.
- User experience.
- Third-party integration.

The agent should identify the uncertainty before making an irreversible decision.

For minor implementation details, agents should use reasonable judgment and follow existing project patterns.

---

# 31. Prohibited Version 1 Scope Expansion

Unless explicitly requested, agents must not independently add:

- Payments.
- Shopping carts.
- Direct service checkout.
- Custom booking infrastructure.
- CRM functionality.
- Client portals.
- Complex dashboards.
- Staff management.
- Marketing automation platforms.
- Additional databases.
- Unrelated third-party services.

The goal is to complete a reliable Version 1 before expanding the platform.

---

# 32. Final Development Principles

All agents should follow these principles:

## Consultation First

Every potential client journey begins with a free consultation.

## Equal Languages

English and Spanish receive equal importance.

## Scope Discipline

Do not implement features that are not required.

## Security

Protect user data, administrative functionality, and credentials.

## Simplicity

Prefer understandable solutions.

## Maintainability

Write code that future developers and agents can understand.

## Reusability

Reuse patterns and components where appropriate.

## Mobile First

The public website must work well on mobile devices.

## Incremental Progress

Make focused improvements rather than unnecessary rewrites.

## Documentation First

Check project documentation before making significant decisions.

## No Disposable Architecture

Build Version 1 simply, but avoid decisions that would make reasonable future growth unnecessarily difficult.

---

# 33. Teaching-First Communication

Explain practical decisions in proportion to their impact. Cover what is being done, why it matters, applicable project constraints, meaningful tradeoffs, verification steps, and any uncertainty. Never provide private chain-of-thought; provide concise conclusions and evidence instead.

---

# 34. High-Level Agent Roles

## Orchestrator

Clarifies the objective, preserves scope, coordinates work, and ensures appropriate validation and delivery.

## Planner

Reviews requirements and the current implementation, identifies risks and decisions, and defines a focused approach before substantial work.

## Builder

Implements the approved scope using existing project conventions, preserves unrelated behavior, and reports validation and limitations.

## Reviewer/Auditor

Independently checks the implementation against requirements and evidence, identifies defects or risks, and distinguishes required corrections from recommendations.

---

# 35. Evidence-Based Reporting

Reports must distinguish confirmed facts, technical inferences, recommendations, assumptions, and unverified results. Never claim that code, tests, builds, browser behavior, deployment, or integrations were verified unless evidence supports the claim.

---

# 36. Git and Working Tree Discipline

Inspect the relevant working-tree state before changing existing work. Preserve user changes, avoid overwriting or mixing unrelated changes, and modify only the necessary files. Clearly distinguish work completed locally from work validated locally, committed, or pushed.

---

# 37. Proportional Workflow

Use this workflow when appropriate:

Understand → Plan → Approve → Implement → Validate → Review → Deliver

Keep light work light. Substantial, ambiguous, architectural, security-sensitive, or product-impacting work requires appropriate planning and review before implementation.
