export default function PdDocument({ data }: { data: string | undefined }) {
  return (
    <div className="bg-ta rounded-md shadow-sm p-8 grid place-content-center">
      <div className="max-w-lg">
        {data ? (
          <>{data}</>
        ) : (
          <p className="text-ta-grey">Generate a document</p>
        )}
      </div>
    </div>
  )
}
