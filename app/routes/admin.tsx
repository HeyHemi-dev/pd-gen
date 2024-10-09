import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'Admin' }, { name: 'description', content: 'Admin panel' }]
}

export default function Admin() {
  return <div>Admin Panel</div>
}
