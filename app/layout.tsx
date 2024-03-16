import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import CartIcon from '@/components/CartIcon'
import { Flex } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Flex as="header" justify="space-between">
          Carbon Project Marketplace <CartIcon />
        </Flex>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
