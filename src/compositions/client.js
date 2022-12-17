import { useState } from 'react'

import {
  Box,
  Container,
  Image,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { motion, AnimatePresence } from 'framer-motion'

import Delayed from '../components/delayed'

const clientList = [
  {
    picSrc: 'images/client-a4d.png',
    name: 'Kevin Wolf',
    company: `SVP of Soles & Email Marketing\nA4D LLC | NIB Direct | Jamiak Ink`,
    description: `BlueSky has been a valued partner of ours for over a year now! We could not be happier with the work they have done for us and
      sister companies. Their design work has been top notch, across multiple projects, channels, and verticals. Their attention to detail, prompt
      response time and amazing design work has changed our company for the better and we are forever grateful. We recommend BlueSky's services to 
      anyone in the digital space and we look forward to working with them on numerous projects in the future!`
  },
  {
    picSrc: 'images/client-growmyfirmonline.png',
    name: 'John H',
    company: `Founding Partner\nGrow My Firm Online`,
    description: `BlueSky was amazing to work with. I've built my own websites for years, subcontracted many times, and often I've found it's easier/cheaper to do it myself than deal with outsourcing. With BlueSky, I couldn't have been more happy and it was such a smooth process. I will never build my own site again. BlueSky all the way will 100% use them again on my next projects.`
  },
  {
    picSrc: 'images/client-cs.png',
    name: 'Ben Paisley',
    company: `Chief Technology Officer\nGetLiveHelp, Inc.`,
    description: `We hired BlueSky to build out a custom platform for our call center. Their communication was great, they were very professional and the work was very well documented. I highly recomend working with BlueSky as it is hard to find a good dev company of this caliber. We will definitely use them again for future dev work.`
  }
]

const ClientContent = ({ index }) => (
  <AnimatePresence exitBeforeEnter mode="wait">
    <motion.div
      key={'client-' + (index + 1)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <Stack align="center" pb={5}>
        <Image maxH={{ base: 55, md: 90 }} src={clientList[index].picSrc} />
        <Heading fontSize={{ base: 18, md: 24 }}>
          {clientList[index].name}
        </Heading>
        <Box
          fontSize={{ base: 14, md: 16 }}
          maxW={280}
          align="center"
          whiteSpace="pre"
        >
          {clientList[index].company}
        </Box>
        <Image maxH={{ base: 5, md: 8 }} src="images/5-stars.png" />
      </Stack>
      <Box align="center" fontSize={{ base: 16, md: 24 }}>
        {clientList[index].description}
      </Box>
    </motion.div>
  </AnimatePresence>
)

const Client = () => {
  const [indexPage, setIndexPage] = useState(0)

  return (
    <Box
      w="full"
      overflowX="clip"
      bgImage="url(images/background-asset-03.png)"
      bgRepeat="no-repeat"
      bgPosition="bottom"
      bgSize={{ base: '1920px 2085px', '2xl': '100%' }}
    >
      <Container maxW="930px" py={20} centerContent>
        <Heading
          fontWeight={800}
          fontSize={['36px', '39px', '42px', '45px', '48px']}
          mb={10}
        >
          CREATE
          <Delayed onView={true} from="right" fromOpaque={false}>
            <Text color="blue">YOUR SOFTWARE ECOSYSTEM</Text>
          </Delayed>
        </Heading>

        <Delayed onView={true} from="down" fromOpaque={false}>
          <Image w="full" src="images/software-ecosystem-web-asset.png" />
        </Delayed>
      </Container>

      <Container
        id="what-clients-say"
        maxW="1240px"
        pt={16}
        pb={150}
        centerContent
      >
        <Heading
          fontWeight={800}
          fontSize={['36px', '39px', '42px', '45px', '48px']}
          mb={10}
        >
          WHAT
          <Text>OUR CLIENTS</Text>
          <Delayed onView={true} from="right" fromOpaque={false}>
            <Text transform="translateX(25%)" color="blue">
              ARE SAYING
            </Text>
          </Delayed>
        </Heading>

        <Stack align="start" w={{ base: '70%', md: 'full' }} maxW="930px">
          <Heading
            transform="translateY(0.2em)"
            color="blue"
            pointerEvents="none"
            fontFamily={`'Montserrat', sans-serif`}
            fontWeight={700}
            fontSize={{ base: 150, md: 370 }}
            lineHeight={0}
          >
            <AnimatePresence exitBeforeEnter mode="wait">
              <motion.div
                key={'lsquo-' + indexPage}
                initial={{ x: -50, rotate: 10 }}
                animate={{ x: 0, rotate: 0 }}
                exit={{ x: -50, rotate: 10 }}
              >
                {' '}
                &lsquo;&lsquo;
              </motion.div>
            </AnimatePresence>
          </Heading>
        </Stack>
        <Flex w="full">
          <Stack mx={{ base: -6, md: 0 }} justify="center">
            <ChevronLeftIcon
              onClick={() => {
                const newIndex = indexPage - 1
                setIndexPage(newIndex < 0 ? clientList.length - 1 : newIndex)
              }}
              cursor="pointer"
              transform="scaleY(1.5)"
              opacity={0.4}
              _hover={{ opacity: 1 }}
              fontSize={80}
            />
          </Stack>

          <Stack
            flex={1}
            px={{ base: 5, md: 16 }}
            pt={{ base: 5, md: 8 }}
            pb={{ base: 8, md: 20 }}
            minH={{ base: 400, md: 600 }}
            bg="purple2"
            boxShadow="15px 15px #00000022"
            fontSize={{ base: 18, md: 24 }}
            borderRadius={25}
          >
            <Delayed onView={true} from="down">
              <ClientContent index={indexPage} />
            </Delayed>
          </Stack>

          <Stack mx={{ base: -6, md: 0 }} justify="center">
            <ChevronRightIcon
              onClick={() => {
                const newIndex = indexPage + 1
                setIndexPage(newIndex + 1 > clientList.length ? 0 : newIndex)
              }}
              cursor="pointer"
              transform="scaleY(1.5)"
              opacity={0.4}
              _hover={{ opacity: 1 }}
              fontSize={80}
            />
          </Stack>
        </Flex>

        <Stack align="end" w={{ base: '70%', md: 'full' }} maxW="930px">
          <Heading
            transform="rotate(180deg) translateY(0.2em)"
            color="blue"
            pointerEvents="none"
            fontFamily={`'Montserrat', sans-serif`}
            fontWeight={700}
            fontSize={{ base: 150, md: 370 }}
            lineHeight={0}
          >
            <AnimatePresence exitBeforeEnter mode="wait">
              <motion.div
                key={'lsquo-' + indexPage}
                initial={{ x: -50, rotate: 10 }}
                animate={{ x: 0, rotate: 0 }}
                exit={{ x: -50, rotate: 10 }}
              >
                {' '}
                &lsquo;&lsquo;
              </motion.div>
            </AnimatePresence>
          </Heading>
        </Stack>

        <Stack
          w="full"
          zIndex={0}
          direction="row"
          align="center"
          justify="center"
          py={16}
          spacing={3}
        >
          {clientList.map(({ name }, i) => (
            <Box
              key={name + '-' + (i + 1)}
              boxSize={indexPage === i ? '15px' : '10px'}
              bg="black"
              opacity={indexPage === i ? 0.9 : 0.4}
              borderRadius="full"
            />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default Client
