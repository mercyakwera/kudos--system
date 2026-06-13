# Kudos System Specification

## Overview

A feature that allows employees to give kudos to colleagues with a message. Kudos are displayed in a public feed.

---

## Functional Requirements

### User Features

- Users can select another employee from a list
- Users can write a short appreciation message
- Users can submit kudos
- Users can view a public feed of all kudos

### Admin Features

- Admins can hide inappropriate kudos
- Hidden kudos are not visible in the public feed
- Admin actions affect visibility only (soft delete)

---

## Data Model

### Kudos

- id (string)
- fromUser (string)
- toUser (string)
- message (string)
- createdAt (date)
- is_visible (boolean, default: true)

---

## API Endpoints

### POST /api/kudos

Creates a new kudos entry

### GET /api/kudos

Returns only visible kudos

### POST /api/admin/toggle

Toggles visibility of a kudos item

---

## Rules

- Only visible kudos appear in feed
- Admin can hide/show any kudos
