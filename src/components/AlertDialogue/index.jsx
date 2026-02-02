"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Buttons/Button";

const AlertDialogContext = createContext(null);

/* ---------------- Root ---------------- */
function AlertDialog({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
}

/* ---------------- Trigger ---------------- */
function AlertDialogTrigger({ children }) {
  const { setOpen } = useContext(AlertDialogContext);

  return (
    <div onClick={() => setOpen(true)} className="inline-block cursor-pointer">
      {children}
    </div>
  );
}

/* ---------------- Content ---------------- */
function AlertDialogContent({ children }) {
  const { open, setOpen } = useContext(AlertDialogContext);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  const isDark = document.documentElement.classList.contains("dark");

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-md rounded-2xl dark:bg-[#09090B] dark:text-[#F7F8F8] border dark:border-[#27272A] border-[#E4E4E7]  bg-[#FFFFFF] text-[#09090B] shadow-2xl">
        {children}
      </div>
    </div>,
    document.body,
  );
}

/* ---------------- Header ---------------- */
function AlertDialogHeader({ children }) {
  return <div className="p-6 space-y-2">{children}</div>;
}

function AlertDialogTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

function AlertDialogDescription({ children }) {
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <p className={isDark ? "text-sm text-white/60" : "text-sm text-[#71717A]"}>
      {children}
    </p>
  );
}

/* ---------------- Footer ---------------- */
function AlertDialogFooter({ children }) {
  return (
    <div
      className="
        flex flex-col-reverse gap-2 px-6 py-4
        sm:flex-row sm:justify-end sm:gap-3
      "
    >
      {children}
    </div>
  );
}

/* ---------------- Actions ---------------- */
function AlertDialogCancel({ children }) {
  const { setOpen } = useContext(AlertDialogContext);

  return (
    <Button
      variant="outline"
      onClick={() => setOpen(false)}
      className="w-full sm:w-auto"
    >
      {children}
    </Button>
  );
}

function AlertDialogAction({ children, onClick }) {
  const { setOpen } = useContext(AlertDialogContext);

  return (
    <Button
      variant="danger"
      className="w-full sm:w-auto"
      onClick={() => {
        onClick?.();
        setOpen(false);
      }}
    >
      {children}
    </Button>
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
};
