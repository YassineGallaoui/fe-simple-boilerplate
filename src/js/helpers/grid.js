// src/js/grid.js
export function initGrid() {
    const overlay = document.querySelector('.grid-overlay');
    let columnCount = getComputedStyle(overlay).getPropertyValue('--columns');

    window.addEventListener('resize', (e) => {
        columnCount = getComputedStyle(overlay).getPropertyValue('--columns');
        overlay.innerHTML = ""
        for (let i = 0; i < columnCount; i++) {
            const col = document.createElement('div');
            overlay.appendChild(col);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'g') {
            overlay.classList.toggle('show')
            overlay.innerHTML = ""
            for (let i = 0; i < columnCount; i++) {
                const col = document.createElement('div');
                overlay.appendChild(col);
            }
        }
    });
}