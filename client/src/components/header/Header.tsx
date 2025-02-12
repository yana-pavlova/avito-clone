import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchContext } from '../../store/searchContext'
import { useDebounce } from '../../useDebounce'
import { ItemType } from '../../types/types'
import { MainMenu } from '../menu/MainMenu'
import { ExtraMenu } from '../menu/ExtraMenu'

export const Header = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const { setSearchInput, setSearchCategory } = useSearchContext()

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
      <MainMenu setSearchInput={setSearchInput} resetCategory={resetCategory} />
      <ExtraMenu
        activeCategory={activeCategory}
        handleCategorySearch={handleCategorySearch}
      />
    </header>
  )
}
