import React, { createContext, useEffect, useState } from 'react'

// Create Context
export const CartContext = createContext()

const CartProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [itemsAmount, setItemsAmount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)

  // Cart Amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount
    }, 0)

    setItemsAmount(amount)

  }, [cart])

  // Cart Total
  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + c.attributes.price * c.amount
    }, 0)
    setTotal(total)
  }, [cart])

  // Add To Cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id)
    const newItem = { ...item[0], amount: 1 }
    setCart([...cart, newItem])
    // Check if item is already in the cart
    const cartItem = cart.find(item => {
      return item.id === itemID
    })

    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1)
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
    // Open The Cart Sidebar
    setIsOpen(true)
  }

  // Remove from Cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  // Handle Input
  const handleInput = (e, id) => {
    const value = parseInt(e.target.value)
    // Find The Item In The Cart By ID
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1)
            return { ...item, amount: 1 }
          } else {
            setAmount(value)
            return { ...item, amount: value }
          }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    setIsOpen(true)
  }

  // Handle Select
  const handleSelect = (e, id) => {
    const value = parseInt(e.target.value)
    const cartItem = cart.find(item => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          setAmount(value)
          return { ...item, amount: value }
        } else {
          return item
        }
      })

      setCart(newCart)
    }
  }

  // Clear Cart
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        handleSelect,
        total,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider