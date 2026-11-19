import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  label: string
  title: string
  lede?: ReactNode
  children: ReactNode
}

export function Section({ id, index, label, title, lede, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
              <span className="text-signal">{index}</span>
              <span className="mx-2">/</span>
              {label}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-4 text-balance text-2xl font-medium tracking-tight text-foreground md:text-3xl"
            >
              {title}
            </h2>
            {lede ? (
              <div className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{lede}</div>
            ) : null}
          </div>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  )
}
