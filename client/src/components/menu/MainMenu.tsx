import { ChangeEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

interface MainMenuProps {
  setSearchInput: (term: string) => void
  resetCategory: () => void
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const MainMenu = ({
  resetCategory,
  setSearchInput,
  searchHandler,
}: MainMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const resetSearchInputGlobal = () => {
    setSearchInput('')
    resetLocalInputValue()
  }

  const resetAnySearch = () => {
    resetCategory()
    resetSearchInputGlobal()
    resetLocalInputValue()
  }

  const resetLocalInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className="w-full bg-gray-900 text-white py-3 px-6 flex items-center justify-between">
      <button
        className="hidden max-[767px]:block text-white cursor-pointer"
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
        className={`absolute top-16 left-0 w-full bg-gray-900 min-[768px]:static min-[768px]:flex min-[768px]:gap-4 min-[768px]:w-auto items-center ${
          menuOpen ? 'flex flex-col items-center gap-2 py-4' : 'hidden'
        }`}
      >
        <Link
          to="/list"
          onClick={resetAnySearch}
          className="hover:text-gray-400"
        >
          Каталог
        </Link>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Поиск..."
            className="bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 w-30 min-[600px]:w-40"
            onChange={searchHandler}
          />
        </form>
      </nav>

      <Link
        onClick={resetAnySearch}
        to="/form"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 min-[451px]:mt-0 ml-auto"
      >
        Разместить объявление
      </Link>
    </div>
  )
}
