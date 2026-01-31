import { Button, GlassButton } from "../src";

export default function App() {
  return (
    <div className="p-8 dark:bg-linear-to-bl from-blue-900 via-rose-600 to-green-500 h-screen dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Reline UI — Example</h1>
      <div className="flex justify-between items-center">
        <Button onClick={() => alert(" button clicked")}>Button </Button>
        <GlassButton
        onClick={()=> alert('Glass button clicked')}
        >Button</GlassButton>
      </div>
    </div>
  );
}
