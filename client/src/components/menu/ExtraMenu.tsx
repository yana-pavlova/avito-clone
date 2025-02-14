import { Link } from 'react-router-dom'

interface ExtraMenuProps {
  handleCategorySearch: (e: React.MouseEvent<HTMLSpanElement>) => void
  activeCategory: string | null
  setSearchInput: (term: string) => void
  resetCategory: () => void
}

export const ExtraMenu = ({
  handleCategorySearch,
  activeCategory,
  setSearchInput,
  resetCategory,
}: ExtraMenuProps) => {
  const resetSearch = () => {
    resetCategory()
    setSearchInput('')
  }
  return (
    <div className="w-full bg-gray-200 text-gray-700 py-2 px-6 flex justify-center gap-6 flex-col items-center gap-2 min-[350px]:flex-row min-[350px]:gap-6 max-[350px]:gap-1">
      <Link
        to="/list"
        onClick={resetSearch}
        className={`hover:text-gray-500 cursor-pointer ${
          activeCategory === null ? 'font-bold' : ''
        }`}
      >
        Каталог
      </Link>
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
  )
}
