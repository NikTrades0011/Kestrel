import { Section } from './section'

const gaps = [
  {
    code: 'G1',
    title: 'No native identity',
    body: 'Agents operate through borrowed keys or custodial API accounts. There is no durable, on-chain record binding an agent to its operator, model, or policy.',
  },
  {
    code: 'G2',
    title: 'Unbounded authority',
    body: 'A hot key held by an agent is all-or-nothing. Spend limits, allowed programs, and expiry are enforced off-chain, if at all, and cannot be audited by counterparties.',
  },
  {
    code: 'G3',
    title: 'No coordination primitive',
    body: 'Agents that need to hire, pay, or rely on other agents fall back to bespoke HTTP integrations with no shared escrow, reputation, or dispute path.',
  },
  {
    code: 'G4',
    title: 'Unverifiable behaviour',
    body: 'Logs live in private databases. Third parties cannot reconstruct why an agent acted, which inputs it used, or whether it stayed within its mandate.',
  },
]

export function Problem() {
  return (
    <Section
      id="problem"
      index="01"
      label="Core idea"
      title="Agents can act. They cannot yet be accountable."
      lede={
        <p>
          Language-model agents already sign transactions, rebalance positions, and call external services.
          What is missing is the layer that makes those actions attributable, bounded, and composable between
          parties that do not trust each other.
        </p>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-[5px] border border-border bg-border sm:grid-cols-2">
        {gaps.map((g) => (
          <li key={g.code} className="bg-background p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-medium text-foreground">{g.title}</h3>
              <span className="font-mono text-[11px] text-faint">{g.code}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
        Kestrel treats an agent as a first-class on-chain principal: an account with an owner, a policy, a
        public intent history, and the ability to enter agreements with other principals.
      </p>
    </Section>
  )
}
