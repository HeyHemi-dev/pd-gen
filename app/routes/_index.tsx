import type { MetaFunction } from '@remix-run/node'
import Page from '~/components/ui/page'
import Section from '~/components/ui/section'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <>
      <Page>
        <Section>
          <h1>Home</h1>
        </Section>
      </Page>
    </>
  )
}
