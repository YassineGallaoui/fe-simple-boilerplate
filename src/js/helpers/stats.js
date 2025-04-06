// src/js/grid.js
const getCurrentInfo = () => {
    return `
        <div>${window.innerWidth} x ${window.innerHeight}</div>
        <div>Aspect Ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</div>
    `;
};

export function initStats() {
    // Create stats div
    const statsDiv = document.createElement('div');
    statsDiv.id = 'stats';
    statsDiv.className = 'stats';
    statsDiv.innerHTML = getCurrentInfo();

    // Insert as first child of body
    document.body.insertBefore(statsDiv, document.body.firstChild);

    // Add event listeners
    window.addEventListener('resize', () => {
        statsDiv.innerHTML = getCurrentInfo();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 's') {
            statsDiv.classList.toggle('show');
        }
    });
}
