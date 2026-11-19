import { Section } from './section'

type Phase = {
  phase: string
  period: string
  title: string
  status: 'done' | 'active' | 'planned'
  items: string[]
}

const phases: Phase[] = [
  {
    phase: 'Phase 0',
    period: 'Q2 2026',
    title: 'Specification',
    status: 'done',
    items: ['Intent schema v0.1', 'Policy guard threat model', 'Reference paper draft'],
  },
  {
    phase: 'Phase 1',
    period: 'Q4 2026',
    title: 'Devnet programs',
    status: 'active',
    items: ['agent_registry + policy_guard deployed', 'Single-solver escrow', 'Trace indexer (alpha)'],
  },
  {
    phase: 'Phase 2',
    period: 'Q1 2027',
    title: 'Coordination',
    status: 'planned',
    items: ['Multi-solver auction', 'Agent-to-agent agreements', 'Reputation accounts'],
  },
  {
    phase: 'Phase 3',
    period: 'Q3 2027',
    title: 'Audited testnet',
    status: 'planned',
    items: ['External program audits', 'Runtime attestation support', 'Public explorer + replay'],
  },
]

const statusStyle: Record<Phase['status'], { label: string; dot: string; text: string }> = {
  done: { label: 'Complete', dot: 'bg-primary', text: 'text-muted-foreground' },
  active: { label: 'In progress', dot: 'bg-signal', text: 'text-signal' },
  planned: { label: 'Planned', dot: 'bg-faint', text: 'text-faint' },
}

export function Roadmap() {
  return (
    <Section
      id="status"
      index="06"
      label="Status & roadmap"
      title="Where the work stands."
      lede={
        <p>
          Kestrel is pre-audit research software. Dates are targets, not commitments, and will move with the
          findings of each phase.
        </p>
      }
    >
      <ol className="grid gap-px overflow-hidden rounded-[5px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {phases.map((p) => {
          const s = statusStyle[p.status]
          return (
            <li key={p.phase} className={`flex flex-col bg-background p-5 ${p.status === 'active' ? 'bg-accent/15' : ''}`}>
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-faint">{p.phase}</span>
                <span className="text-faint">{p.period}</span>
              </div>
              <h3 className="mt-4 text-sm font-medium text-foreground">{p.title}</h3>
              <p className={`mt-1 flex items-center gap-2 font-mono text-[11px] ${s.text}`}>
                <span aria-hidden="true" className={`size-1.5 rounded-full ${s.dot}`} />
                {s.label}
              </p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {p.items.map((item) => (
                  <li key={item} className="text-[13px] leading-snug text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
