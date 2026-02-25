"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

const demoImages = [
  "https://picsum.photos/id/1011/300/300",
  "https://picsum.photos/id/1015/300/300",
  "https://picsum.photos/id/1016/300/300",
  "https://picsum.photos/id/1025/300/300",
  "https://picsum.photos/id/1035/300/300",
  "https://picsum.photos/id/1041/300/300",
  "https://picsum.photos/id/1050/300/300",
  "https://picsum.photos/id/1062/300/300",
  "https://picsum.photos/id/1074/300/300",
  "https://picsum.photos/id/1084/300/300",
  "https://picsum.photos/id/1080/300/300",
  "https://picsum.photos/id/109/300/300",
];

export function MagicCursorArea({
  children,
  imageLinks = demoImages,
  size = 90,
  spawnDelay = 60,
  className,
}) {
  const containerRef = useRef(null);
  const indexRef = useRef(0);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      // Only trigger inside this container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const now = Date.now();
      if (now - lastSpawnRef.current < spawnDelay) return;
      lastSpawnRef.current = now;

      const img = document.createElement("img");

      img.src = imageLinks[indexRef.current];
      img.style.position = "absolute";
      img.style.left = `${x - size / 2}px`;
      img.style.top = `${y - size / 2}px`;
      img.style.width = `${size}px`;
      img.style.height = `${size}px`;
      img.style.pointerEvents = "none";
      img.style.borderRadius = "16px";
      img.style.objectFit = "cover";
      img.style.border = "1px solid rgba(255,255,255,0.4)";
      img.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
      img.style.transform = `scale(1) rotate(${Math.random() * 20 - 10}deg)`;
      img.style.opacity = "1";
      img.style.transition =
        "transform 700ms cubic-bezier(.22,1,.36,1), opacity 700ms ease-out";

      container.appendChild(img);

      requestAnimationFrame(() => {
        img.style.transform = `scale(0.6) translateY(-20px) rotate(${
          Math.random() * 40 - 20
        }deg)`;
        img.style.opacity = "0";
      });

      setTimeout(() => {
        img.remove();
      }, 700);

      indexRef.current = (indexRef.current + 1) % imageLinks.length;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imageLinks, size, spawnDelay]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
    </div>
  );
}
