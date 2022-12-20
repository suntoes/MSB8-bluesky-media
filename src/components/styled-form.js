import { Link as DOMLink } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react'
import styled from '@emotion/styled'

const StyledCheckbox = styled(Checkbox)`
  .chakra-checkbox__control {
    background: white;
  }
`

const StyledInput = props => (
  <Input
    h="48px"
    fontSize={{ base: 18, md: 24 }}
    bg="white"
    borderRadius="10px"
    outline="none"
    _placeholder={{ color: 'black' }}
    {...props}
  />
)

const StyledForm = ({ agree, setAgree, form, error, onChange, onSubmit }) => (
  <>
    {error ? (
      <Text fontSize="1rem" color="red" ml="12px" w="full">
        {error}
      </Text>
    ) : (
      <></>
    )}
    <Stack
      w="full"
      direction={{ base: 'column', md: 'row' }}
      spacing={[2, 2, 8]}
    >
      <StyledInput
        type="name"
        placeholder="Full Name"
        value={form?.name}
        onChange={e => onChange('name', e.target.value)}
        isRequired
      />
      <StyledInput
        type="email"
        placeholder="Email Address"
        value={form?.email}
        onChange={e => onChange('email', e.target.value)}
        isRequired
      />
    </Stack>
    <Stack
      w="full"
      mt={2}
      direction={{ base: 'column', md: 'row' }}
      spacing={[2, 2, 8]}
    >
      <StyledInput
        placeholder="Phone Number"
        value={form?.phone}
        onChange={e => onChange('phone', e.target.value)}
        isRequired
      />
      <StyledInput
        placeholder="Company"
        value={form?.company}
        onChange={e => onChange('company', e.target.value)}
        isRequired
      />
    </Stack>

    <Textarea
      type="text"
      placeholder="Message"
      value={form?.message}
      onChange={e => onChange('message', e.target.value)}
      isRequired
      fontSize={{ base: 18, md: 24 }}
      mt={2}
      py={2}
      px={4}
      bg="white"
      minH={156}
      borderRadius="10px"
      outline="none"
      _placeholder={{ color: 'black' }}
    />

    <Flex my={2} w="full">
      <StyledCheckbox
        colorScheme="green"
        isChecked={agree}
        onChange={e => setAgree(e.target.checked)}
      />

      <Text ml={5}>
        I agree to the{' '}
        <Link as={DOMLink} textDecoration="underline" to="/terms">
          Terms of Condition
        </Link>{' '}
        and acknowledge the{' '}
        <Link as={DOMLink} textDecoration="underline" to="/privacy">
          Privacy Policy
        </Link>
      </Text>
    </Flex>

    <Button
      onClick={onSubmit}
      h={45}
      bg="red"
      borderRadius="10px"
      w="full"
      fontSize={30}
      fontWeight={700}
      color="white"
      _hover={{
        background: 'red',
        opacity: 0.5
      }}
    >
      Submit
    </Button>
  </>
)

export default StyledForm
