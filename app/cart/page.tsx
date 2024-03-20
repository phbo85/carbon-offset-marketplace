import CartContent from '@/components/CardContent'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from '@chakra-ui/react'

const CartPage = () => {
  return (
    <Card m={10}>
      <CardHeader>
        <Heading as="h2">Your Cart</Heading>
      </CardHeader>
      <CardBody>
        <CartContent />
      </CardBody>
      <CardFooter>
        <Button ml="auto" isDisabled={true}>
          Checkout
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CartPage
