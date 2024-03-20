import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    padding: '2.5',
    outline: '2px solid black',
    _focus: {
      boxShadow: '2px 2px 0px rgba(0,0,0,1)',
      bg: 'custom.green',
    },
    _active: {
      boxShadow: '2px 2px 0px rgba(0,0,0,1)',
    },
    borderRadius: 'md',
    transition: 'all 0.2s ease-in-out',
  },
})

export const numberInputTheme = defineMultiStyleConfig({ baseStyle })
