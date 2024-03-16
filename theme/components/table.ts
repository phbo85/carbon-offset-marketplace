import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

const baseStyle = definePartsStyle({
  th: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  tr: { border: '2px solid black' },
  tfoot: {
    fontSize: 'lg',
    bg: 'custom.green',
  },
})

const simple = definePartsStyle({
  th: {
    color: 'black',
    fontSize: 'xl',
  },
})

export const tableTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { simple },
})
