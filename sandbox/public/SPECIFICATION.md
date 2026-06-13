# Kudos System Specification

---

## 1. System Overview

The Kudos system allows employees to send messages of appreciation ("kudos") to colleagues. These messages are displayed in a public feed on the internal portal.

The system also includes moderation capabilities for administrators to ensure content appropriateness.

---

## 2. Requirements

### User Requirements

- Users can select a colleague from a list
- Users can write a short appreciation message
- Users can submit kudos
- Users can view a public feed of all kudos

### Admin Requirements (Moderation)

- Admins can hide or unhide inappropriate kudos messages
- Hidden kudos must NOT appear in the public feed
- Moderation actions should not delete data permanently (soft delete approach)

---

## 3. Database Design

### Kudos Table

- id (string)
- fromUser (string)
- toUser (string)
- message (string)
- createdAt (timestamp)
- is_visible (boolean, default: true)

---

## 4. API Routes

### GET /api/kudos

Returns all visible kudos (is_visible = true)

### POST /api/kudos

Creates a new kudos message

### POST /api/admin/toggle

Toggles visibility of a kudos message (hide/unhide)

---

## 5. System Behavior Rules

- Only visible kudos appear in the feed
- Admin controls visibility via toggle endpoint
- Data is stored in-memory for prototype (or database in production)
