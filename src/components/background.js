import { Box } from '@chakra-ui/react'

const Background = () => (
  <Box
    position="absolute"
    zIndex={-1}
    w="full"
    h="930px"
    bgImage='url("images/background-pattern.png")'
    bgRepeat="no-repeat"
    bgPosition="center"
    bgSize={{ base: '1920px 930px', '2xl': '100% 930px' }}
  />
)

export default Background
