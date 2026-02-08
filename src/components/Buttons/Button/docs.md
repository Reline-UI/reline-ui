# Button Component

## Overview

The `Button` component is a versatile, accessible, and customizable button element designed for React and Next.js applications. It provides multiple visual variants to suit different use cases and actions within your interface. The component is built with **Framer Motion** for smooth animations and **Tailwind CSS** for styling.

## Features

- 🎨 **Multiple Variants**: Primary, Secondary, Outline, Danger, Success, and Warning
- ⚡ **Smooth Animations**: Tap-to-scale animation using Framer Motion
- 🌓 **Dark Mode Support**: Full dark mode compatibility
- ♿ **Accessible**: Semantic HTML and keyboard support
- 🎯 **Customizable**: Extend styles with custom className prop
- 📦 **Lightweight**: Minimal dependencies with great performance

## Dependencies

| Package         | Version  | Purpose                                |
| --------------- | -------- | -------------------------------------- |
| `react`         | ^19.2.4  | Core React library                     |
| `framer-motion` | ^12.29.2 | Animation library for tap interactions |
| `tailwindcss`   | ^4.1.18  | Utility-first CSS framework            |

## Installation

The Button component is part of the `reline-ui` library. Install the package first:

```bash
npm install reline-ui
```

Then import the Button component:

```jsx
import { Button } from "reline-ui";
```

## Basic Usage

### Simple Button

```jsx
import { Button } from "reline-ui";

export default function App() {
  return <Button onClick={() => alert("Button clicked!")}>Click Me</Button>;
}
```

### Button with Different Variants

```jsx
<div className="flex gap-4 flex-wrap">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="danger">Delete</Button>
  <Button variant="success">Confirm</Button>
  <Button variant="warning">Warning</Button>
</div>
```

## Props / API

| Prop        | Type        | Default     | Description                                                                      |
| ----------- | ----------- | ----------- | -------------------------------------------------------------------------------- |
| `variant`   | `string`    | `"primary"` | Style variant: `primary`, `secondary`, `outline`, `danger`, `success`, `warning` |
| `children`  | `ReactNode` | `"Button"`  | Button text or content                                                           |
| `onClick`   | `function`  | `undefined` | Callback function when button is clicked                                         |
| `className` | `string`    | `""`        | Additional CSS classes for custom styling                                        |

## Variants

### Primary

The default variant used for primary actions and calls-to-action.

```jsx
<Button variant="primary">Primary Action</Button>
```

**Dark Mode**: Inverted colors for better contrast in dark environments.

### Secondary

Used for secondary actions that are less emphasized than primary.

```jsx
<Button variant="secondary">Secondary</Button>
```

### Outline

A ghost button style with a border, useful for alternative actions.

```jsx
<Button variant="outline">Outline</Button>
```

### Danger

For destructive actions like delete or remove operations.

```jsx
<Button variant="danger">Delete Item</Button>
```

### Success

For positive confirmations and successful state actions.

```jsx
<Button variant="success">Confirm</Button>
```

### Warning

For cautionary actions that need user attention.

```jsx
<Button variant="warning">Warning Action</Button>
```

## Accessibility

The Button component follows WAI-ARIA standards:

- ✅ Semantic HTML: Uses native `<button>` element
- ✅ Keyboard Navigation: Fully keyboard accessible
- ✅ Focus Indicators: Visible focus states with ring utilities
- ✅ Dark Mode: High contrast in both light and dark themes
- ✅ Screen Readers: Properly announced by assistive technologies

### Best Practices

- Use descriptive text: `<Button>Save Changes</Button>` instead of `<Button>OK</Button>`
- Avoid deeply nested content inside buttons
- Use appropriate variants to communicate action intent
- Provide loading states for async actions
- Include ARIA attributes for complex button behavior

```jsx
// Good accessibility example
<Button
  variant="danger"
  onClick={handleDelete}
  aria-label="Delete user profile"
>
  Delete Profile
</Button>
```

## Customization

### Extending with Custom Classes

You can extend button styles using the `className` prop:

```jsx
<Button variant="primary" className="w-full text-lg">
  Full Width Button
</Button>
```

### Custom Styling with Tailwind

```jsx
<Button variant="secondary" className="rounded-full px-6 py-3">
  Pill Shaped Button
</Button>
```

