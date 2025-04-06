# Simple Boilerplate

A modern, lightweight boilerplate for web development using HTML, SCSS, and JavaScript.

## Features

- 🚀 Vite for fast development and building
- 🎨 SCSS with variables, mixins, and utility classes
- 📝 ESLint and Prettier for code quality
- 🐶 Husky for pre-commit hooks
- 📱 Responsive design with mobile-first approach
- 🎯 Modern JavaScript (ES6+)

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
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _base.scss
│   │   ├── _components.scss
│   │   ├── _layout.scss
│   │   ├── _utilities.scss
│   │   └── main.scss
│   └── main.js
├── public/
├── index.html
├── package.json
├── .eslintrc.json
├── .prettierrc
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

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
