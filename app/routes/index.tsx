import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className='size-full flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl md:text-5xl lg:text-7xl text-center'>Nitro + (Drizzle x Turso x SQLite) + React</h1>
      <p className='text-emerald-600 text-xl'>Starter Kit</p>
    </main>
  )
}
