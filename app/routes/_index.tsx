import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { pdCompletion } from '~/api/genDocument'
import PdDocument from '~/components/pdDocument'
import PdForm from '~/components/pdForm'
import Page from '~/components/ui/page'
import Section from '~/components/ui/section'

export const meta: MetaFunction = () => {
  return [
    { title: 'PD Gen' },
    { name: 'description', content: 'Free Position Description Generator' },
  ]
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const chatCompletion = await pdCompletion(formData)
  return chatCompletion?.choices[0].message.content
}

export default function Index() {
  const pdDocumentData = useActionData<string | undefined>()
  return (
    <Page>
      <Section>
        <div className="grid gap-4 grid-rows-[auto_1fr]">
          <h1>Free Position Description Generator</h1>
          <div className="grid grid-cols-[1fr_2fr] gap-4 grid-rows-[auto_1fr]">
            <PdForm />
            <div className="row-span-full col-start-2 grid">
              <PdDocument data={pdDocumentData} />
            </div>
          </div>
        </div>
      </Section>
    </Page>
  )
}
