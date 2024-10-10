import type { MetaFunction } from '@remix-run/node'
import { AppSettings } from '~/data'

export const meta: MetaFunction = () => {
  return [{ title: 'Admin' }, { name: 'description', content: 'Admin panel' }]
}

export default function Admin() {
  return <div>Admin Panel</div>
}
