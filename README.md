# Reline UI

A modern, open-source React UI component library for building beautiful and consistent user interfaces. Built with Tailwind CSS, Vite, and Framer Motion.

## Overview

Reline UI is an accessible, customizable component library designed to help you build professional applications with ease. It provides pre-built, animated components with dark mode support and Tailwind CSS integration.

## Features

- 🎨 **Beautiful Components** - Pre-built, production-ready components
- 🌙 **Dark Mode Support** - Built-in dark mode for all components
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🎯 **Tailwind CSS** - Utility-first styling with Tailwind CSS
- 📱 **Responsive** - Mobile-first responsive design
- ♿ **Accessible** - WCAG compliant components
- 🧪 **Well Tested** - Comprehensive test coverage with Vitest

## Installation

```bash
npm install reline-ui
```

## Prerequisites

- React 19.2.4+
- React DOM 19.2.4+

## Quick Start

```jsx
import { Button } from 'reline-ui'

export default function App() {
  return (
    <Button 
      variant='primary'
      onClick={() => alert('Button clicked!')}
    >
      Click Me
    </Button>
  )
}
```

## Components

### Buttons
- **PrimaryButton** - Main call-to-action button with multiple variants
  - `primary` - Primary action button (default)
  - `secondary` - Secondary action button
  - `danger` - Destructive action button
  - `success` - Success state button

## Project Structure

```
reline-ui/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Buttons/
│   │       └── PrimaryButton/
│   │           └── index.jsx
│   ├── __tests__/          # Component tests
│   │   └── sample.test.js
│   ├── index.css           # Global styles
│   └── index.js            # Library entry point
├── example/                 # Example application
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
├── package.json
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/Reline-UI/reline-ui.git
cd reline-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

### Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build the library for production
- `npm run test` - Run tests with Vitest

## Contributing

We welcome contributions! Please follow these steps:

1. Create a new branch from `development`: `git checkout -b feature/your-feature`
2. Make your changes and add tests if applicable
3. Ensure all tests pass: `npm run test`
4. Commit your changes: `git commit -m 'Add your feature'`
5. Push to your branch: `git push origin feature/your-feature`
6. Open a Pull Request against the `development` branch

### Adding New Components

1. Create a new folder under `src/components/`
2. Create the component file (e.g., `index.jsx`)
3. Add corresponding tests in `src/__tests__/`
4. Export the component from `src/index.js`
5. Update this README with the new component

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vitest** - Testing framework
- **PostCSS** - CSS processing

## License

ISC

## Support

For issues and questions, please visit [GitHub Issues](https://github.com/Reline-UI/reline-ui/issues)

## Repository

[Reline UI on GitHub](https://github.com/Reline-UI/reline-ui)
