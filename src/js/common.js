// Import global styles
import { grid, router, stats } from 'yg-vanilla-js-helpers';
import '../styles/common.scss';
import '/node_modules/msccss/dist/main.min.css';

document.addEventListener('DOMContentLoaded', () => {
  router.init();
  grid.init({
    show: true,
    columnsColor: 'rgba(255, 0, 0, 0.1)',
    columnsBorderColor: 'rgba(238, 0, 0, 0.6)',
    columnsBorderWidth: '1px',
    columnsBorderStyle: 'dashed',
  });
  stats.init();
})