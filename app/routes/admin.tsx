import type { MetaFunction } from '@remix-run/node'
import Page from '~/components/ui/page'
import Section from '~/components/ui/section'

import { Link, Outlet } from '@remix-run/react'
import { Separator } from '~/components/ui/separator'
import { selectFields } from '~/data'

export const meta: MetaFunction = () => {
  return [{ title: 'Admin' }, { name: 'description', content: 'Admin panel' }]
}

export default function Admin() {
  return (
    <Page>
      <Section>
        <div className="grid gap-4 auto-rows-max">
          <h1 className="heading-2xl">Admin Panel</h1>
          <div className="grid grid-cols-[1fr_2fr] gap-4">
            <div className="grid gap-2 auto-rows-max pr-16">
              <h2>Update Form Options</h2>
              <Separator className="bg-ta" />
              <ul>
                <li>
                  <Link to={'/admin/prompt'}>Prompt</Link>
                </li>
                {selectFields.map((selectField, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/admin/${selectField.name}`}>
                        {selectField.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </Section>
    </Page>
  )
}
