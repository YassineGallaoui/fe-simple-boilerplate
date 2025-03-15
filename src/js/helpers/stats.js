// src/js/grid.js

const getCurrentInfo = () => {
	return `
        <div>${window.innerWidth} x ${window.innerHeight}</div>
        <div>Aspect Ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</div>
    `;
};
export function initStats() {
	const statsContainer = document.querySelector("#stats");
	if (statsContainer) {
		statsContainer.innerHTML = getCurrentInfo();

		window.addEventListener("resize", () => {
			statsContainer.innerHTML = getCurrentInfo();
		});

		document.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === "s") {
				statsContainer.classList.toggle("show");
			}
		});
	}
}
