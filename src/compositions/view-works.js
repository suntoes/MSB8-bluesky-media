import { useState, Fragment } from 'react'

import {
  Box,
  Center,
  Container,
  Divider,
  Image,
  Heading,
  Stack,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

import { motion, AnimatePresence } from 'framer-motion'

import Delayed from '../components/delayed'
import FancyBox from '../components/fancy-box'

const workList = [
  {
    title: 'LANDING PAGES',
    works: [
      'images/works/landing-pages/1.png',
      'images/works/landing-pages/2.png',
      'images/works/landing-pages/3.png',
      'images/works/landing-pages/4.png',
      'images/works/landing-pages/5.png',
      'images/works/landing-pages/6.png'
    ]
  },
  {
    title: 'LEAD GENERATION',
    works: [
      'images/works/lead-generation/1.png',
      'images/works/lead-generation/2.png',
      'images/works/lead-generation/3.png',
      'images/works/lead-generation/4.png',
      'images/works/lead-generation/5.png',
      'images/works/lead-generation/6.png'
    ]
  },
  {
    title: 'E-COMMERCE',
    works: [
      'images/works/e-commerce/1.png',
      'images/works/e-commerce/2.png',
      'images/works/e-commerce/3.png',
      'images/works/e-commerce/4.png',
      'images/works/e-commerce/5.png',
      'images/works/e-commerce/6.png'
    ]
  },
  {
    title: 'LOGOS',
    works: [
      'images/works/logos/1.png',
      'images/works/logos/2.png',
      'images/works/logos/3.png',
      'images/works/logos/4.png',
      'images/works/logos/5.png',
      'images/works/logos/6.png'
    ]
  },
  {
    title: 'BANNERS',
    works: [
      'images/works/banners/1.png',
      'images/works/banners/2.png',
      'images/works/banners/3.png',
      'images/works/banners/4.png',
      'images/works/banners/5.png',
      'images/works/banners/6.png'
    ]
  }
]

const AnimatedWorksGrid = ({ index }) => (
  <AnimatePresence exitBeforeEnter initial={false}>
    <motion.div
      key={'animate-works-' + (index + 1)}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FancyBox>
        <SimpleGrid
          maxW="930px"
          columns={{ base: 2, sm: 3 }}
          mt={5}
          spacing={3}
          mb={-160}
        >
          {workList[index].works.map((picSrc, i) => (
            <Box key={'work-' + (i + 1)}>
              <a data-fancybox="gallery" href={picSrc}>
                <Image
                  src={picSrc}
                  _hover={{ transform: 'scale(1.2)' }}
                  transition="all .5s"
                />
              </a>
            </Box>
          ))}
        </SimpleGrid>
      </FancyBox>
    </motion.div>
  </AnimatePresence>
)

const ViewWorks = () => {
  const [listIndex, setListIndex] = useState(0)

  return (
    <>
      <Box
        overflowX="clip"
        id="our-work"
        transition="all .5ms"
        bgImage="url(images/background-pattern-02a.png)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="1363px 100%"
        py="20px"
        my="-130px"
        mb="100px"
        w="full"
      >
        <Box
          transition="all .5ms"
          bgImage="url(images/background-pattern-02b.png)"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={{ base: '1920px 100%', '2xl': '100% 100%' }}
          w="full"
        >
          <Box
            transition="all .5ms"
            bgImage="url(images/background-pattern-02c.png)"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="contain"
            py="150px"
            w="full"
          >
            <Container maxW="930px" transition="all .5ms" centerContent>
              <Heading
                fontWeight={800}
                fontSize={['36px', '39px', '42px', '45px', '48px']}
              >
                VIEW{' '}
                <Text display="inline-block" color="white">
                  OUR WORK
                </Text>
              </Heading>

              <Delayed fromOpaque={false} onView={true}>
                <Stack
                  mt={5}
                  direction="row"
                  bg="darkBlue"
                  w="100%"
                  px={[3, 4, 6]}
                  py={2}
                  borderRadius="full"
                  justify="space-evenly"
                >
                  {workList.map(({ title }, i) => (
                    <Fragment key={'work-tab-' + (i + 1)}>
                      <Heading
                        onClick={() => setListIndex(i)}
                        cursor="pointer"
                        marginBottom="-2 !important"
                        borderBottom={
                          i === listIndex
                            ? {
                                base: '2px solid orange',
                                md: '3px solid orange'
                              }
                            : ''
                        }
                        color="white"
                        fontWeight={500}
                        fontSize={[7, 10, 14, 18, 18]}
                      >
                        {title}
                      </Heading>
                      {i < workList.length - 1 ? (
                        <Center
                          h={[5, 6, 5, 6]}
                          w={['0px', '5px', '8px', '13px']}
                        >
                          <Divider orientation="vertical" />
                        </Center>
                      ) : (
                        <></>
                      )}
                    </Fragment>
                  ))}
                </Stack>
              </Delayed>

              <Delayed
                from="right"
                fromOpaque={false}
                onView={true}
                delay={0.2}
              >
                <AnimatedWorksGrid index={listIndex} />
              </Delayed>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ViewWorks
