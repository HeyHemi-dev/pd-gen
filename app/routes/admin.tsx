import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import Page from '~/components/ui/page'
import Section from '~/components/ui/section'
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import AddIndustry from '~/components/addIndustry'

//import { appSettings } from '~/data'
import { getIndustries } from '~/api/appSettings'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'Admin' }, { name: 'description', content: 'Admin panel' }]
}

export const loader = async () => {
  const industries = await getIndustries()
  if (!industries) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ industries })
}

export default function Admin() {
  const { industries } = useLoaderData<typeof loader>()
  return (
    <Page>
      <Section>
        <h1>Admin Panel</h1>
        <ul className="flex flex-col gap-2">
          {industries.map((industry, index) => (
            <li key={index}>
              <Card>
                <div className="flex p-2 gap-2">
                  <p className="flex-grow">{industry}</p>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
        <AddIndustry />
      </Section>
    </Page>
  )
}
