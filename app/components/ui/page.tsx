export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <header></header>
      <main className="content">{children}</main>
      <footer></footer>
    </div>
  )
}
