import { json } from '@remix-run/node'
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import AddIndustry from '~/components/addIndustry'
import { Form, useLoaderData } from '@remix-run/react'
import { addIndustry, getIndustries } from '~/api/appSettings'
import type { ActionFunctionArgs } from '@remix-run/node'

export async function loader() {
  const industries = await getIndustries()
  if (!industries) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ industries })
}
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()

  const intent = formData.get('intent')
  console.log(intent)

  if (intent === 'ADD-OPTION') {
    const optionName = formData.get('optionName')
    if (typeof optionName !== 'string') {
      throw new Response('Invalid Form Data', { status: 500 })
    }
    return addIndustry(optionName)
  }
}

export default function ManageIndustries() {
  const { industries } = useLoaderData<typeof loader>()
  return (
    <div className="grid gap-4">
      <ul className="flex flex-col gap-2">
        {industries.map((industry, index) => (
          <li key={index}>
            <Card>
              <Form method="post" className="flex px-4 py-2 gap-2 items-center">
                <p className="flex-grow">{industry}</p>
                <Button variant="ghost">Edit</Button>
                <Button variant="ghost">Delete</Button>
              </Form>
            </Card>
          </li>
        ))}
      </ul>
      <AddIndustry />
    </div>
  )
}
