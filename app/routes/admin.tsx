import type { MetaFunction } from '@remix-run/node'
import Page from '~/components/ui/page'
import Section from '~/components/ui/section'

import { Link, Outlet } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'Admin' }, { name: 'description', content: 'Admin panel' }]
}

export default function Admin() {
  return (
    <Page>
      <Section>
        <div className="grid gap-4 auto-rows-max">
          <h1>Admin Panel</h1>
          <div className="grid grid-cols-[1fr_2fr] gap-4">
            <div>
              <h2>Update Form Options</h2>
              <ul>
                <li>
                  <Link to={'/admin/tone'}>Tone</Link>
                </li>
                <li>
                  <Link to={'/admin/industry'}>Industry</Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </Section>
    </Page>
  )
}
