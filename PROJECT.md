# C&M Concierge Website

## Project Overview

C&M Concierge is a bilingual concierge service based in Mérida, Yucatán, Mexico.

The business provides personalized assistance, coordination, local support,
and concierge services designed to help clients manage everyday needs,
activities, services, and situations that may require local knowledge or
additional assistance.

The primary purpose of this project is to create a professional bilingual
website that helps potential clients understand what C&M Concierge does,
build trust in the business, and convert visitors into qualified leads
through a free initial consultation.

English and Spanish have equal importance throughout the website.

The initial consultation is the primary entry point for all potential clients.
Visitors will not directly purchase or request individual services through
the website.

Instead, they will be encouraged to book a free consultation where
C&M Concierge can:

- Understand their needs.
- Answer initial questions.
- Determine whether C&M Concierge can assist.
- Identify the appropriate service or solution.
- Define the next steps.

This project is being developed as Version 1 of the C&M Concierge digital
presence.

In the distant future, the platform may evolve to support client management,
service coordination, customer portals, and other operational tools.

Those features are explicitly outside the scope of Version 1.

---

# 1. Product Goals

## Primary Goal

Convert website visitors into potential clients by encouraging them to book
a free initial consultation.

## Secondary Goals

- Clearly explain what C&M Concierge does.
- Present the available services and types of assistance.
- Build trust through professional presentation and customer reviews.
- Help visitors understand that they do not need to know exactly which
  service they need before contacting C&M Concierge.
- Provide equal access to information in English and Spanish.
- Promote featured packages and seasonal offers when available.
- Establish a professional and trustworthy online presence.
- Create a technical foundation that can support future growth without
  overengineering Version 1.

---

# 2. Core Conversion Flow

The primary customer journey should follow this structure:

Visitor
↓
Understands what C&M Concierge does
↓
Explores available services
↓
Discovers packages or promotions when available
↓
Builds trust through information and customer reviews
↓
Books a free initial consultation
↓
Initial video call
↓
C&M Concierge evaluates the client's needs
↓
The appropriate service or solution is identified
↓
Next steps are defined

All customer service journeys begin with the free initial consultation.

The website must not implement:

- Direct service purchasing.
- Direct service checkout.
- Online payments for services.
- A workflow that bypasses the consultation requirement.

Promotions and service packages must also direct interested visitors toward
the consultation process rather than bypassing it.

---

# 3. Target Audience

C&M Concierge serves people who need personalized assistance,
coordination, local support, or help managing everyday needs.

The website should be equally welcoming and accessible to:

- English-speaking users.
- Spanish-speaking users.

The platform should not assume that visitors already understand exactly
which service they need.

A core part of the user experience should communicate:

> You do not need to have everything figured out before contacting us.

The free consultation exists to help clients explain their situation and
determine how C&M Concierge may be able to assist them.

The website should communicate confidence, local knowledge,
personalized attention, and accessibility.

---

# 4. Languages and Internationalization

English and Spanish have equal importance throughout the website.

The website must:

- Provide complete content in both English and Spanish.
- Avoid treating one language as secondary.
- Include a clearly visible language selector.
- Maintain equivalent navigation and functionality in both languages.
- Use localized routes where appropriate.
- Support bilingual SEO from the beginning.

The selected language should affect:

- Navigation.
- Page content.
- Calls to action.
- Forms.
- Service descriptions.
- Promotional content.
- Reviews interface.
- Metadata.
- Validation messages.
- Error messages.
- Administrative content where applicable.

The initial architecture should support route-based internationalization.

Conceptually:

/en
/es

The final internationalization implementation should preserve a consistent
experience between both languages.

---

# 5. Brand Identity and Visual Direction

## 5.1 Primary Visual Sources

The visual identity of the website must be derived primarily from:

1. The official C&M Concierge logo.
2. The official C&M Concierge Facebook cover/banner.

These two assets are the canonical visual references for the website.

Other promotional flyers or campaign-specific graphics are not considered
primary sources for the website design system unless explicitly approved
in the future.

---

## 5.2 Color Direction

The website color system should be extracted directly from the official
logo and Facebook cover/banner.

The visual references indicate a color direction centered around:

- Deep teal.
- Teal and blue-green tones.
- Charcoal or dark gray.
- Warm cream or light neutral tones.
- Muted blue-gray or soft teal tones.

The exact hexadecimal values must be extracted from the source assets during
the design system implementation phase.

Color values should not be treated as final until they have been sampled
directly from the approved brand resources.

The future design system should define semantic color tokens similar to:

