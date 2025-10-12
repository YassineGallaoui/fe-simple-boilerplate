# Authentication System Documentation

## Overview

This authentication system provides a complete login/signup mechanism that connects a frontend interface with a backend API using email/password authentication.

## Features

- **Login/Signup Forms**: Tabbed interface with form validation
- **Backend Integration**: Connects to REST API endpoints
- **Local Storage**: Persists user session data
- **Responsive Design**: Mobile-friendly authentication forms
- **Real-time Feedback**: Success/error messages
- **Auto-redirect**: Seamless navigation after authentication
- **Auth State Management**: Global authentication state handling

## Frontend Structure

### Files
- `login.html` - Authentication page with login/signup forms
- `src/js/auth.js` - Authentication form logic and API calls
- `src/js/helpers/auth.js` - Authentication utility functions and services
- `src/styles/auth.scss` - Authentication page styles
- `src/js/home.js` - Homepage with auth status display

### Key Components

#### AuthService Class
```javascript
// Check authentication status
AuthService.isAuthenticated()

// Get current user
AuthService.getCurrentUser()

// Login user
AuthService.login(email, password)

// Register user
AuthService.signup(email, password)

// Logout user
AuthService.logout()
```

#### AuthEvents System
```javascript
// Listen for login event
AuthEvents.on('login', (user) => {
  console.log('User logged in:', user);
});

// Listen for logout event
AuthEvents.on('logout', () => {
  console.log('User logged out');
});
```

## Backend Integration

### API Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Request Format
```javascript
// Login
{
  "email": "user@example.com",
  "password": "userpassword"
}

// Signup
{
  "email": "user@example.com", 
  "password": "userpassword"
}
```

### Response Format
```javascript
// Login Success
{
  "message": "Login effettuato con successo",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}

// Signup Success
{
  "message": "Utente registrato con successo",
  "userId": "user_id"
}

// Error
{
  "error": "Error message"
}
```

## Usage

### 1. Starting the Servers

Backend:
```bash
cd be-simple-boilerplate
npm start
# Server runs on http://localhost:3000
```

Frontend:
```bash
cd fe-simple-boilerplate
npm run dev  
# Development server runs on http://localhost:5173
```

### 2. Accessing Authentication

- Navigate to `/login.html` for the authentication page
- Use the tabs to switch between Login and Signup
- Form validation provides real-time feedback
- Successful authentication redirects to homepage

### 3. Authentication State

The system automatically:
- Shows login link when user is not authenticated
- Displays user email and logout button when authenticated
- Persists login state across browser sessions
- Handles logout with confirmation message

## Customization

### Styling
Modify `src/styles/auth.scss` to customize:
- Form appearance
- Color scheme
- Responsive breakpoints
- Message styling

### Validation
Update `AuthService` methods to change:
- Password requirements
- Email validation rules
- Form validation logic

### API Configuration
Change the API base URL in `src/js/helpers/auth.js`:
```javascript
static API_BASE_URL = 'http://localhost:3000/api/auth';
```

## Security Notes

- Passwords are hashed on the backend using SHA-256
- User sessions are stored in localStorage (consider JWT for production)
- CORS is enabled for cross-origin requests
- Input validation on both frontend and backend

## Error Handling

The system handles various error scenarios:
- Network connectivity issues
- Invalid credentials
- Duplicate email registration
- Server errors
- Client-side validation errors

Each error displays appropriate user-friendly messages with styling to indicate the error type (success, error, info).