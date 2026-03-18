import { cn } from '@/lib/utils'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-8',
        narrow ? 'max-w-[860px]' : 'max-w-[1200px]',
        className
      )}
    >
      {children}
    </div>
  )
}
