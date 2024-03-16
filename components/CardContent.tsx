'use client'

import { useCartStore } from '@/lib/cart/store'
import { getProjects } from '@/lib/projects/getData'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
  Td,
  Text,
  IconButton,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { SlClose } from 'react-icons/sl'

const CartContent = () => {
  const { cart, remove } = useCartStore()

  if (cart.length === 0) {
    return <div>Your cart is empty</div>
  }

  const enrichedCart = cart.map((item) => {
    const project = getProjects().find((p) => p.id === item.id)
    return {
      ...item,
      ...project,
    }
  })
  const totalQuantity = enrichedCart.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  )
  const total = enrichedCart.reduce(
    (acc, { pricePerTon = 0, quantity }) => acc + pricePerTon * quantity,
    0
  )

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Project</Th>
            <Th isNumeric>Price per ton</Th>
            <Th isNumeric>Tons</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {enrichedCart.map(
            ({ id, name, supplierName, pricePerTon = 0, quantity }) => (
              <Tr key={id}>
                <Td>
                  <Flex gap={2}>
                    <Text>
                      {name} - {supplierName}
                    </Text>
                    <IconButton
                      size="xs"
                      aria-label="Remove from cart"
                      icon={<Icon as={SlClose} boxSize={4} />}
                      onClick={() => remove(id)}
                    />
                  </Flex>
                </Td>
                <Td isNumeric>${pricePerTon.toLocaleString('en-US')}</Td>
                <Td isNumeric>{quantity.toLocaleString('en-US')}</Td>
                <Td isNumeric fontWeight="bold">
                  ${Number(pricePerTon * quantity).toLocaleString('en-US')}
                </Td>
              </Tr>
            )
          )}
        </Tbody>
        <Tfoot fontWeight="bold">
          <Tr>
            <Td>Total:</Td>
            <Td></Td>
            <Td isNumeric>{totalQuantity.toLocaleString('en-US')}</Td>
            <Td isNumeric>${total.toLocaleString('en-US')}</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default CartContent
