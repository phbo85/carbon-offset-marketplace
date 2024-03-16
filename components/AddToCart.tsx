'use client'

import { useState } from 'react'
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
  const { add: addToCart } = useCartStore()
  const [amount, setAmount] = useState(max)
  const handleChange = (_: string, valueAsNumber: number) =>
    setAmount(valueAsNumber)
  const total = price * amount

  return (
    <>
      <InputGroup>
        <InputLeftAddon>t</InputLeftAddon>
        <NumberInput
          value={amount}
          onChange={handleChange}
          defaultValue={max}
          max={max}
          min={0}
          precision={0}
          w="100%"
        >
          <NumberInputField borderLeftRadius={0} />
        </NumberInput>
      </InputGroup>
      <Text>${total}</Text>
      <Button onClick={() => addToCart(id, amount)}>Add to Cart</Button>
    </>
  )
}

export default AddToCart
