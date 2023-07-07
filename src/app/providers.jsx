// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export function Providers({
    children
}) {

    const theme = extendTheme({
        initialColorMode: "system",
        useSystemColorMode: false,
        colors: {
            light: {},
            dark: {}
        }
    })


    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}