import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  slug: string
  name: string
  price: number
  quantity: number
  image: string
  orderType: 'one-time' | 'subscription'
  frequency?: '30' | '60' | '90'
}

interface CartState {
  items: CartItem[]
  isCartOpen: boolean
  addItem: (item: CartItem) => void
  // UPDATED: Now accepts specific details to identify the exact item
  removeItem: (slug: string, orderType: 'one-time' | 'subscription', frequency?: '30' | '60' | '90') => void
  updateQuantity: (slug: string, quantity: number, orderType: 'one-time' | 'subscription', frequency?: '30' | '60' | '90') => void
  openCart: () => void
  closeCart: () => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isCartOpen: false,

      addItem: (newItem) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) =>
              i.slug === newItem.slug &&
              i.orderType === newItem.orderType &&
              i.frequency === newItem.frequency
          )

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i === existingItem
                  ? { ...i, quantity: i.quantity + newItem.quantity }
                  : i
              ),
              isCartOpen: true,
            }
          }
          return {
            items: [...state.items, newItem],
            isCartOpen: true,
          }
        }),

      // UPDATED: Remove only the item that matches ALL criteria
      removeItem: (slug, orderType, frequency) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.slug === slug && i.orderType === orderType && i.frequency === frequency)
          ),
        })),

      // UPDATED: Update quantity for the specific variant
      updateQuantity: (slug, quantity, orderType, frequency) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.slug === slug && i.orderType === orderType && i.frequency === frequency
              ? { ...i, quantity }
              : i
          ),
        })),

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'prysm-cart-storage',
      skipHydration: true,
    }
  )
)