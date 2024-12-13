'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
      ) : (
        <MoonIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
      )}
    </button>
  )
}
