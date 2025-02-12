import { createContext, useContext, useState } from 'react'

interface SearchContextType {
  searchInput: string
  setSearchInput: (term: string) => void
}

const SearchContext = createContext<SearchContextType | null>(null)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
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
