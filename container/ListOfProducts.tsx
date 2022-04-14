export const ListOfProducts = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid xl:grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2">
      {children}
    </section>
  )
}
