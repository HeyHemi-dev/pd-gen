import { json } from '@remix-run/node'
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/ta-button'
import AddSelectItem from '~/components/addSelectFieldItem'
import { Form, useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { addSelectItem, getSelectField } from '~/serverless/appSettings'
import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.selectField, 'Missing param')
  const selectField = await getSelectField(params.selectField)
  if (!selectField) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ selectField })
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
    return addSelectItem('industries', optionName)
  }
}

export default function ManageSelectField() {
  const { selectField } = useLoaderData<typeof loader>()
  console.log({ selectField })
  return (
    <div className="grid gap-4">
      <ul className="flex flex-col gap-2">
        {selectField.items.map((item, index) => (
          <li key={index}>
            <Card>
              <Form method="post" className="flex px-4 py-2 gap-2 items-center">
                <p className="flex-grow">{item}</p>

                <Button variant="ghost">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </Form>
            </Card>
          </li>
        ))}
      </ul>
      <AddSelectItem selectField={selectField} />
    </div>
  )
}
