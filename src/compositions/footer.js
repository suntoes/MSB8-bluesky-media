import { useEffect, useState } from 'react'

import {
  Box,
  Flex,
  Container,
  Heading,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react'

import { sendMail } from '../lib/axios'

import StyledForm from '../components/styled-form'

const Footer = () => {
  const [error, setError] = useState('')
  const [agree, setAgree] = useState(false)
  const [captcha, setCaptcha] = useState(null)
  const [stage, setStage] = useState('loading')
  const [form, setForm] = useState({})

  useEffect(() => {
    const oldForm = localStorage.getItem('form') || '{}'
    setStage('form')
    setForm(JSON.parse(oldForm))
  }, [])

  const handleMissing = () => {
    const keys = ['name', 'email', 'phone', 'company', 'message']
    const missing = keys.filter(key => !(form[key] || null))
    let message = 'Please fill out '

    if (!missing.length) return false
    else if (missing.length === 1) message += missing[0]
    else {
      for (let i = 0; i < missing.length; i++) {
        if (i === 0) message += missing[i]
        else if (i === missing.length - 1) message += ` and ${missing[i]}`
        else message += `, ${missing[i]}`
      }
    }

    return message
  }

  const handleInput = (key, value) => {
    const newForm = { ...form, [key]: value }
    setForm(newForm)
    localStorage.setItem('form', JSON.stringify(newForm))
  }

  const handleSubmit = () => {
    const missing = handleMissing()
    const disagreed = agree ? false : 'Please agree to the form conditions'
    const unauthorized = captcha ? false : 'Invalid captcha, please try again'

    if (missing || disagreed || unauthorized) return setError(missing || disagreed || unauthorized)

    const callback = res => {
      if (!res || res?.status === 400) return setStage('error')
      setStage('done')
      localStorage.removeItem('form')
    }

    setStage('loading')
    sendMail({ ...form, captcha }).then(callback)   
  }

  return (
    <Box
      id="contact"
      overflowX="clip"
      w="full"
      mt="-110px"
      pt="120px"
      bgImage="url(images/background-pattern-05.png)"
      bgRepeat="no-repeat"
      bgPosition="bottom"
      bgSize={{ base: '1920px 100%', '2xl': '100% 100%' }}
      style={{ 'input:invalid': { border: '2px solid pink' } }}
    >
      <Container maxW={970} centerContent>
        <Box w="full" maxW={830}>
          <Heading fontSize={['38px', '50px', '54px', '58px', '60px']}>
            CONTACT{' '}
            <Text
              display="inline-block"
              color="white"
              fontSize={['36px', '39px', '42px', '45px', '48px']}
            >
              US TODAY!
            </Text>
          </Heading>
        </Box>
        <Flex
          direction="column"
          align="center"
          bg="yellow"
          mt={8}
          mb={14}
          py={[10, 5, 14]}
          px={[10, 8, 20]}
          fontSize={{ base: 18, md: 24 }}
          boxShadow="15px 15px #00000099"
        >
          {stage === 'loading' ? (
            <Spinner size="xl" />
          ) : stage === 'done' ? (
            "Your message has been successfully sent. We'll try to get back to you ASAP, thanks!"
          ) : stage !== 'form' ? (
            'Something went wrong. Your answers are saved. Please refresh and try submitting again'
          ) : (
            <StyledForm
              form={form}
              error={error}
              agree={agree}
              setAgree={setAgree}
              setCaptcha={setCaptcha}
              onChange={handleInput}
              onSubmit={handleSubmit}
            />
          )}
        </Flex>
      </Container>
      <Box w="full" bg="purple3">
        <Container px={0} maxW="1920px">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            color="white"
            minH={55}
            py={2}
            fontSize={14}
            align="center"
            justify="space-evenly"
            spacing={0}
          >
            <Text>Copyright © Blueskyroi.com | All rights reserved</Text>
            <Text>Terms and Conditions | Privacy Policy</Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
