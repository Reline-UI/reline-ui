# Reline UI

> A beautifully crafted, open-source React UI component library. Build stunning interfaces with production-ready components, smooth animations, and comprehensive dark mode support.

[![npm](https://img.shields.io/npm/v/reline-ui.svg)](https://www.npmjs.com/package/reline-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.4+-blue.svg)](https://react.dev)

## ✨ Features

- **🎨 Beautiful & Modern Components** - Pre-built, production-ready UI components with elegant design
- **🌙 Dark Mode Support** - Seamless light and dark mode for all components out of the box
- **✨ Smooth Animations** - Powered by [Framer Motion](https://www.framer.com/motion/) for delightful interactions
- **🎯 Tailwind CSS Integration** - Utility-first styling with full Tailwind CSS support
- **📱 Fully Responsive** - Mobile-first responsive design that works across all devices
- **♿ Accessible** - WCAG compliant components following accessibility best practices
- **⚡ Tree-Shakeable** - ES modules for optimal bundle size with modern bundlers
- **📦 Lightweight** - Minimal dependencies, maximum value

## 📦 Installation

```bash
npm install reline-ui
# or
yarn add reline-ui
# or
pnpm add reline-ui
```

### Prerequisites

- **React** 19.2.4 or later
- **React DOM** 19.2.4 or later

## 🚀 Quick Start

```jsx
import { Button, Accordion, AlertDialog } from "reline-ui";

export default function App() {
  return (
    <Button variant="primary" onClick={() => console.log("Clicked!")}>
      Get Started
    </Button>
  );
}
```

### Setup with Next.js

Reline UI works perfectly in Next.js projects:

```jsx
// app/page.jsx
"use client";

import { Button, Accordion } from "reline-ui";

export default function Home() {
  return (
    <div className="p-8">
      <Button variant="primary">Click Me</Button>
    </div>
  );
}
```

## 📋 Components

### Buttons

Versatile button component with multiple variants for different use cases.

```jsx
import { Button } from "reline-ui";

export default function ButtonDemo() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
    </>
  );
}
```

**Variants:** `primary`, `secondary`, `outline`, `danger`, `success`

---

### Glass Button

Modern, frosted glass-effect button component.

```jsx
import { GlassButton } from "reline-ui";

export default function GlassButtonDemo() {
  return <GlassButton>Frosted Glass</GlassButton>;
}
```

---

### Accordion

Expandable content sections with smooth animations.

```jsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "reline-ui";

export default function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem id="1">
        <AccordionTrigger>What is Reline UI?</AccordionTrigger>
        <AccordionContent>
          Reline UI is a modern React component library built with Tailwind CSS
          and Framer Motion.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="2">
        <AccordionTrigger>Is it free?</AccordionTrigger>
        <AccordionContent>
          Yes! Reline UI is completely open-source and free to use.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

---

### Glass Accordion

Elegant accordion with glassmorphism design.

```jsx
import {
  GlassAccordion,
  GlassAccordionItem,
  GlassAccordionTrigger,
  GlassAccordionContent,
} from "reline-ui";

export default function GlassAccordionDemo() {
  return (
    <GlassAccordion>
      <GlassAccordionItem id="1">
        <GlassAccordionTrigger>Feature</GlassAccordionTrigger>
        <GlassAccordionContent>Content here</GlassAccordionContent>
      </GlassAccordionItem>
    </GlassAccordion>
  );
}
```

---

### Alert Dialog

Customizable modal dialogs for alerts and confirmations.

```jsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "reline-ui";

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
          <AlertDialogDescription>
            Are you absolutely sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

---

### Callout

Informational callout box component.

```jsx
import { Callout } from "reline-ui";

export default function CalloutDemo() {
  return <Callout>Important information here</Callout>;
}
```

---

### Tabs

Organized content in tabbed interface.

```jsx
import { TabList, Tab, TabPanel, TabContext } from "reline-ui";

export default function TabsDemo() {
  return (
    <TabContext>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
      </TabList>
      <TabPanel value="tab1">Content 1</TabPanel>
      <TabPanel value="tab2">Content 2</TabPanel>
    </TabContext>
  );
}
```

---

### Media Card

Responsive card component with media support.

```jsx
import { MediaCard } from "reline-ui";

export default function MediaCardDemo() {
  return (
    <MediaCard
      mediaSrc="https://example.com/image.jpg"
      mediaType="image"
      title="Amazing Project"
      subtitle="Powered by Reline UI"
      href="https://example.com"
    />
  );
}
```

---

### Theme Provider & Switcher

Built-in dark mode support with theme context.

```jsx
import { RelineThemeProvider, ThemeSwitcher, ThemeToggle } from "reline-ui";

export default function App() {
  return (
    <RelineThemeProvider>
      <ThemeSwitcher theme="light" setTheme={() => {}} />
      <ThemeToggle />
      <YourApp />
    </RelineThemeProvider>
  );
}
```

## 🎨 Customization

All components are built with Tailwind CSS and accept a `className` prop for custom styling:

```jsx
<Button className="custom-class">Custom Styled Button</Button>
```

## 🌙 Dark Mode

Dark mode is automatically supported. Just configure Tailwind CSS with the `dark` class strategy:

```js
// tailwind.config.js
export default {
  darkMode: "class",
  // ...
};
```

## 📚 Documentation

For detailed component documentation, prop references, and advanced usage examples, visit the [GitHub repository](https://github.com/Reline-UI/reline-ui).

## 🛠 Development

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

## 🤝 Contributing

We welcome contributions! Please follow these guidelines when contributing new components or features to Reline UI.

### Getting Started

1. **Fork the repository**

   ```bash
   git clone https://github.com/YourUsername/reline-ui.git
   cd reline-ui
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/component-name
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Component Structure & Guidelines

#### Folder Organization

Each component must follow this folder structure:

```
src/components/
├── ComponentName/
│   ├── index.jsx          # Main component file
│   ├── docs.md            # Documentation (optional but recommended)
│   └── ComponentName.jsx   # (optional) For complex components with multiple files
```

#### How to Create a New Component

**Step 1: Create the component folder**

```bash
mkdir -p src/components/MyNewComponent
```

**Step 2: Create the component file (index.jsx)**

Use **named exports** (NOT default exports):

```jsx
// src/components/MyNewComponent/index.jsx
"use client";

import { motion } from "framer-motion";
import { cn } from "../../utils/cn.js";

// Export named components
export function MyNewComponent({
  variant = "primary",
  children,
  className,
  ...props
}) {
  const baseStyles = "px-4 py-2 rounded-lg transition-colors duration-200";

  const variants = {
    primary:
      "bg-[#18181B] text-[#FAFAFA] hover:bg-[#18181B]/90 dark:bg-[#FAFAFA] dark:text-[#18181B]",
    secondary:
      "bg-[#F4F4F5] text-[#18181B] hover:bg-[#E4E4E7] dark:bg-[#27272A]",
  };

  return (
    <motion.div
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Export additional components if needed
export function MyNewComponentItem({ children }) {
  return <div className="component-item">{children}</div>;
}
```

**Step 3: Update src/index.js to export your component**

Add your named exports to [src/index.js](src/index.js):

```javascript
// In src/index.js, add:
export {
  MyNewComponent,
  MyNewComponentItem,
} from "./components/MyNewComponent/index.jsx";
```

**Step 4: Create documentation **

Create a `docs.md` file describing usage:

```markdown
# MyNewComponent

Brief description of what the component does.

## Usage

\`\`\`jsx
import { MyNewComponent } from "reline-ui";

export default function Demo() {
return <MyNewComponent variant="primary">Click Me</MyNewComponent>;
}
\`\`\`

## Props

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| variant   | string    | "primary" | Visual style variant   |
| children  | ReactNode | -         | Component content      |
| className | string    | -         | Additional CSS classes |
```

### Styling with Tailwind CSS & the `cn` Utility

#### Understanding the `cn` Utility

The `cn` utility is located at [src/utils/cn.js](src/utils/cn.js) and merges Tailwind classes intelligently:

```javascript
// src/utils/cn.js
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

**Why use `cn`?**

- **Merges classes** - Combines multiple Tailwind classes
- **Handles conflicts** - `twMerge` intelligently resolves conflicting Tailwind utilities
- **Supports conditionals** - Works with clsx for conditional classes
- **Prevents duplication** - Ensures consistent styling

#### How to Use `cn` in Components

```jsx
import { cn } from "../../utils/cn.js";

export function MyComponent({ variant, isActive, className }) {
  return (
    <div
      className={cn(
        // Base styles
        "px-4 py-2 rounded-lg transition-all",
        // Variant styles
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-200 text-black",
        // Conditional styles
        isActive && "ring-2 ring-blue-600",
        // User-provided classes (highest priority)
        className,
      )}
    >
      Content
    </div>
  );
}
```

#### Tailwind CSS Configuration

The Tailwind config is in [tailwind.config.js](tailwind.config.js):

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Scans all component files
    "./example/**/*.{js,jsx}", // Includes example files
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        // Add custom animations here
      },
    },
  },
  darkMode: "class", // Enables dark mode with class strategy
};
```

**Dark Mode Support:**
Use the `dark:` prefix for dark mode styles:

```jsx
className={cn(
  "text-black bg-white",           // Light mode
  "dark:text-white dark:bg-black", // Dark mode
)}
```

### Utils & Libraries Folder

The `src/utils/` folder contains utility functions and helpers:

```
src/utils/
├── cn.js          # Class name merger utility
└── [other-utils]  # Add more utilities here as needed
```

**Creating new utilities:**

```javascript
// src/utils/myHelper.js
export function myHelper(param) {
  // Your utility logic
  return result;
}

// In your component, import and use:
import { myHelper } from "../../utils/myHelper.js";
```

### Best Practices

#### 1. **Use Named Exports (NOT Default Exports)**

```jsx
// ✅ Correct
export function Button({ children }) { ... }
export function ButtonGroup({ children }) { ... }

// ❌ Avoid
export default function Button({ children }) { ... }
```

#### 2. **Always Import the `cn` utility**

```jsx
import { cn } from "../../utils/cn.js";

// Use it to merge styles
className={cn(baseStyles, variants[variant], className)}
```

#### 3. **Support Dark Mode**

```jsx
className={cn(
  "bg-white dark:bg-[#09090B]",
  "text-black dark:text-white"
)}
```

#### 4. **Use Framer Motion for Animations**

```jsx
import { motion, AnimatePresence } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  Animated content
</motion.div>;
```

#### 5. **Accept className Prop for Customization**

```jsx
export function MyComponent({ children, className, ...props }) {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {children}
    </div>
  );
}
```

#### 6. **Add "use client" directive for Client Components**

```jsx
"use client"; // Required for Next.js App Router

import React from "react";
// ...
```

### Submission Checklist

Before submitting a PR:

- [ ] Component uses **named exports** (no defaults)
- [ ] Component uses `cn` utility for class merging
- [ ] Component supports **dark mode** styles
- [ ] Component is exported in [src/index.js](src/index.js)
- [ ] Folder structure matches convention: `src/components/ComponentName/index.jsx`
- [ ] `className` prop is accepted for customization
- [ ] Documentation added (docs.md file)
- [ ] Code follows existing style patterns
- [ ] Component is responsive and mobile-friendly
- [ ] All props are properly typed/documented

### Submitting Your Contribution

1. **Commit your changes**

   ```bash
   git commit -m "Add MyNewComponent with dark mode support"
   ```

2. **Push to your fork**

   ```bash
   git push origin feature/component-name
   ```

3. **Open a Pull Request**
   - Provide a clear description of the component
   - Include usage examples
   - Link any related issues

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Support

- 📖 [GitHub Repository](https://github.com/Reline-UI/reline-ui)
- 🐛 [Report Issues](https://github.com/Reline-UI/reline-ui/issues)
- 💬 [Discussions](https://github.com/Reline-UI/reline-ui/discussions)

**Made with ❤️ by the Reline UI team**
