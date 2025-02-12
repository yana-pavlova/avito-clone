import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="min-w-[320px] max-w-[2200px] mx-auto w-full bg-gray-900 text-white py-3 px-6 flex items-center justify-between">
      <button
        className="hidden max-[450px]:block text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <nav
        className={`absolute top-16 left-0 w-full bg-gray-900 min-[451px]:static min-[451px]:flex min-[451px]:gap-4 min-[451px]:w-auto ${
          menuOpen ? 'flex flex-col items-center gap-2 py-4' : 'hidden'
        }`}
      >
        <Link to="/" className="hover:text-gray-400">
          На главную
        </Link>
        <Link to="/list" className="hover:text-gray-400">
          Каталог
        </Link>
      </nav>

      <Link
        to="/form"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 min-[451px]:mt-0 ml-auto"
      >
        Разместить объявление
      </Link>
    </header>
  )
}
