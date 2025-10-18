// Import global styles
import '@yassine-gallaoui/minimal-scss/dist/main.min.css';

import { grid } from './helpers/grid';
import { router } from './helpers/routing/router';
import { stats } from './helpers/stats';


document.addEventListener('DOMContentLoaded', () => {
  router.init();
  grid.init();
  stats.init();
})