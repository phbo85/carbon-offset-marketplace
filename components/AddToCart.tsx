'use client'

import { useState, useEffect } from 'react'
import {
  Button,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { useCartStore } from '@/lib/cart/store'
import { BsCartCheck, BsCartPlus } from 'react-icons/bs'

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
  const total = amount * price
  const handleChange = (_: string, valueAsNumber: number) =>
    setAmount(valueAsNumber)

  useEffect(() => {
    setAmount(possibleAmount)
  }, [possibleAmount])

  return (
    <Flex justify="space-between" gap={6} w="full">
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
      <Button
        leftIcon={
          possibleAmount === 0 ? (
            <Icon as={BsCartCheck} />
          ) : (
            <Icon as={BsCartPlus} />
          )
        }
        onClick={() => addToCart(id, amount)}
        isDisabled={possibleAmount === 0}
      >
        {possibleAmount === 0 ? 'in cart' : `$${total.toLocaleString('en-US')}`}
      </Button>
    </Flex>
  )
}

export default AddToCart
