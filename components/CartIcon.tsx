'use client'

import { useCartStore } from '@/lib/cart/store'

export default function CartButton() {
  const { total } = useCartStore()

  return <div>{total()} tons</div>
}
