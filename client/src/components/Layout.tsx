import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="relative min-w-[320px] max-w-[2200px] mx-auto w-full flex-grow flex flex-col h-full justify-center items-center bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  )
}
