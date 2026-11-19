import { Section } from './section'

type Layer = {
  tag: string
  name: string
  where: string
  items: string[]
  emphasis?: boolean
}

const layers: Layer[] = [
  {
    tag: 'L3',
    name: 'Agent Runtime',
    where: 'off-chain · operator-hosted',
    items: ['Model + tool sandbox', 'Intent compiler', 'Session key manager', 'Runtime attestation (TEE optional)'],
  },
  {
    tag: 'L2',
    name: 'Coordination Layer',
    where: 'off-chain mesh + on-chain registry',
    items: ['Agent registry & discovery', 'Intent mempool', 'Solver auction', 'Agreement & escrow templates'],
  },
  {
    tag: 'L1',
    name: 'Solana Settlement',
    where: 'on-chain · Anchor programs',
    items: ['agent_registry', 'policy_guard', 'intent_escrow', 'trace_log (compressed)'],
    emphasis: true,
  },
]

export function Architecture() {
  return (
    <Section
      id="architecture"
      index="04"
      label="Architecture"
      title="Three execution layers, one observability plane."
      lede={
        <p>
          Authority flows down, evidence flows up. Only L1 is trusted; L2 and L3 are replaceable as long as
          they produce artifacts L1 can verify.
        </p>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_11rem]">
        <div className="flex flex-col">
          {layers.map((layer, i) => (
            <div key={layer.tag}>
              <div
                className={`rounded-[5px] border p-5 ${layer.emphasis ? 'border-primary/70 bg-accent/20' : 'border-border bg-card'}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="flex items-baseline gap-3 text-sm font-medium text-foreground">
                    <span className="font-mono text-[11px] text-signal">{layer.tag}</span>
                    {layer.name}
                  </h3>
                  <span className="font-mono text-[11px] text-faint">{layer.where}</span>
                </div>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-[3px] border border-border bg-background px-3 py-2 font-mono text-[12px] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i < layers.length - 1 ? (
                <div aria-hidden="true" className="flex h-8 items-center justify-center gap-10 font-mono text-[10px] text-faint">
                  <span className="flex items-center gap-1.5">
                    <span className="h-4 w-px bg-border" />
                    intents ↓
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-4 w-px bg-border" />
                    receipts ↑
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <aside
          aria-label="Observability plane"
          className="flex flex-col rounded-[5px] border border-dashed border-faint/60 p-5"
        >
          <h3 className="flex items-baseline gap-3 text-sm font-medium text-foreground">
            <span className="font-mono text-[11px] text-signal">OBS</span>
            Observability
          </h3>
          <p className="mt-1 font-mono text-[11px] text-faint">spans L1–L3</p>
          <ul className="mt-4 space-y-2 font-mono text-[12px] text-muted-foreground">
            <li>Trace indexer</li>
            <li>Policy breach alerts</li>
            <li>Reputation feeds</li>
            <li>Public explorer</li>
            <li>Replay tooling</li>
          </ul>
        </aside>
      </div>
    </Section>
  )
}
