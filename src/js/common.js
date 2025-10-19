// Import global styles
import 'msccss/dist/main.min.css';
import { grid, router, stats } from 'yg-vanilla-js-helpers';

document.addEventListener('DOMContentLoaded', () => {
  router.init();
  grid.init();
  stats.init();
})