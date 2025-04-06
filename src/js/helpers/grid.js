// src/js/helpers/grid.js

/**
 * Creates the grid overlay structure
 * @returns {HTMLElement} The grid overlay element
 */
function createGridOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'grid-overlay show';

  const container = document.createElement('div');
  container.className = 'container';

  const row = document.createElement('div');
  row.className = 'row';

  container.appendChild(row);
  overlay.appendChild(container);

  return overlay;
}

/**
 * Toggles the grid overlay visibility
 * @param {HTMLElement} overlay - The grid overlay element
 * @param {boolean} show - Whether to show or hide the overlay
 */
function toggleGridOverlay(overlay, show) {
  if (show) {
    if (!overlay.children.length) {
      const newOverlay = createGridOverlay();
      overlay.innerHTML = '';
      overlay.appendChild(newOverlay);
    }
    overlay.classList.add('show');
  } else {
    overlay.classList.remove('show');
  }
}

/**
 * Initializes the grid overlay functionality
 */
export function initGrid() {
  // Create and insert grid overlay
  const overlay = createGridOverlay();
  document.body.insertBefore(overlay, document.body.firstChild);

  // Add keyboard shortcut listener
  const handleKeyPress = (e) => {
    if (e.key.toLowerCase() === 'g') {
      toggleGridOverlay(overlay, !overlay.classList.contains('show'));
    }
  };

  document.addEventListener('keydown', handleKeyPress);

  // Cleanup function
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
    overlay.remove();
  };
}
