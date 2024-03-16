import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    border: '2px solid black',
    borderRadius: 'md',
    height: 'full',
    _hover: {
      boxShadow: '8px 8px 0px rgba(0,0,0,1)',
      bg: 'white',
    },
    background: 'white',
    transition: 'all 0.2s ease-in-out',
  },
})

export const cardTheme = defineMultiStyleConfig({ baseStyle })
