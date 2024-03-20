import { create } from 'zustand'

type CartItem = {
  id: number
  quantity: number
}

type CartStore = {
  cart: CartItem[]
  total: () => number
  // eslint-disable-next-line no-unused-vars
  add: (id: number, amount: number) => void
  // eslint-disable-next-line no-unused-vars
  remove: (id: number) => void
  clear: () => void
}

const updateCart = (
  id: number,
  amount: number,
  cart: CartItem[]
): CartItem[] => {
  const isItemInCart = cart.some((item) => item.id === id)

  if (isItemInCart) {
    return cart.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity + amount }
      return item
    })
  }
  return [...cart, { id, quantity: amount }]
}

const removeCart = (id: number, cart: CartItem[]): CartItem[] => {
  return cart.filter((item) => item.id !== id)
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  total: () => {
    const { cart } = get()
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  },
  add: (id: number, amount: number) => {
    const { cart } = get()
    const updatedCart = updateCart(id, amount, cart)
    set({ cart: updatedCart })
  },
  remove: (id: number) => {
    const { cart } = get()
    const updatedCart = removeCart(id, cart)
    set({ cart: updatedCart })
  },
  clear: () => set({ cart: [] }),
}))
