export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid auto-rows-max gap-2 px-4 py-20">
      {children}
    </section>
  )
}
