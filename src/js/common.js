// Import global styles
import 'msccss/dist/main.min.css';
import { grid, router, stats } from 'yg-vanilla-js-helpers';
import '../styles/common.scss';

document.addEventListener('DOMContentLoaded', () => {
  router.init();
  grid.init();
  stats.init();
})