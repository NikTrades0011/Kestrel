import { SiteNav } from '@/components/site/site-nav'
import { Hero } from '@/components/site/hero'
import { Problem } from '@/components/site/problem'
import { Flow } from '@/components/site/flow'
import { Scenarios } from '@/components/site/scenarios'
import { Architecture } from '@/components/site/architecture'
import { Principles } from '@/components/site/principles'
import { Roadmap } from '@/components/site/roadmap'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <Flow />
        <Scenarios />
        <Architecture />
        <Principles />
        <Roadmap />
      </main>
      <SiteFooter />
    </>
  )
}
