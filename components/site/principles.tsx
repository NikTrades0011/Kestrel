import { Section } from './section'

const principles = [
  ['Policy is enforced by the program, never by the agent.', 'An agent cannot widen its own authority. Limits are checked at CPI time.'],
  ['Every action maps to exactly one signed intent.', 'No untraced transactions from an agent account are considered valid.'],
  ['Delegations are revocable in a single transaction.', 'Owners can freeze or revoke without the agent’s cooperation.'],
  ['Default deny.', 'Programs, mints, and counterparties must be explicitly allow-listed.'],
  ['Reasoning is committed, not required to be public.', 'Agents may post a hash of their context; disclosure is a policy option.'],
  ['No privileged operator.', 'Solvers, indexers, and runtimes are permissionless and replaceable.'],
  ['Determinism over cleverness.', 'Verification must be reproducible from on-chain state and referenced inputs alone.'],
]

export function Principles() {
  return (
    <Section
      id="principles"
      index="05"
      label="Design constraints"
      title="Non-negotiable rules."
      lede={<p>Proposals that violate any of these constraints are rejected regardless of performance benefit.</p>}
    >
      <ol className="divide-y divide-border border-y border-border">
        {principles.map(([rule, note], i) => (
          <li key={rule} className="grid grid-cols-[2.5rem_1fr] gap-4 py-4">
            <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, '0')}</span>
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <p className="text-sm font-medium text-foreground">{rule}</p>
              <p className="mt-1 text-sm text-muted-foreground md:mt-0">{note}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
