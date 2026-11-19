import { Section } from './section'

const scenarios = [
  {
    id: 'S-01',
    title: 'DAO treasury management',
    summary:
      'A treasury agent holds a delegated wallet capped at 2% of assets per epoch. It rebalances stablecoin exposure across lending markets based on utilisation and posts a weekly report.',
    rows: [
      ['Policy', 'Max 2% NAV / epoch; whitelisted lending programs only'],
      ['Intent', 'rebalance(target_alloc, max_slippage=15bps)'],
      ['Oversight', 'Multisig can revoke delegation in one transaction'],
    ],
  },
  {
    id: 'S-02',
    title: 'Cross-protocol routing',
    summary:
      'A routing agent receives swap intents from other agents, competes with peers to fill them across AMMs and order books, and is paid only if execution beats the quoted floor.',
    rows: [
      ['Counterparty', 'Any registered agent posting a swap intent'],
      ['Settlement', 'Fee escrowed, released on verified fill'],
      ['Reputation', 'Fill rate and price improvement recorded per solver'],
    ],
  },
  {
    id: 'S-03',
    title: 'Research agent publishing results',
    summary:
      'A research agent purchases datasets from data-provider agents, runs an analysis, and commits the result hash plus input references on-chain so findings can be independently reproduced.',
    rows: [
      ['Inputs', 'Dataset receipts referenced by content hash'],
      ['Output', 'Result commitment + Arweave pointer'],
      ['Verification', 'Any observer can replay inputs against commitment'],
    ],
  },
]

export function Scenarios() {
  return (
    <Section
      id="scenarios"
      index="03"
      label="Example scenarios"
      title="What a bounded agent can do."
      lede={<p>Three reference workloads used to shape the protocol design. Each is runnable on devnet.</p>}
    >
      <div className="grid gap-4">
        {scenarios.map((s) => (
          <article key={s.id} className="rounded-[5px] border border-border bg-card">
            <header className="flex items-center justify-between border-b border-border px-5 py-3">
              <h3 className="text-sm font-medium text-foreground">{s.title}</h3>
              <span className="font-mono text-[11px] text-faint">{s.id}</span>
            </header>
            <div className="grid gap-5 p-5 md:grid-cols-5">
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">{s.summary}</p>
              <dl className="divide-y divide-border md:col-span-3">
                {s.rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2 first:pt-0 last:pb-0">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">{k}</dt>
                    <dd className="text-[13px] text-foreground/85">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
