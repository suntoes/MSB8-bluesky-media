import { Fragment, useEffect, useRef, useState } from 'react'

import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Spacer,
  Text
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

import AbstractTab from '../components/abstract-tab'

const capabilityList = [
  'WEBSITE DESIGN',
  'BANNER ADS',
  'GRAPHIC DESIGN',
  'RESPONSIVE DESIGN',
  'LANDING PAGES',
  'MOBILE SITES',
  'LEAD GENERATION',
  'WORDPRESS',
  'SALES PAGES',
  'WEB DEVELOPMENT AND CODING',
  null,
  'COPYWRITING'
]

const DiscoverCapabilities = () => {
  const [containerHeight, setContainerHeight] = useState(724)
  const containerRef = useRef()

  const windowRezizeHandler = () => {
    clearTimeout(localStorage.getItem('bg-height-timer'))
    const timer = setTimeout(() => {
      if (containerRef) {
        setContainerHeight(containerRef.current.clientHeight)
      }
    }, 50)
    localStorage.setItem('bg-height-timer', timer)
  }

  useEffect(() => {
    windowRezizeHandler()
    window.addEventListener('resize', windowRezizeHandler)
    return () => window.removeEventListener('resize', windowRezizeHandler)
  }, [])

  return (
    <Box ref={containerRef} w="full" mb={120} overflowX="clip">
      <motion.div
        initial={{ y: 85, rotate: 0 }}
        whileInView={{ y: 105, rotate: 5, transition: { delay: 0.5 } }}
      >
        <Box
          position="absolute"
          zIndex={-1}
          h={containerHeight}
          w="full"
          minW="1895px"
          bgImage="url(images/background-pattern-03.png)"
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="1895px 100%"
        />
      </motion.div>
      <Container px={0} maxW="930px" centerContent>
        <Heading
          zIndex={1}
          textAlign="center"
          fontWeight={800}
          fontSize={['36px', '39px', '42px', '45px', '48px']}
        >
          DISCOVER
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            whileInView={{ y: -5, rotate: 5, transition: { delay: 0.5 } }}
          >
            <Text color="blue">OUR CAPABILITIES</Text>
          </motion.div>
        </Heading>

        <Flex w="full" mt={10} direction="row" spacing={1}>
          <Stack flex={1} spacing={{ base: 2, md: 3 }}>
            {capabilityList.map((title, index) =>
              index % 2 ? (
                <Fragment key={'capability-' + (index + 1)}></Fragment>
              ) : title ? (
                <AbstractTab
                  key={'capability-' + (index + 1)}
                  title={title}
                  index={index}
                />
              ) : (
                <Fragment key={'capability-' + (index + 1)}></Fragment>
              )
            )}
          </Stack>
          <Spacer maxW={{ base: 2, md: 3 }} />
          <Stack mt={10} flex={1} spacing={{ base: 2, md: 3 }}>
            {capabilityList.map((title, index) =>
              index % 2 ? (
                title ? (
                  <AbstractTab
                    key={'capability-' + (index + 1)}
                    title={title}
                    index={index}
                  />
                ) : (
                  <Fragment key={'capability-' + (index + 1)}></Fragment>
                )
              ) : (
                <Fragment key={'capability-' + (index + 1)}></Fragment>
              )
            )}
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default DiscoverCapabilities
