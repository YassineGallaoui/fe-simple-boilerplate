// Import global styles
import { grid, router, stats } from 'yg-vanilla-js-helpers';
import '../styles/common.scss';
import '/node_modules/msccss/dist/main.min.css';

document.addEventListener('DOMContentLoaded', () => {
  router.init();
  grid.init(true);
  stats.init();
})