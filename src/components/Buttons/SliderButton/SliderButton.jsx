import { cn } from "../../../utils/cn"

export function SliderButton ({children,onClick,
  className,}){
    return <button
    onClick={onClick}
    className={cn("border dark:border-white border-zinc-300 rounded-lg flex items-center overflow-hidden relative pl-10 pr-1 group text-zinc-700 dark:text-white ", className)}>
        <SliderElement/>
        <div className="bg-orange-400 dark:bg-orange-800 absolute inset-0 [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-800 ease-in"/>
        <span className="inline-block group-hover:left-0.5 group-hover:-translate-x-8.5 transition-all duration-500 ease-in  group-hover:text-white text-xl ">{children}</span>
        </button>
}

function SliderElement() {
  return (
    <div
      className="
        size-7
        bg-orange-400
        dark:bg-orange-800
        rounded-[5px]
        absolute left-0 inset-y-0
        flex flex-col gap-0.5
        justify-center items-center
        group-hover:left-[calc(100%-1.6rem)]
        group-hover:rotate-180
        ease-in
        transition-all duration-700
        z-50
      "
    >
      <Row delayBase={0} />
      <Row delayBase={1} />
      <Row delayBase={2} />
      <Row delayBase={3} />
    </div>
  )
}

function Row({ delayBase }) {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Dots
          key={i}
          highlight={i === delayBase}
          delay={i * 0.1}
        />
      ))}
    </div>
  )
}


function Dots({ highlight }) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-full transition-all duration-300",

        // Base dots
        "size-[2.5px] bg-white/30",

        // Highlighted dots
        highlight &&
"size-[2.5px] bg-white shadow-[0_0_8px_rgba(255,255,255,1)] animate-pulse"

      )}
    />
  )
}
