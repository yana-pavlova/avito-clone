import { ChangeEvent, useState } from 'react'
import { useSearchContext } from '../../store/searchContext'
import { ItemType } from '../../types/types'
import { MainMenu } from '../menu/MainMenu'
import { ExtraMenu } from '../menu/ExtraMenu'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDebounce } from '../../useDebounce'

export const Header = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const { setSearchInput, setSearchCategory } = useSearchContext()
  const location = useLocation()
  const navigate = useNavigate()

  const handleCategorySearch = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement

    if (target) {
      if (
        location.pathname.includes('item/') ||
        location.pathname.includes('form')
      )
        navigate('/list')
      const category = (target.dataset.category as ItemType) || null
      setActiveCategory(category)
      setSearchCategory(category)
    }
  }

  const debouncedSetSearchTerm = useDebounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 3) {
        if (location.pathname.includes('item/')) navigate('/list')
        setSearchInput(e.target.value)
      } else {
        setSearchInput('')
      }
    },
    300
  )

  const resetCategory = () => {
    const category = null
    setActiveCategory(category)
    setSearchCategory(category)
  }

  return (
    <header className="min-w-[320px] max-w-[2200px] mx-auto w-full mb-8">
      <MainMenu
        setSearchInput={setSearchInput}
        resetCategory={resetCategory}
        searchHandler={debouncedSetSearchTerm}
      />
      <ExtraMenu
        setSearchInput={setSearchInput}
        resetCategory={resetCategory}
        activeCategory={activeCategory}
        handleCategorySearch={handleCategorySearch}
      />
    </header>
  )
}
