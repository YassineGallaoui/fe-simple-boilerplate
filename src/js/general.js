import { initGrid } from "./helpers/grid";
import { initRouter } from "./helpers/router";
import { initStats } from "./helpers/stats";

document.addEventListener("DOMContentLoaded", () => {
	initRouter();
	initGrid();
	initStats();
});
