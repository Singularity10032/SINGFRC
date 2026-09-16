"use client"

import { useState } from "react"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard permission denied; the mailto link still works
    }
  }

  return (
    <span className="relative flex flex-wrap items-center gap-2">
      <a href={`mailto:${email}`} className="btn-pill max-w-full bg-arcade-purple text-paper">
        <span className="truncate">Email {email}</span>
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        className="shrink-0 rounded-full border-2 border-paper px-3 py-2 text-xs font-semibold shadow-hard-sm transition-colors hover:bg-paper/10"
      >
        Copy
      </button>
      {copied && (
        <span className="absolute -top-9 left-0 rounded-full border-2 border-ink bg-arcade-fuel px-3 py-1 text-xs font-semibold text-ink shadow-hard-sm">
          copied
        </span>
      )}
    </span>
  )
}
