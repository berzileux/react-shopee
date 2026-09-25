import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product, selectedSize) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item._id === product._id && item.selectedSize === selectedSize
      )
      if (existing) {
        return prev.map((item) =>
          item._id === product._id && item.selectedSize === selectedSize
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }
      return [...prev, { ...product, selectedSize, qty: 1 }]
    })
  }

  const removeFromCart = (id, selectedSize) =>
    setCart((prev) =>
      prev.filter((item) => !(item._id === id && item.selectedSize === selectedSize))
    )

  const updateQty = (id, selectedSize, qty) =>
    setCart((prev) =>
      prev.map((item) =>
        item._id === id && item.selectedSize === selectedSize ? { ...item, qty } : item
      )
    )

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
