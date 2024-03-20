import { extendTheme } from '@chakra-ui/react'

import { cardTheme } from './components/card'
import { numberInputTheme } from './components/numberInput'
import { tagTheme } from './components/tag'
import { buttonTheme } from './components/button'
import { headingTheme } from './components/heading'
import { tableTheme } from './components/table'
const theme = extendTheme({
  colors: {
    custom: {
      bg: '#a5b4fb',
      yellow: '#FFF066',
      green: '#9dfc7c',
      pink: '#FA8CEF',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'custom.bg',
      },
    },
  },
  fonts: {
    heading: 'var(--font-space-grotesk)',
    body: 'var(--font-space-grotesk)',
  },
  components: {
    NumberInput: numberInputTheme,
    Card: cardTheme,
    Tag: tagTheme,
    Button: buttonTheme,
    Heading: headingTheme,
    Table: tableTheme,
  },
})

export default theme
