import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiDownloadCloud } from 'react-icons/fi'
import { Card } from './Card'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const App = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
      <Box bg="bg-accent" pt={{ base: '0', lg: '3' }} flex="1">
        <Box bg="bg-canvas" borderTopLeftRadius={{ base: 'none', lg: '2rem' }} height="full">
          {/* <Container py="8">
            <Stack spacing={{ base: '8', lg: '6' }}>
              <Stack
                spacing="4"
                direction={{ base: 'column', lg: 'row' }}
                justify="space-between"
                align={{ base: 'start', lg: 'center' }}
              >
                <Stack spacing="1">
                  <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
                    aaa
                  </Heading>
                  <Text color="muted">All important metrics at a glance</Text>
                </Stack>
                <HStack spacing="3">
                  <Button variant="secondary" leftIcon={<FiDownloadCloud fontSize="1.25rem" />}>
                    Download
                  </Button>
                  <Button variant="primary">Create</Button>
                </HStack>
              </Stack>
              <Stack spacing={{ base: '5', lg: '6' }}>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
                  <Card />
                  <Card />
                  <Card />
                </SimpleGrid>
              </Stack>
              <Card minH="sm" />
            </Stack>
          </Container> */}
        </Box>
      </Box>
    </Flex>
  )
}
