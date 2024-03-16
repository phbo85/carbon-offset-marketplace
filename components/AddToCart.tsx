'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react'
import { useCartStore } from '@/lib/cart/store'

const AddToCart = ({
  id,
  max,
  price,
}: {
  id: number
  max: number
  price: number
}) => {
  const { cart, add: addToCart } = useCartStore()
  const item = cart.find((item) => item.id === id)
  const possibleAmount = item ? max - item.quantity : max
  const [amount, setAmount] = useState(possibleAmount)
  const handleChange = (_: string, valueAsNumber: number) =>
    setAmount(valueAsNumber)
  const total = price * amount

  useEffect(() => {
    setAmount(possibleAmount)
  }, [possibleAmount])

  return (
    <>
      <InputGroup>
        <InputLeftAddon>t</InputLeftAddon>
        <NumberInput
          value={amount}
          onChange={handleChange}
          max={possibleAmount}
          min={0}
          precision={0}
          w="100%"
        >
          <NumberInputField borderLeftRadius={0} />
        </NumberInput>
      </InputGroup>
      <Text>${total}</Text>
      <Button
        onClick={() => addToCart(id, amount)}
        isDisabled={possibleAmount === 0}
      >
        Add to Cart
      </Button>
    </>
  )
}

export default AddToCart
