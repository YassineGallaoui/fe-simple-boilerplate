// src/js/grid.js
export function initGrid() {
    const overlay = document.querySelector('.grid-overlay');
    let columnCount = getComputedStyle(overlay).getPropertyValue('--columns');

    const keydownHandler = (e) => {
        if (e.key.toLowerCase() === 'g') {
            overlay.classList.toggle('show')
            overlay.innerHTML = ""
            for (let i = 0; i < columnCount; i++) {
                const col = document.createElement('div');
                overlay.appendChild(col);
            }
        }
    };
    const loadHandler = () => {
        if (overlay.classList.contains('show')) {
            overlay.innerHTML = ""
            for (let i = 0; i < columnCount; i++) {
                const col = document.createElement('div');
                overlay.appendChild(col);
            }
        }
    };
    const resizeHandler = (e) => {
        columnCount = getComputedStyle(overlay).getPropertyValue('--columns');
        overlay.innerHTML = ""
        for (let i = 0; i < columnCount; i++) {
            const col = document.createElement('div');
            overlay.appendChild(col);
        }
    };


    window.addEventListener('resize', (e) => resizeHandler(e));
    window.addEventListener('load', (e) => loadHandler(e));
    document.addEventListener('keydown', (e) => keydownHandler(e));

    return () => {
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('load', loadHandler);
        document.removeEventListener('keydown', keydownHandler);
    };
}