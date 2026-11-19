import Link from 'next/link'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Kestrel home">
          <span aria-hidden="true" className="grid size-5 grid-cols-2 gap-px">
            <span className="bg-primary" />
            <span className="bg-border" />
            <span className="bg-border" />
            <span className="bg-signal/80" />
          </span>
          <span className="text-sm font-medium tracking-tight">Kestrel</span>
          <span className="hidden font-mono text-[11px] text-faint sm:inline">/ agent settlement network</span>
        </Link>
        <a
          href="#architecture"
          className="inline-flex h-8 items-center gap-2 rounded-[4px] border border-border px-3 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Read the paper
          <span aria-hidden="true">{'->'}</span>
        </a>
      </nav>
    </header>
  )
}
