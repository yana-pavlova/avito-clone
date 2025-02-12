interface ExtraMenuProps {
  handleCategorySearch: (e: React.MouseEvent<HTMLSpanElement>) => void
  activeCategory: string | null
}

export const ExtraMenu = ({
  handleCategorySearch,
  activeCategory,
}: ExtraMenuProps) => {
  return (
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
  )
}
