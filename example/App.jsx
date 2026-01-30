import { Button } from '../src'

export default function App() {
  return (
    <div className="p-8 dark:bg-zinc-950 h-screen dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Reline UI — Example</h1>
      <Button
      variant='danger'
      onClick={() => alert(' button clicked')}> Button</Button>
    </div>
  )
}
