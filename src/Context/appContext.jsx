import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'

const FAVORITES_STORAGE_KEY = 'my_app_favorites'

const AppContext = createContext(null)

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('AppContext must be within AppContextProvider')
  }

  return context
}

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY)

    return storedFavorites ? JSON.parse(storedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (design) => {
    const newFavorites = [...favorites, design]
    setFavorites(newFavorites)
  }

  const removeFromFavorites = (designId) => {
    const newFavorites = favorites.filter((design) => design.id !== designId)
    setFavorites(newFavorites)
  }

  return (
    <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
