import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchContext } from '../../store/searchContext'
import { useDebounce } from '../../useDebounce'
import { ItemType } from '../../types/types'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const { setSearchInput, setSearchCategory } = useSearchContext()

  const debouncedSetSearchTerm = useDebounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 3) {
        setSearchInput(e.target.value)
      } else {
        setSearchInput('')
      }
    },
    300
  )

  const handleCategorySearch = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement

    if (target) {
      const category = (target.dataset.category as ItemType) || null
      setActiveCategory(category)
      setSearchCategory(category)
    }
  }

  const resetCategory = () => {
    const category = null
    setActiveCategory(category)
    setSearchCategory(category)
  }

  return (
    <header className="min-w-[320px] max-w-[2200px] mx-auto w-full">
      <div className="w-full bg-gray-900 text-white py-3 px-6 flex items-center justify-between">
        <button
          className="hidden max-[767px]:block text-white"
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
            onClick={resetCategory}
            className="hover:text-gray-400"
          >
            Каталог
          </Link>
          <form className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md">
            <input
              type="text"
              placeholder="Поиск..."
              className="bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 w-30 min-[600px]:w-40"
              onChange={debouncedSetSearchTerm}
            />
          </form>
        </nav>

        <Link
          to="/form"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 min-[451px]:mt-0 ml-auto"
        >
          Разместить объявление
        </Link>
      </div>

      <div className="w-full bg-gray-200 text-gray-700 py-2 px-6 flex justify-center gap-6">
        {['Недвижимость', 'Авто', 'Услуги'].map((category) => (
          <span
            key={category}
            data-category={category}
            onClick={handleCategorySearch}
            className={`hover:text-gray-500 cursor-pointer ${
              activeCategory === category ? 'font-bold' : ''
            }`}
          >
            {category}
          </span>
        ))}
      </div>
    </header>
  )
}
