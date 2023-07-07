"use client"

import { Box } from '@chakra-ui/react'
import ToggleTheme from '@/components/Toggletheme'

export default function Home() {
  return (
    <>
      <ToggleTheme />
      <Box h="100vh">
      </Box>
    </>
  )
}
