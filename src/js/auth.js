import { AuthEvents, AuthService } from './helpers/auth.js';

// DOM elements
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const authMessage = document.getElementById('authMessage');

// Tab switching functionality
loginTab.addEventListener('click', () => {
  console.log("Login tab clicked");
  showLogin();
});

signupTab.addEventListener('click', () => {
  console.log("Signup tab clicked");
  showSignup();
});

function showLogin() {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
  clearMessage();
}

function showSignup() {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  clearMessage();
}

// Form submission handlers
loginForm.addEventListener('submit', handleLogin);
signupForm.addEventListener('submit', handleSignup);

async function handleLogin(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    showMessage('Please fill in all fields', 'error');
    return;
  }

  if (!AuthService.isValidEmail(email)) {
    showMessage('Please enter a valid email address', 'error');
    return;
  }

  try {
    showMessage('Logging in...', 'info');
    
    const result = await AuthService.login(email, password);

    if (result.success) {
      showMessage('Login successful!', 'success');
      
      // Emit login event
      AuthEvents.emit('login', result.user);
      
      // Redirect to homepage after a short delay
      setTimeout(() => {
        window.location.href = './index.html';
      }, 1500);
    } else {
      showMessage(result.error, 'error');
    }
  } catch (error) {
    showMessage('Connection error. Please try again.', 'error');
  }
}

async function handleSignup(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (!email || !password || !confirmPassword) {
    showMessage('Please fill in all fields', 'error');
    return;
  }

  if (!AuthService.isValidEmail(email)) {
    showMessage('Please enter a valid email address', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showMessage('Passwords do not match', 'error');
    return;
  }

  if (!AuthService.isValidPassword(password)) {
    showMessage('Password must be at least 6 characters long', 'error');
    return;
  }

  try {
    showMessage('Creating account...', 'info');
    
    const result = await AuthService.signup(email, password);

    if (result.success) {
      showMessage('Account created successfully! You can now login.', 'success');
      
      // Switch to login form and prefill email
      setTimeout(() => {
        showLogin();
        document.getElementById('loginEmail').value = email;
      }, 2000);
    } else {
      showMessage(result.error, 'error');
    }
  } catch (error) {
    showMessage('Connection error. Please try again.', 'error');
  }
}

function showMessage(message, type) {
  authMessage.textContent = message;
  authMessage.className = `auth-message ${type}`;
  authMessage.style.display = 'block';
}

function clearMessage() {
  authMessage.style.display = 'none';
  authMessage.textContent = '';
  authMessage.className = 'auth-message';
}

// Check if user is already logged in
function checkAuthStatus() {
  const user = AuthService.getCurrentUser();
  if (user) {
    showMessage('You are already logged in!', 'info');
    setTimeout(() => {
      window.location.href = './index.html';
    }, 2000);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  checkAuthStatus();
});