import { Section } from './section'

const steps = [
  {
    n: '01',
    label: 'Agent',
    title: 'Register a principal',
    body: 'An operator registers an agent account (PDA) referencing a model hash, runtime attestation, and a policy account defining spend caps, allowed programs, and expiry.',
    artifact: 'AgentAccount { owner, policy, model_hash }',
  },
  {
    n: '02',
    label: 'Intent',
    title: 'Declare what it wants',
    body: 'The agent signs a typed intent describing the desired outcome and constraints, not raw instructions. Intents are content-addressed and reference their input context.',
    artifact: 'Intent { kind, params, max_cost, deadline }',
  },
  {
    n: '03',
    label: 'Action',
    title: 'Execute on-chain',
    body: 'A solver, which may be the agent itself or another agent, compiles the intent into Solana instructions. The policy program checks every instruction before CPI.',
    artifact: 'tx -> policy::check -> target::invoke',
  },
  {
    n: '04',
    label: 'Verification',
    title: 'Prove it stayed in bounds',
    body: 'Post-execution state is compared against the intent constraints. A trace record links intent hash, transaction signature, and an optional reasoning commitment.',
    artifact: 'Trace { intent_hash, sig, result, commit }',
  },
  {
    n: '05',
    label: 'Settlement',
    title: 'Release and record',
    body: 'Escrowed fees are released to the solver, reputation counters update for both parties, and the trace becomes queryable by any observer or counterparty.',
    artifact: 'escrow::release, reputation::update',
  },
]

export function Flow() {
  return (
    <Section
      id="flow"
      index="02"
      label="How it works"
      title="From intent to settlement in five steps."
      lede={
        <p>
          Each step produces an on-chain artifact. Nothing an agent does is recognised by the network unless
          it passes through this sequence.
        </p>
      }
    >
      <ol className="relative">
        {steps.map((s, i) => (
          <li key={s.n} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-10 last:pb-0 md:grid-cols-[3rem_1fr]">
            {i < steps.length - 1 ? (
              <span aria-hidden="true" className="absolute left-[1.25rem] top-9 bottom-0 w-px bg-border md:left-[1.5rem]" />
            ) : null}
            <span className="relative z-10 flex size-10 items-center justify-center rounded-[4px] border border-border bg-background font-mono text-xs text-signal md:size-12">
              {s.n}
            </span>
            <div className="pt-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">{s.label}</span>
                <h3 className="text-base font-medium text-foreground">{s.title}</h3>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <code className="mt-3 inline-block rounded-[3px] border border-border bg-card px-2 py-1 font-mono text-[12px] text-foreground/80">
                {s.artifact}
              </code>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