- brand-primary
- brand-primary-dark
- brand-secondary
- brand-dark
- brand-light
- brand-surface
- brand-muted

The final names and hexadecimal values will be defined during implementation.

---

## 5.3 Intended Color Usage

### Deep Teal

Primary active brand color.

Potential uses:

- Primary buttons.
- Calls to action.
- Important interactive elements.
- Highlights.
- Links.
- Brand accents.

### Charcoal

Primary dark foundation.

Potential uses:

- Primary text.
- Navigation.
- Footer.
- Dark sections.
- High-contrast elements.

### Warm Cream / Light Neutral

Primary light foundation.

Potential uses:

- Main backgrounds.
- Content sections.
- Cards.
- Reading areas.
- Light surfaces.

### Muted Blue-Gray / Soft Teal

Secondary interface color.

Potential uses:

- Alternate backgrounds.
- Informational sections.
- Secondary cards.
- Dividers.
- Promotional sections.
- Supporting interface elements.

The visual system should avoid relying exclusively on a simple
two-color pattern.

The combination of teal, charcoal, warm neutrals, and muted supporting tones
should create a visual experience that feels connected to the existing
C&M Concierge identity.

---

## 5.4 Brand Personality

The website should feel:

- Professional.
- Warm.
- Approachable.
- Trustworthy.
- Personalized.
- Organized.
- Helpful.
- Modern.
- Locally connected.

The design should feel polished without becoming overly corporate.

The business should feel like a real, personal concierge service rather than
a generic technology platform.

---

## 5.5 Photography and Imagery

Whenever possible, the website should prefer:

- Authentic photography.
- Real people.
- Real locations.
- Mérida-related environments.
- Lifestyle imagery connected to the services.
- Images that feel natural and believable.

Avoid generic corporate stock imagery when possible.

Imagery should reinforce the feeling that C&M Concierge is connected to
real life in Mérida.

---

# 6. Core Website Sections

Version 1 will initially focus on a primary public website.

The homepage should contain the following sections.

---

## 6.1 Header

The header should include:

- C&M Concierge logo.
- Primary navigation.
- English/Spanish language selector.
- Primary consultation call to action.

The consultation CTA should remain easily accessible throughout
the browsing experience.

---

## 6.2 Hero Section

The hero section should immediately communicate:

- What C&M Concierge does.
- Who it helps.
- The value of personalized concierge assistance.
- That the initial consultation is free.

The primary call to action should direct visitors to book a free consultation.

A secondary call to action may direct visitors toward the services section.

The hero should prioritize clarity over excessive marketing language.

---

## 6.3 About / What We Do

This section should explain the purpose and value of C&M Concierge.

It should communicate that C&M Concierge can help clients:

- Save time.
- Reduce stress.
- Coordinate everyday needs.
- Access local support.
- Navigate situations where additional assistance is useful.

The messaging should make it clear that visitors do not need to know exactly
which service they need before booking a consultation.

---

# 7. Services

The website should present the established service categories offered by
C&M Concierge.

Services should be presented as examples and categories of assistance rather
than as fixed products available for direct purchase.

Availability, pricing, scope, and specific requirements may be discussed
during the initial consultation.

---

## 7.1 Personal Assistance

Examples of support include:

- Errands.
- Grocery shopping.
- Costco and Sam's Club membership access where applicable.
- Appointment scheduling.
- Coordination of service installations.
- Coordination of everyday needs.

This category should communicate flexibility and personalized support.

---

## 7.2 Childcare

Examples may include:

- Short-term childcare.
- Long-term childcare.
- Last-minute childcare.
- Flexible arrangements based on client needs and availability.

The website should avoid implying guaranteed availability.

---

## 7.3 House Cleaning

Examples may include:

- Routine cleaning.
- Deep cleaning.
- Event preparation.
- Event cleanup.
- Home cleaning coordination.

---

## 7.4 Transportation & Tours

Examples may include:

- Reliable transportation.
- Transportation coordination.
- Personalized tours.

Availability should be communicated as subject to availability.

This category is distinct from Personalized Activity Itineraries.

Transportation and tours focus on the movement and tour experience itself.

---

## 7.5 Meal Preparation

Examples may include:

- Weekly meal preparation.
- One-time meal preparation.
- Menu planning.
- Grocery shopping.
- Grocery delivery options where available.
- Assistance with meal planning and routine organization.

---

## 7.6 Personalized Activity Itineraries

Examples may include:

- Personalized activity itineraries.
- Recommendations based on personal interests.
- Planning based on available time.
- Planning based on budget.
- Coordination of activities for a more organized and enjoyable experience.

