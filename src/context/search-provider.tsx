import { createContext, useContext, useEffect, useState } from 'react'
import { CommandMenu } from '@/components/command-menu'

interface SearchContextType {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchContext = createContext<SearchContextType | null>(null)

interface SearchProviderProps {
  children: React.ReactNode
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <SearchContext value={{ open, setOpen }}>
      {children}
      <CommandMenu />
    </SearchContext>
  )
}

export function useSearch() {
  const searchContext = useContext(SearchContext)

  if (!searchContext) {
    throw new Error('useSearch has to be used within SearchProvider')
  }

  return searchContext
}
