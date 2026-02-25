"use client"

import { useState } from "react"
import { cn } from "../../utils/cn"


export function AuthForm({ className, onSubmit, onGoogleLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(form)
  }

  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto rounded-2xl border p-8 shadow-xl",
        "bg-white border-neutral-200",
        "dark:bg-neutral-900 dark:border-neutral-800",
        className
      )}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Sign in to continue to your account.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={cn(
              "w-full rounded-lg border px-4 py-2 text-sm",
              "bg-neutral-50 border-neutral-300 text-neutral-800",
              "focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent",
              "dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200",
              "dark:focus:ring-neutral-600"
            )}
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className={cn(
              "w-full rounded-lg border px-4 py-2 text-sm",
              "bg-neutral-50 border-neutral-300 text-neutral-800",
              "focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent",
              "dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200",
              "dark:focus:ring-neutral-600"
            )}
            placeholder="••••••••"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={cn(
            "w-full rounded-lg px-4 py-2 text-sm font-medium transition",
            "bg-neutral-900 text-white hover:opacity-90",
            "dark:bg-white dark:text-black"
          )}
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          OR
        </span>
        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Google CTA */}
      <button
        onClick={onGoogleLogin}
        className={cn(
          "w-full flex items-center justify-center gap-3 rounded-lg px-4 py-2",
          "border border-neutral-300 bg-white text-neutral-700",
          "hover:bg-neutral-100 transition",
          "dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
        )}
      >
        {/* Google Icon */}
        <svg width="18" height="18" viewBox="0 0 48 48">
          <path
            fill="#EA4335"
            d="M24 9.5c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.6 2.5 29.7 0 24 0 14.6 0 6.6 5.8 2.7 14.2l7.4 5.7C12.1 13.2 17.5 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.5 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.8c-.3 2-1.6 4.9-4.4 6.9l6.8 5.3c4-3.7 7.3-9.1 7.3-15.7z"
          />
          <path
            fill="#FBBC05"
            d="M10.1 28.3c-.6-1.7-.9-3.4-.9-5.3s.3-3.6.9-5.3l-7.4-5.7C1 15.4 0 19.6 0 24s1 8.6 2.7 12l7.4-5.7z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.5 0 12-2.1 16-5.7l-6.8-5.3c-1.8 1.3-4.3 2.2-9.2 2.2-6.5 0-11.9-3.7-13.9-9l-7.4 5.7C6.6 42.2 14.6 48 24 48z"
          />
        </svg>

        Continue with Google
      </button>
    </div>
  )
}