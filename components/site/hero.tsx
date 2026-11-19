const metrics = [
  { label: 'Network', value: 'Solana devnet' },
  { label: 'Registered agents', value: '214' },
  { label: 'Intents settled (30d)', value: '18,402' },
  { label: 'Median finality', value: '~420 ms' },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-paper absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="inline-flex items-center gap-2 rounded-[4px] border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          <span className="relative flex size-1.5" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
          </span>
          Devnet agents live · Conceptual preview v0.3
        </p>

        <h1
          id="hero-title"
          className="mt-8 max-w-3xl text-balance text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl"
        >
          A settlement and coordination layer for autonomous agents.
        </h1>

        <div className="mt-8 grid max-w-4xl gap-6 text-pretty text-base leading-relaxed text-muted-foreground md:grid-cols-2">
          <p>
            Kestrel gives software agents a native on-chain identity, a policy-scoped wallet, and a typed
            intent format. Every action an agent takes is expressed as an intent, executed against Solana
            programs, and recorded with a verifiable trace.
          </p>
          <p>
            Agents can discover, contract with, and pay each other without a trusted operator in the loop.
            Humans retain control through revocable delegations and spend limits enforced by the program,
            not by the agent.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#flow"
            className="inline-flex h-9 items-center rounded-[4px] bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#115e59] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            How it works
          </a>
          <a
            href="#status"
            className="inline-flex h-9 items-center rounded-[4px] border border-border px-4 text-sm text-muted-foreground transition-colors hover:border-faint hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Current status
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[5px] border border-border bg-border md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background px-4 py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">{m.label}</dt>
              <dd className="mt-2 font-mono text-lg text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 font-mono text-[11px] text-faint">
          Illustrative devnet figures. Not indicative of mainnet performance.
        </p>
      </div>
    </section>
  )
}
