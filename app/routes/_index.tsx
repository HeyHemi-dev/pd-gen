import { parseWithZod } from '@conform-to/zod'
import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node'
import { json, useActionData, useLoaderData } from '@remix-run/react'
import { getSelectFields } from '~/serverless/appSettings'
import { pdCompletion } from '~/serverless/genDocument'
import PdDocument from '~/components/pdDocument'
import PdForm, { pdFormSchema } from '~/components/pdForm'
import Page from '~/components/ui/page'
import Section from '~/components/ui/section'

export const meta: MetaFunction = () => {
  return [
    { title: 'PD Gen' },
    { name: 'description', content: 'Free Position Description Generator' },
  ]
}

export async function loader() {
  const selectFields = await getSelectFields()
  if (!selectFields) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ selectFields })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const submission = parseWithZod(formData, { schema: pdFormSchema })
  // console.log({ submission })
  if (submission.status !== 'success') {
    return null
  }

  const chatCompletion = await pdCompletion(submission.payload)
  return chatCompletion?.choices[0].message.content
}

export default function Index() {
  const { selectFields } = useLoaderData<typeof loader>()
  const pdDocumentData = useActionData<string | undefined>()

  return (
    <Page>
      <Section>
        <div className="grid gap-4 grid-rows-[auto_1fr]">
          <h1 className="heading-2xl">Job Description Generator</h1>
          <div className="grid grid-cols-[1fr_2fr] gap-4 grid-rows-[auto_1fr]">
            <PdForm selectFields={selectFields} />
            <div className="row-span-full col-start-2 grid">
              <PdDocument markdown={pdDocumentData} />
            </div>
          </div>
        </div>
      </Section>
    </Page>
  )
}
