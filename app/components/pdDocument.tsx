import ReactMarkdown from 'react-markdown'

export default function PdDocument({
  markdown,
}: {
  markdown: string | undefined
}) {
  // console.log({ markdown })
  return (
    <div className="bg-ta rounded-md shadow-sm p-8 grid place-content-center">
      <div className="max-w-lg">
        {markdown ? (
          <>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </>
        ) : (
          <p className="text-ta-grey">Generate a document</p>
        )}
      </div>
    </div>
  )
}
