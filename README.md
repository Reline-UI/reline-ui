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

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Support

- 📖 [GitHub Repository](https://github.com/Reline-UI/reline-ui)
- 🐛 [Report Issues](https://github.com/Reline-UI/reline-ui/issues)
- 💬 [Discussions](https://github.com/Reline-UI/reline-ui/discussions)


**Made with ❤️ by the Reline UI team**
