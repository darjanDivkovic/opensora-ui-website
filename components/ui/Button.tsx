import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-medium rounded-lg transition-all duration-200 cursor-pointer select-none whitespace-nowrap'

  const variants = {
    primary:
      'bg-accent text-bg hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(0,221,184,0.4)] active:scale-[0.98]',
    secondary:
      'border border-white/10 text-text hover:border-white/20 hover:bg-white/[0.04] active:scale-[0.98]',
    ghost:
      'text-text-muted hover:text-text hover:bg-white/[0.04] active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
