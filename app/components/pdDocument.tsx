export default function PdDocument({ data }: { data: string | undefined }) {
  return <div>{data ? <p>{data}</p> : <p>Generate a document</p>}</div>
}
