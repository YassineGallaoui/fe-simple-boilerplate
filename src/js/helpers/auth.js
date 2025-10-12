// Authentication utility functions
export class AuthService {
  static API_BASE_URL = 'http://localhost:3000/api/auth';
  
  // Get current user from localStorage
  static getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  
  // Check if user is authenticated
  static isAuthenticated() {
    return this.getCurrentUser() !== null;
  }
  
  // Set user in localStorage
  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // Remove user from localStorage
  static logout() {
    localStorage.removeItem('user');
  }
  
  // Login API call
  static async login(email, password) {
    const response = await fetch(`${this.API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      this.setUser(data.user);
      return { success: true, user: data.user };
    } else {
      return { success: false, error: data.error || 'Login failed' };
    }
  }
  
  // Signup API call
  static async signup(email, password) {
    const response = await fetch(`${this.API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false, error: data.error || 'Signup failed' };
    }
  }
  
  // Validate email format
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Validate password strength
  static isValidPassword(password) {
    return password && password.length >= 6;
  }
}

// Event dispatcher for authentication state changes
export class AuthEvents {
  static listeners = {
    login: [],
    logout: []
  };
  
  static on(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    }
  }
  
  static emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data));
    }
  }
  
  static off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
  }
}