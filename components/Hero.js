import Link from 'next/link'
import {
  Box,
  Button,
  Circle,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue as mode,
  LightMode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaPlay } from 'react-icons/fa'
import * as Logos from './Brands'

export const Hero = () => {
  return (
    <Box>
      <Box as="section" bg="gray.800" color="white" pt="7.5rem">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Box textAlign="center">
            <Heading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              Manage & Monetize <br/> your API Products
            </Heading>
            <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
              Offer your API-as-a-Service to instantly on-board developers, 
              issue API keys, and sell subscriptions to your API Products
            </Text>
          </Box>

          <Stack
            justify="center"
            direction={{ base: 'column', md: 'row' }}
            mt="10"
            mb="20"
            spacing="4"
          >
            <LightMode>
              <Link href="https://services.studio">
                <a>
                  <Button
                    as="a"
                    href="#"
                    size="lg"
                    colorScheme="blue"
                    px="8"
                    fontWeight="bold"
                    fontSize="md"
                  >
                    Get started free
                  </Button>
                </a>
              </Link>
              <Link href="/signup">
                <a>
                  <Button
                    as="a"
                    href="#"
                    size="lg"
                    colorScheme="whiteAlpha"
                    px="8"
                    fontWeight="bold"
                    fontSize="md"
                  >
                    Schedule demo
                  </Button>
                </a>
              </Link>
            </LightMode>
          </Stack>

          <Box
            mb={{ base: '-20', md: '-40' }}
            className="group"
            cursor="pointer"
            position="relative"
            rounded="lg"
            overflow="hidden"
          >
            <Img
              alt="Screenshot of Envelope App"
              src="https://res.cloudinary.com/adebayosegun/image/upload/v1611835286/Chakra%20UI/screenshot-base.png"
            />
            <Circle
              size="20"
              as="button"
              bg="white"
              shadow="lg"
              color="blue.600"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              fontSize="xl"
              transition="all 0.2s"
              _groupHover={{
                transform: 'translate3d(-50%, -50%, 0) scale(1.05)',
              }}
            >
              <VisuallyHidden>Play demo video</VisuallyHidden>
              <FaPlay />
            </Circle>
          </Box>
        </Box>
      </Box>

      <Box as="section" pt={{ base: '40', md: '64' }} pb="24">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Text
            fontWeight="bold"
            fontSize="sm"
            textAlign="center"
            textTransform="uppercase"
            letterSpacing="wide"
            color={mode('gray.600', 'gray.400')}
          >
            Powering the next generation of API-as-a-Service
          </Text>
          <SimpleGrid
            mt="8"
            columns={{ base: 1, md: 2, lg: 6 }}
            color="gray.500"
            alignItems="center"
            justifyItems="center"
            spacing={{ base: '12', lg: '24' }}
            fontSize="2xl"
          >
            <Logos.ChatMonkey />
            <Logos.Wakanda />
            <Logos.Lighthouse />
            <Logos.Plumtic />
            <Logos.WorkScout />
            <Logos.Finnik />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
