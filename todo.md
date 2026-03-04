# Reline UI — TODO & Setup Guide

This file collects concise, copy-pasteable steps to create a Vite + React project, install Tailwind v4, and add Motion animations. Use this as your working checklist while building components.

## Quick plan

- Scaffold a Vite React app (or use the repo as a library workspace)
- Install dependencies: React, Tailwind CSS v4, Vite plugin, PostCSS, and Motion (framer-motion or Motion)
- Configure Tailwind and Vite plugin
- Add `src/index.css`, import it, build components using Tailwind utility classes
- Add motion animations with `framer-motion` (or Motion) and optionally `tailwindcss-animate` plugin
- Configure build scripts for library output (ESM + CJS) and set `peerDependencies`
- Commit, push, tag, and create a GitHub Release (or publish to npm)

---

## Prerequisites

- Node.js (LTS recommended)
- Git
- npm (or pnpm/yarn)

---

## 0 — Clone the Repository & Initial Setup

### For Contributors

1. **Fork the repository** (on GitHub)
   - Go to https://github.com/Reline-UI/reline-ui
   - Click the "Fork" button in the top-right corner
   - This creates your own copy of the repository

2. **Clone your forked repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/reline-ui.git
   cd reline-ui
   ```

3. **Add upstream remote** (to keep in sync with original)

   ```bash
   git remote add upstream https://github.com/Reline-UI/reline-ui.git
   ```

4. **Verify remotes are set up**
   ```bash
   git remote -v
   # You should see:
   # origin    https://github.com/YOUR-USERNAME/reline-ui.git (fetch)
   # origin    https://github.com/YOUR-USERNAME/reline-ui.git (push)
   # upstream  https://github.com/Reline-UI/reline-ui.git (fetch)
   # upstream  https://github.com/Reline-UI/reline-ui.git (push)
   ```

### For Development (Local Repository)

If you have direct access or want to work on the main repository:

```bash
git clone https://github.com/Reline-UI/reline-ui.git
cd reline-ui
```

### Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Start Development Server

```bash
npm run dev
```

The dev server will start (typically at `http://localhost:5173`). You can now view the example app and make changes to components in real-time.

### Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Preview production build locally
npm run preview

# Check for lint errors
npm run lint
```

---

## 1 — Quick scaffold (Vite + React)

Use Vite to create a new React app (JS template):

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

If you are building a component _library_ inside this repo, keep sources in `src/` and create an `example/` folder that imports your local `src/` for manual testing.

---

## 2 — Install Tailwind CSS (v4) + PostCSS + Vite plugin

Tailwind v4 works well with Vite. Install Tailwind and the official Vite plugin:

```bash
npm install -D tailwindcss@^4.0.0 postcss autoprefixer @tailwindcss/vite
```

Initialize Tailwind config and PostCSS config:

```bash
npx tailwindcss init -p
```

This creates `tailwind.config.cjs` and `postcss.config.cjs`.

Edit `tailwind.config.cjs` `content` to include your files:

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./example/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [require("tailwindcss-animate")],
};
```

Note: `tailwindcss-animate` is optional (adds utility animation classes). Install it with `npm i -D tailwindcss-animate` if you want built-in animation utilities.

Configure the Tailwind Vite plugin in `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Create a CSS entry `src/index.css` and add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import `src/index.css` in your `src/main.jsx` (or `src/main.js`) once:

```js
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
```

---

## 3 — Add Motion (animations)

Two common choices:

- Framer Motion (widely used):

```bash
npm install framer-motion
```

Usage example:

```jsx
import { motion } from "framer-motion";

export default function AnimatedButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="px-4 py-2 rounded bg-blue-600 text-white"
    >
      {children}
    </motion.button>
  );
}
```

- Motion (motion.dev) — modern alternative. See https://motion.dev/docs/react for the exact package and examples (the site provides the latest API).

Install whichever library you prefer. Framer Motion `framer-motion` is stable and works well with Tailwind.

---

## 4 — Local development tips

- Run dev server:

```bash
npm run dev
```

- Create an `example/` app that imports components from `../src` (use `npm link`/local path or Vite monorepo/workspace setup) to preview components while developing the library.

---

## 5 — Component pattern (recommended)

- Directory layout:

```
src/
  components/
    Button/
      index.jsx
      styles.css (optional)
  index.js    # library entry that exports components
  index.css   # Tailwind import
```

Example `src/components/Button/index.jsx` using Tailwind + Motion:

```jsx
import React from "react";
import { motion } from "framer-motion";

export default function Button({ children, onClick, className = "" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-600 text-white ${className}`}
    >
      {children}
    </motion.button>
  );
}
```

Export components from `src/index.js`:

```js
import "./index.css";
export { default as Button } from "./components/Button";
```

---

## 6 — Packaging as a library (Vite library mode)

If you want dist bundles for npm, use Vite's library build:

Install any needed tools:

```bash
npm install -D vite @vitejs/plugin-react
```

Use a `vite.config.js` like:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "RelineUI",
      formats: ["es", "cjs"],
      fileName: (format) => `reline-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
});
```

Update `package.json` for a library:

```json
"peerDependencies": {
  "react": ">=17",
  "react-dom": ">=17"
},
"main": "dist/reline-ui.cjs.js",
"module": "dist/reline-ui.es.js",
"files": ["dist"]
```

Build:

```bash
npm run build
```

---

## 7 — Publish to GitHub (and npm)

- Commit and push to GitHub as usual:

```bash
git add .
git commit -m "chore: add vite + tailwind + motion setup"
git push origin main
```

- Tag and create a GitHub Release (or use `gh release`):

```bash
git tag v1.0.0
git push origin v1.0.0
# then create a Release in the GitHub UI or `gh release create`
```

- To publish to npm (optional):

```bash
npm login
npm publish --access public
```

Make sure `name` in `package.json` is unique on npm and that `peerDependencies` are set so consumers provide `react`/`react-dom`.

---

## 8 — Resources / official docs (read these for the latest details)

- React guide: https://react.dev/
- Tailwind CSS install (Vite): https://tailwindcss.com/docs/installation/using-vite
- Motion (animations): https://motion.dev/docs/react
- Framer Motion (if preferred): https://www.framer.com/motion/

