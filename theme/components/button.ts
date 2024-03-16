import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const solid = defineStyle({
  outline: '2px solid black',
  color: 'black',
  bg: 'custom.pink',
  fontWeight: 'bold',
  px: 7,
  py: 5,
  _hover: {
    boxShadow: '3px 3px 0px rgba(0,0,0,1)',
    bg: 'custom.pink',
  },
})

export const buttonTheme = defineStyleConfig({
  variants: { solid },
})
