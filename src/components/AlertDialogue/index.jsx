"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Buttons/Button";
import { cn } from "../../utils/cn";

/* -------------------------------------------------
   Context
-------------------------------------------------- */

const AlertDialogContext = createContext(null);

function useAlertDialog() {
  const ctx = useContext(AlertDialogContext);
  if (!ctx) {
    throw new Error("AlertDialog components must be inside AlertDialog");
  }
  return ctx;
}

/* -------------------------------------------------
   Root
-------------------------------------------------- */

function AlertDialog({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
}

/* -------------------------------------------------
   Trigger
-------------------------------------------------- */

function AlertDialogTrigger({ children, className }) {
  const { setOpen } = useAlertDialog();

  return (
    <div
      onClick={() => setOpen(true)}
      className={cn("inline-flex cursor-pointer", className)}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------
   Content
-------------------------------------------------- */

function AlertDialogContent({ children, className, overlayClassName }) {
  const { open, setOpen } = useAlertDialog();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "absolute inset-0 bg-black/40 backdrop-blur-sm",
          overlayClassName
        )}
      />

      {/* Dialog */}
      <div
        className={cn(
          `
          relative w-full max-w-md
          rounded-2xl
          border border-[#E4E4E7] dark:border-[#27272A]
          bg-white dark:bg-[#09090B]
          text-[#09090B] dark:text-[#F7F8F8]
          shadow-2xl
          `,
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

/* -------------------------------------------------
   Header
-------------------------------------------------- */

function AlertDialogHeader({ children, className }) {
  return (
    <div className={cn("p-6 space-y-2", className)}>
      {children}
    </div>
  );
}

function AlertDialogTitle({ children, className }) {
  return (
    <h2 className={cn("text-lg font-semibold", className)}>
      {children}
    </h2>
  );
}

function AlertDialogDescription({ children, className }) {
  return (
    <p
      className={cn(
        "text-sm text-[#71717A] dark:text-white/60",
        className
      )}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------
   Footer
-------------------------------------------------- */

function AlertDialogFooter({ children, className }) {
  return (
    <div
      className={cn(
        `
        flex flex-col-reverse gap-2 px-6 py-4
        sm:flex-row sm:justify-end sm:gap-3
        `,
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------
   Actions
-------------------------------------------------- */

function AlertDialogCancel({ children, className }) {
  const { setOpen } = useAlertDialog();

  return (
    <Button
      variant="outline"
      onClick={() => setOpen(false)}
      className={cn("w-full sm:w-auto", className)}
    >
      {children}
    </Button>
  );
}

function AlertDialogAction({ children, onClick, className }) {
  const { setOpen } = useAlertDialog();

  return (
    <Button
      variant="danger"
      className={cn("w-full sm:w-auto", className)}
      onClick={() => {
        onClick?.();
        setOpen(false);
      }}
    >
      {children}
    </Button>
  );
}

/* -------------------------------------------------
   Exports
-------------------------------------------------- */

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
