import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'

const CART_STORAGE_KEY = 'my_app_cart'

const AppContext = createContext(null)

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('AppContext must be within AppContextProvider')
  }

  return context
}

const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)

    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (design) => {
   const oldCart = [...cart]
   const newCart = oldCart.concat(design)
   setCart(newCart)
  }

  const removeFromCart = (designId) => {
    const oldCart = [...cart]
    const newCart = oldCart.filter((design =>design.id !== designId))
    setCart(newCart)
  }

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
