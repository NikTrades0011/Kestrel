const links = [
  { label: 'Paper', href: '#architecture' },
  { label: 'Design constraints', href: '#principles' },
  { label: 'Roadmap', href: '#status' },
  { label: 'GitHub', href: 'https://github.com' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium">Kestrel</p>
            <p className="mt-1 font-mono text-[11px] text-faint">Agent settlement network · research preview</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 rounded-[4px] border border-border p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-destructive">Experimental</p>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-muted-foreground">
            Kestrel is an experimental research project. Programs are unaudited and deployed to Solana devnet
            only. Nothing on this site is an offer of tokens, securities, or financial services. Do not connect
            agents holding real assets to any Kestrel component.
          </p>
        </div>
        <p className="mt-6 font-mono text-[11px] text-faint">© 2026 Kestrel research contributors.</p>
      </div>
    </footer>
  )
}
