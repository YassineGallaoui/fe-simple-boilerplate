# Simple Boilerplate

A modern, lightweight boilerplate for web development using HTML, SCSS, and JavaScript.

## Features

- 🚀 Vite for fast development and building
- 🎨 SCSS with [minimal-scss](https://github.com/YassineGallaoui/minimal-scss) utility library
- 📝 ESLint and Prettier for code quality
- 🐶 Husky for pre-commit hooks
- 📱 Responsive design with mobile-first approach
- 🎯 Modern JavaScript (ES6+)
- 🧭 Client-side routing system
- 📊 Built-in performance stats (press 'S' to toggle)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/simple-boilerplate.git
cd simple-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project Structure

```
simple-boilerplate/
├── src/
│   ├── js/
│   │   ├── helpers/
│   │   │   ├── routing/
│   │   │   │   ├── router.js
│   │   │   │   └── appState.js
│   │   │   ├── auth.js
│   │   │   ├── grid.js
│   │   │   └── stats.js
│   │   ├── auth.js
│   │   ├── common.js
│   │   ├── home.js
│   │   └── page2.js
│   ├── styles/
│   │   ├── auth.scss       # Authentication page styles
│   │   └── home.scss       # Home page styles
│   └── html/
│       ├── authentication.html
│       └── page2.html
├── public/
│   └── shaders/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Styling with minimal-scss

This project uses [minimal-scss](https://github.com/YassineGallaoui/minimal-scss), a lightweight SCSS utility library that provides:

### Grid System
- 12-column responsive grid with breakpoints (sm, md, lg)
- Example: `<div class="sm-col-4 md-col-6 lg-col-8">`

### Flexbox Utilities
- `flex`, `column`, `row`
- Justify content: `jc-start`, `jc-center`, `jc-end`, `jc-between`, `jc-around`
- Align items: `ai-start`, `ai-center`, `ai-end`, `ai-stretch`

### Spacing Utilities
- Margins: `m-1`, `mt-2`, `ml-4`, etc.
- Paddings: `p-1`, `pt-2`, `pl-4`, etc.
- Values from 1 to 12 (each unit = 0.5rem)

### Text Utilities
- Font sizes: `fs-xs`, `fs-sm`, `fs-md`, `fs-lg`, `fs-xl`
- Text alignment: `text-left`, `text-center`, `text-right`
- Font weights: `fw-light`, `fw-normal`, `fw-bold`

### Positioning
- `pos-relative`, `pos-absolute`, `pos-fixed`, `pos-sticky`
- `top-0`, `right-0`, `bottom-0`, `left-0`

### CSS Variables Available
```scss
--background-color: #ebecd6;
--foreground-color: #0a100d;
--accent-light-color: #7ba9f4;
--accent-color: #3066be;
--accent-dark-color: #0e4193;
--transition-duration: 0.3s;
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Client-Side Routing

The project includes a custom client-side router that handles:
- Page transitions with animations
- Browser history management
- Dynamic content loading

### Navigation
- Use absolute paths: `href="/authentication"`, `href="/page2"`
- The router automatically handles `.html` extensions

## Performance Stats

Press 'S' key to toggle performance statistics showing:
- Window dimensions
- Aspect ratio  
- Real-time FPS counter

## Pre-commit Hooks

Before each commit, the following checks are automatically run:
- ESLint
- Prettier
- Build process

If any of these checks fail, the commit will be prevented.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
