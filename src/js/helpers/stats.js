// src/js/grid.js
export function initStats() {
    const statsContainer = document.querySelector('#stats');
    if (statsContainer) {
        statsContainer.innerHTML = `${window.innerWidth} x ${window.innerHeight}`

        window.addEventListener('resize', (e) => {
            statsContainer.innerHTML = `${window.innerWidth} x ${window.innerHeight}`
        });

        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 's') {
                statsContainer.classList.toggle('show')
            }
        });
    }
}