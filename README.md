# Simple Boilerplate

A modern, lightweight boilerplate for web development using HTML, SCSS, and JavaScript.

## Features

- 🚀 Vite for fast development and building
- 🎨 CSS utilities with [msccss](https://github.com/YassineGallaoui/msc) library
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
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Styling with msc

This project uses [msccss](https://github.com/YassineGallaoui/msc), a lightweight SCSS utility library that provides:

### Easy Integration

The styling system is integrated by importing the pre-built CSS file in a commonly used JavaScript file (for example `src/js/common.js`):

```javascript
// Import global styles - this makes all utility classes available everywhere
import 'msccss/dist/main.min.css';
```

This approach:
- ✅ **Simple**: No SCSS configuration needed
- ✅ **Global**: All utility classes work everywhere in your HTML
- ✅ **Performance**: Uses optimized, pre-built CSS
- ✅ **No conflicts**: Avoids SCSS compilation issues

Since `common.js` is imported by all HTML pages, the styles are automatically available throughout the entire application without any additional imports or configuration.

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
