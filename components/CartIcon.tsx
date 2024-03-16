'use client'

import NextLink from 'next/link'
import { useCartStore } from '@/lib/cart/store'
import { BsCart2 } from 'react-icons/bs'
import { Button, Icon } from '@chakra-ui/react'

export default function CartButton() {
  const { total } = useCartStore()

  return (
    <NextLink href="/cart">
      <Button leftIcon={<Icon as={BsCart2} w={22} h={22} />}>
        {total().toLocaleString('en-US')} tons
      </Button>
    </NextLink>
  )
}
