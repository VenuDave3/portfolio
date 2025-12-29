# API Contracts - Venu Dave Portfolio

## Overview
Multi-page portfolio with contact form backend integration.

## Endpoints

### 1. Contact Form Submission
**POST** `/api/contact`

**Request:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Response (201):**
```json
{
  "id": "string",
  "success": true,
  "message": "Message received successfully"
}
```

**Response (422):** Validation error

### 2. Get Contact Messages (Admin)
**GET** `/api/contact`

**Response (200):**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "company": "string | null",
    "message": "string",
    "created_at": "datetime",
    "read": "boolean"
  }
]
```

## MongoDB Collections

### `contact_messages`
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String | null,
  message: String,
  created_at: DateTime,
  read: Boolean (default: false)
}
```

## Frontend Integration

### Contact.jsx Changes
- Replace mock `handleSubmit` with actual API call to `/api/contact`
- Handle error states
- Show success/error feedback via existing UI

## Mock Data Location
- `/app/frontend/src/data/mock.js` - Contains all portfolio content (static, no backend needed)
- Contact form is the only dynamic feature requiring backend
