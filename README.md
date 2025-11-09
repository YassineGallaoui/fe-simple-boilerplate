# FE Simple Boilerplate

A modern frontend boilerplate built with Vite, SCSS, and utility-first CSS. Features client-side routing, grid overlay for development, and performance stats panel.

## Features

- **Vite**: Fast build tool with hot module replacement
- **SCSS**: Sass preprocessing for advanced styling
- **Client-side Routing**: Page transitions with history API
- **Grid Overlay**: Toggleable CSS grid overlay (Alt+G) for layout debugging
- **Performance Stats**: Stats panel (Alt+S)
- **Web Components**: Reusable header and footer components
- **ESLint + Prettier**: Code linting and formatting
- **Husky**: Git hooks for pre-commit quality checks

## Project Structure

```
fe-simple-boilerplate/
├── index.html                 # Main entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration with HTML flattening
├── src/
│   ├── html/
│   │   ├── page2.html        # Additional page for routing
│   ├── js/
│   │   ├── common.js         # Global setup (router, grid, stats, etc...)
│   │   ├── home.js           # Home page logic
│   │   ├── page2.js          # Page 2 logic
│   │   └── components/
│   │       ├── header-component.js  # Header web component
│   │       └── footer-component.js  # Footer web component
│   └── styles/
│       ├── common.scss       # Global styles
│       ├── home.scss         # Home page styles
│       └── page2.scss        # Page 2 styles
```

## Dependencies

- `msccss`: Lightweight classes-utility CSS library
- `yg-vanilla-js-helpers`: Grid overlay, stats panel, and router utilities

## Using from GitHub Template

To create a new project using this boilerplate:

1. **Go to the GitHub repository:** Visit [https://github.com/YassineGallaoui/simpleBoilerplate](https://github.com/YassineGallaoui/simpleBoilerplate)

2. **Use this template:** Click the "Use this template" button (green button) to create a new repository based on this boilerplate.

3. **Create your repository:** Choose a name for your new repository and create it on GitHub.

4. **Clone your new repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

5. **Continue with the setup below.**

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Development Features

### Grid Overlay
- **Toggle**: Press `Alt + G` to show/hide the CSS grid overlay
- **Purpose**: Helps with layout debugging and responsive design
- **Default**: Visible on page load (configured in `common.js`)

### Performance Stats
- **Toggle**: Press `Alt + S` to show/hide the performance panel
- **Metrics**: FPS, memory usage, and render time
- **Default**: Hidden on page load

### Routing
- Client-side routing with smooth page transitions
- Automatic HTML flattening in production builds
- History API support for browser back/forward buttons

## Web Components

The boilerplate includes two native Web Components:

- `<header-component>`: Site header with navigation
- `<footer-component>`: Site footer

These are defined in `src/js/components/` and can be used in any HTML file.

## Styling

- Uses SCSS for advanced CSS features (variables, nesting, mixins)
- Imports `msccss` utility classes for rapid prototyping
- Page-specific styles in `src/styles/`
- Global styles in `src/styles/common.scss`
