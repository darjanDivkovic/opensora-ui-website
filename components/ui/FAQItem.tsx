'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border border-white/[0.07] rounded-xl overflow-hidden transition-all duration-200 ${
        open ? 'border-white/[0.12] bg-surface/60' : 'bg-transparent hover:border-white/[0.1]'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-syne font-600 text-[15px] text-white pr-4 leading-snug">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-md border border-white/10 flex items-center justify-center transition-all duration-200 ${
            open ? 'border-accent/30 bg-accent/10 text-accent' : 'text-text-muted group-hover:border-white/20'
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          >
            <path
              d="M2 4l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="glow-line mb-4" />
          <p className="font-body text-sm text-text-muted leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