This category is distinct from Transportation & Tours.

The primary purpose is helping clients plan and organize their activities.

---

## 7.7 Language Support & Real-Time Interpretation

This is a proposed additional service for C&M Concierge.

Examples may include:

- Real-time language assistance.
- Interpretation support.
- Communication support during appointments.
- Assistance during activities.
- Support during errands.
- Assistance during everyday situations where language may represent a barrier.

The exact scope of this service must be discussed during the initial
consultation.

The website should not describe this service as certified translation or
legal translation unless C&M Concierge explicitly establishes those
qualifications and capabilities.

---

# 8. How It Works

The website should clearly explain the C&M Concierge process.

The initial conceptual flow is:

1. Book a free consultation.
2. Tell us what you need.
3. We help identify the right solution.
4. Enjoy more time and less stress.

This section should reinforce that:

- The consultation is free.
- The client does not need to know exactly which service they need.
- C&M Concierge uses the consultation to better understand the situation.
- Services are personalized based on the client's needs.

---

# 9. Featured Packages & Offers

The website should support promotional packages and special offers.

This section should be optional.

If no active promotions exist, the section should not appear on the public
website.

The section may display a limited number of:

- Monthly packages.
- Seasonal offers.
- Featured services.
- Temporary promotions.
- Special combinations of services.

Promotional content may include:

- Title.
- Short description.
- Optional image.
- Optional validity period.
- Call to action.

Promotions must not include direct checkout.

The primary CTA should lead visitors toward:

- The free consultation.
- Additional information followed by the consultation.

The promotional system should be designed so that it can eventually be
managed through an administrative interface.

---

# 10. Reviews & Testimonials

The website should display approved customer reviews.

Visitors should also have the ability to submit a review.

The initial review submission process should include:

- Name.
- Rating.
- Written review.
- Optional service category.
- Submission date.

Future fields may be considered where useful.

Reviews submitted by users must not automatically appear publicly.

All reviews must enter a moderation process.

Possible review statuses:

- Pending.
- Approved.
- Rejected.
- Unpublished.

Only approved reviews should be displayed publicly.

---

# 11. Final Consultation CTA

The website should end with a strong call to action encouraging visitors
to book a free initial consultation.

The messaging should reinforce:

- The consultation is free.
- There is no obligation to know exactly which service is needed.
- The consultation helps C&M Concierge understand the client's needs.
- The first conversation is the beginning of the personalized service process.

---

# 12. Contact & Footer

The footer should include relevant contact methods.

Potential information includes:

- Email.
- WhatsApp.
- Facebook.
- Other official social media channels.
- Relevant business location information.

Contact information should be easy to update.

---

# 13. Booking System

## Booking Purpose

The booking system is used exclusively for the free initial consultation.

The consultation acts as the first filter and discovery stage for potential
clients.

The consultation will initially be conducted by a single C&M Concierge
representative.

---

## Version 1 Requirements

The booking system should support:

- Free consultations.
- Online scheduling.
- Calendar availability.
- Time zone handling.
- Prevention of double bookings.
- Confirmation notifications.
- Rescheduling.
- Cancellation.

---

## Initial Booking Architecture

Version 1 is expected to use an external booking platform rather than a
custom-built scheduling system.

The initial recommended integration is Cal.com.

Conceptually:

Website
↓
Book Free Consultation
↓
Cal.com
↓
Calendar Availability
↓
Confirmed Booking
↓
Video Call

The booking provider should connect to the calendar used by the C&M Concierge
representative conducting the consultation.

A custom booking system is explicitly outside the scope of Version 1.

---

# 14. Reviews System

The reviews system will be developed as part of Version 1.

The initial architecture should follow this conceptual flow:

Customer
↓
Review Form
↓
Database
↓
Pending Moderation
↓
Admin Review
↓
Approved / Rejected / Unpublished
↓
Public Website

Reviews should be stored in the project database.

The system should support future expansion, including:

- Review editing.
- Review deletion.
- Featured reviews.
- Service-specific reviews.
- Review request automation.

---

# 15. Administrative Area

Version 1 should include a private administrative area.

The initial purpose of the administrative area is content moderation and
basic content management.

---

## 15.1 Reviews

Initial functionality may include:

- View pending reviews.
- Approve reviews.
- Reject reviews.
- Edit reviews.
- Unpublish reviews.

---

## 15.2 Promotions

The architecture should allow promotions to eventually be managed through
the administrative area.

