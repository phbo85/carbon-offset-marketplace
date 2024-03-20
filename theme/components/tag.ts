import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    outline: '2px solid black',
    color: 'black',
    bg: 'custom.yellow',
  },
})

export const tagTheme = defineMultiStyleConfig({ baseStyle })
