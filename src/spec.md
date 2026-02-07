# Specification

## Summary
**Goal:** Build a responsive English marketing website for “IQRA COMMUNICATION” (mobile accessories + mobile recharge/service shop) with a simple inquiry flow and an admin area to review submissions.

**Planned changes:**
- Create a single-page homepage with sections: Hero (shop name + tagline), Services, Products/Accessories highlight, Gallery (static images), and Contact.
- Add top navigation/in-page anchors to jump to each homepage section.
- Populate Contact with click-to-call phone numbers: 9053030920 and 7027835322.
- Add an “Inquiry” form (name, phone, message) with required-field validation and success/error UI states.
- Implement backend inquiry storage in the single Motoko actor with `createInquiry(name, phone, message)` and admin-only `listInquiries()` using a caller principal allowlist, persisted in stable state.
- Add an admin page that requires Internet Identity login and lists inquiries (newest first) in a table (created time, name, phone, message) loaded via React Query with loading/empty/error states.
- Apply a cohesive theme (teal/green base with red accents, bold headings, clean card-based layout; avoid blue/purple as primary colors).
- Add generated static images under `frontend/public/assets/generated` and use them in the hero and services/products sections.

**User-visible outcome:** Visitors can view a polished, responsive marketing homepage for IQRA COMMUNICATION, tap to call the listed phone numbers, and submit inquiries; an authenticated admin can sign in with Internet Identity to view submitted inquiries in a table.
