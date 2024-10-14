export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="page"
      className="grid grid-rows-[auto_1fr_auto] min-h-svh bg-ta-darkyellow text-ta-p"
    >
      <header></header>
      <main id="content" className="grid">
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
