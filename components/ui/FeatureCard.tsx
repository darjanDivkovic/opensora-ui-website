import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card-hover group relative p-6 rounded-xl border border-white/[0.07] bg-surface/60 backdrop-blur-sm">
      {/* Top accent line on hover */}
      <div className="absolute inset-x-0 top-0 h-[1px] rounded-t-xl bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="mb-4 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
        {icon}
      </div>

      <h3 className="font-syne font-700 text-[15px] text-white mb-2 tracking-tight">
        {title}
      </h3>
      <p className="font-body text-sm text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  )
}