The initial implementation may begin with static or database-driven
promotional content depending on development priorities.

Future functionality may include:

- Create promotions.
- Edit promotions.
- Activate promotions.
- Schedule promotions.
- Expire promotions.

---

## 15.3 Future Administrative Functionality

Potential future functionality may include:

- Client management.
- Service management.
- Booking management.
- Operational dashboards.
- Internal notes.
- Staff management.

These features are not part of Version 1.

---

# 16. Technical Stack

The recommended Version 1 stack is:

## Framework

- Next.js
- TypeScript

## Styling

- Tailwind CSS

## UI Components

- shadcn/ui where appropriate.

## Internationalization

- Route-based internationalization.
- Equal English and Spanish support.
- Localization integrated into the application architecture from the
  beginning.

The exact internationalization library will be confirmed during project setup.

## Database and Authentication

- Supabase.
- PostgreSQL.
- Supabase Auth.
- Row Level Security.

## Booking

- Cal.com.

## Hosting

- Vercel.

## Source Control

- GitHub.

## Development Environment

- OpenCode.

---

# 17. High-Level Architecture

Users
│
├── English
│
└── Spanish
     │
     ▼
C&M Concierge Website
     │
     ▼
Next.js
     │
┌────┼────────────┐
│    │            │
▼    ▼            ▼
Content Booking   Reviews
│    │            │
│  Cal.com     Supabase
│    │            │
│ Calendar     Database
│    │            │
│ Video Call   Admin Panel
│
▼
Vercel

---

# 18. Initial Data Model

The Version 1 database should initially focus on:

- Reviews.
- Authentication.
- Potential promotional content.

---

## 18.1 Reviews

Initial conceptual fields:

id
name
rating
comment
service
status
created_at
updated_at

Possible future fields:

featured
language
customer_reference
admin_notes

---

## 18.2 Promotions

Initial conceptual fields may include:

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

The final database schema should be defined before implementation.

All public and administrative access must be protected by appropriate
database policies.

---

# 19. Design Principles

The website must be:

- Mobile-first.
- Responsive.
- Accessible.
- Easy to understand.
- Visually clean.
- Easy to navigate.

The interface should prioritize clarity and trust.

Design decisions should reflect the established C&M Concierge visual identity.

The website should not introduce a new visual identity that conflicts with
the official logo and Facebook cover/banner.

---

# 20. Version 1 Scope

Version 1 includes:

- Bilingual public website.
- Equal English and Spanish support.
- Localized navigation.
- Service presentation.
- Free consultation booking integration.
- Featured packages and promotional offers.
- Customer review submission.
- Review moderation.
- Public testimonials.
- Basic administrative access.
- Responsive design.
- SEO foundation.
- Production deployment.

---

# 21. Explicitly Out of Scope for Version 1

The following features must not be implemented unless the project scope is
explicitly updated:

- Direct service purchasing.
- Online payments.
- Custom booking system.
- CRM.
- Full client management.
- Client portal.
- Service request portal.
- Staff management.
- Complex operational dashboards.
- Automated service fulfillment workflows.
- Full marketing automation platform.

---

# 22. Future Vision

The website may eventually evolve into a broader digital platform for
C&M Concierge.

Potential future functionality may include:

Website
↓
Lead Management
↓
Client Profiles
↓
Service Requests
↓
Service Coordination
↓
Client Portal
↓
Payments
↓
Operational Management

These possibilities should influence architectural decisions where reasonable.

However, future possibilities must not create unnecessary complexity in
Version 1.

The guiding principle is:

> Build small, but do not build something disposable.

---

# 23. Project Principles

All development decisions should follow these principles.

## Consultation First

Every potential client journey begins with a free initial consultation.

## Equal Languages

English and Spanish receive equal importance.

## Service Flexibility

The website should communicate that C&M Concierge provides personalized
assistance and that not every client needs a predefined service package.

## Simplicity

Version 1 should solve the current business problem without unnecessary
features.

## Scalability

The project should be able to grow without requiring a complete rebuild.

## Security

Authentication, environment variables, database access, and administrative
functionality must follow secure practices.

## Maintainability

Code should be modular, understandable, and documented.

## Mobile First

The website should provide an excellent experience on mobile devices.

## Reusability

Components should be reusable where appropriate.

---

# 24. Current Project Status

Project Phase: Implementation

Current Version: V1

Completed Implementation Baseline:

- Milestones 1, 2, and 3 form the completed approved implementation baseline.
- Milestone 3 is the most recently completed implementation milestone.

Next Milestone: Milestone 4 — Booking Integration
