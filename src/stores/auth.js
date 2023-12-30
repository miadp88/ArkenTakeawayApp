import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, 
    isAuthenticated: false,
  }),
  actions: {
    login(username, password) {
      if (username === 'UCL2024' && password === 'ucl2024') {
        this.user = { username };
        this.isAuthenticated = true;
      } else {
        console.error('Invalid credentials. Entered:', { username, password });
        throw new Error('Invalid credentials');
      }
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