### Combining with Icons

```jsx
import { Button } from "reline-ui";
import { ChevronRight } from "lucide-react";

export default function ButtonWithIcon() {
  return (
    <Button variant="primary" className="flex items-center gap-2">
      Next
      <ChevronRight size={16} />
    </Button>
  );
}
```

## Advanced Examples

### Loading State Button

```jsx
import { useState } from "react";
import { Button } from "reline-ui";

export default function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await fetch("/api/submit");
    setIsLoading(false);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className={isLoading ? "opacity-60" : ""}
    >
      {isLoading ? "Loading..." : "Submit"}
    </Button>
  );
}
```

### Button Group

```jsx
import { Button } from "reline-ui";

export default function ButtonGroup() {
  return (
    <div className="flex gap-2 border rounded-lg overflow-hidden">
      <Button variant="outline" className="rounded-none">
        Left
      </Button>
      <Button variant="outline" className="rounded-none border-l">
        Center
      </Button>
      <Button variant="outline" className="rounded-none border-l">
        Right
      </Button>
    </div>
  );
}
```

## Animations

The Button component includes a built-in tap animation using Framer Motion:

- **Scale Effect**: Button scales to 0.97 on tap for tactile feedback
- **Smooth Transition**: The animation duration is 200ms with ease-in timing

```jsx
// Animation is applied automatically
<Button variant="primary">Tap for feedback</Button>
```

## Dark Mode

The Button component automatically adapts to dark mode:

```jsx
// In your Tailwind config, ensure dark mode is enabled
export default {
  darkMode: "class", // or 'media'
  // ...
};
```

The component will automatically apply appropriate colors when the `dark` class is present:

```jsx
// Component will respond to dark mode automatically
<div className="dark">
  <Button variant="primary">Dark Mode Button</Button>
</div>
```

## Styling Details

### Color Palette

| Variant   | Light Mode             | Dark Mode             |
| --------- | ---------------------- | --------------------- |
| Primary   | Dark gray (#18181B)    | Light white (#FAFAFA) |
| Secondary | Light gray (#F4F4F5)   | Dark gray (#27272A)   |
| Outline   | White (#FFFFFF)        | Dark (#09090B)        |
| Danger    | Light red (#FFF0F0)    | Dark red (#2D0607)    |
| Success   | Light green (#ECFDF3)  | Dark green (#02140A)  |
| Warning   | Light yellow (#FFFCF0) | Dark (#1D1F00)        |

### Default Spacing

- Padding: `px-4 py-2` (Tailwind)
- Border Radius: `rounded-lg`
- Font Weight: `font-medium`
- Transition: `200ms` ease-in

## TypeScript (Optional)

If using TypeScript, you can type your button props:

```tsx
import { ReactNode } from "react";

interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "danger"
    | "success"
    | "warning";
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  variant = "primary",
  children = "Button",
  onClick,
  className = "",
}: ButtonProps) => {
  // Component implementation
};
```

## Troubleshooting

### Button not responding to clicks

- Ensure `onClick` is properly passed as a function
- Check if parent elements have `pointer-events: none`

### Variant not applying

- Verify the variant name is exactly spelled: `primary`, `secondary`, `outline`, `danger`, `success`, `warning`
- Check that Tailwind CSS is properly configured

### Dark mode not working

- Ensure `tailwindcss` is configured with dark mode enabled
- Add `dark` class to parent container to test

## Best Practices

1. **Use Semantic Variants**: Choose variants that match the action type
2. **Provide Clear Labels**: Use descriptive button text
3. **Responsive Design**: Consider button size on mobile devices
4. **Loading States**: Show visual feedback for async operations
5. **Keyboard Support**: Test with keyboard navigation
6. **Testing**: Test in both light and dark modes

## Related Components

- [GlassButton](/components/Buttons/GlassButton/docs.md) - Glassmorphism variant
- [AlertDialog](/components/AlertDialogue/docs.md) - For confirmations with buttons
- [Accordion](/components/Accordion/docs.md) - Trigger buttons for accordion

## Contributing

Found a bug or want to suggest improvements? [Open an issue](https://github.com/Reline-UI/reline-ui/issues) on GitHub.

## License

ISC - See LICENSE file for details
