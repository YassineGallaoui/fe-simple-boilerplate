import '../styles/home.scss';
import { AuthEvents, AuthService } from './auth.js';

// Authentication status management
function updateAuthStatus() {
  const authStatusElement = document.getElementById('authStatus');
  const user = AuthService.getCurrentUser();

  if (user) {
    authStatusElement.innerHTML = `
      <span class="user-greeting">Hello, ${user.email}!</span>
      <button id="logoutBtn" class="logout-btn">Logout</button>
    `;
    
    // Add logout functionality
    document.getElementById('logoutBtn').addEventListener('click', logout);
  } else {
    authStatusElement.innerHTML = `
      <a href="./login.html" class="login-link">Login</a>
    `;
  }
}

function logout() {
  AuthService.logout();
  AuthEvents.emit('logout');
  updateAuthStatus();
  
  // Show logout message
  const message = document.createElement('div');
  message.className = 'logout-message';
  message.textContent = 'You have been logged out successfully!';
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.remove();
  }, 3000);
}

// Listen for auth events
AuthEvents.on('login', () => {
  updateAuthStatus();
});

AuthEvents.on('logout', () => {
  updateAuthStatus();
});

// Initialize auth status on page load
document.addEventListener('DOMContentLoaded', () => {
  updateAuthStatus();
});
