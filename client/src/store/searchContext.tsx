import { createContext, useContext, useState } from 'react'
import { ItemType } from '../types/types'

interface SearchContextType {
  searchInput: string
  setSearchInput: (term: string) => void
  searchCategory: ItemType | null
  setSearchCategory: (term: ItemType) => void
}

const SearchContext = createContext<SearchContextType | null>(null)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchInput, setSearchInput] = useState('')
  const [searchCategory, setSearchCategory] = useState<ItemType | null>(null)

  return (
    <SearchContext.Provider
      value={{ searchInput, setSearchInput, searchCategory, setSearchCategory }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within an EditProvider')
  }
  return context
}
