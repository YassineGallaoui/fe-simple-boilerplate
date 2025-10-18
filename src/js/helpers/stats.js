class Stats {
    constructor() {
        this.statsDiv = null;
        this.handleResize = this.handleResize.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    /**
     * Gets the current window information
     * @returns {string} HTML string with window dimensions and aspect ratio
     */
    getCurrentInfo() {
        return `
      <div>${window.innerWidth} x ${window.innerHeight}</div>
      <div>Aspect Ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</div>
    `;
    }

    /**
     * Handles window resize events
     */
    handleResize() {
        this.statsDiv.innerHTML = this.getCurrentInfo();
    }

    /**
     * Handles keyboard events for stats toggling
     * @param {KeyboardEvent} e - The keyboard event
     */
    handleKeyPress(e) {
        if (e.key.toLowerCase() === 's') {
            this.statsDiv.classList.toggle('show');
        }
    }

    /**
     * Initializes the stats functionality
     */
    init() {
        // Create stats div
        this.statsDiv = document.createElement('div');
        this.statsDiv.id = 'stats';
        this.statsDiv.className = 'stats';
        this.statsDiv.innerHTML = this.getCurrentInfo();

        // Insert as first child of body
        document.body.insertBefore(this.statsDiv, document.body.firstChild);

        // Add event listeners
        window.addEventListener('resize', this.handleResize);
        document.addEventListener('keydown', this.handleKeyPress);

        // Return cleanup function
        return () => {
            window.removeEventListener('resize', this.handleResize);
            document.removeEventListener('keydown', this.handleKeyPress);
            this.statsDiv.remove();
        };
    }
}

export const stats = new Stats();
