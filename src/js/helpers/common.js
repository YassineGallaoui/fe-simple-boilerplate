// Import global styles
import '@yassine-gallaoui/minimal-scss/dist/main.min.css';

import { grid } from './grid';
import { router } from './routing/router';
import { stats } from './stats';


document.addEventListener('DOMContentLoaded', () => {
  router.init();
  grid.init();
  stats.init();
})