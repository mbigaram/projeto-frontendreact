import React from "react"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { DivFooter, Cadastro, MainApp } from './styles'
import background from '../assets/img/galaxy.png'
import { goToLoginPage } from "../router/coordinator"
import { goToProductPage } from "../router/coordinator"
import { useNavigate } from "react-router-dom"

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';





function SignupPage() {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainApp>
      <div className="back" style={{ backgroundImage: `url(${background})` }}>
      </div>
      <Header />
      <Flex
        mt={'13vh'}
        align={'center'}
        justify={'center'}
      >
        <Cadastro>
          Cadastro
        </Cadastro>
      </Flex>

      <Flex
        align={'center'}
        justify={'center'}
      >
        <Stack
          spacing={2}
          mx={'auto'}
          maxW={'ls'} 
          px={6}
          >
          <Box
            rounded={'ls'}
            bg={useColorModeValue('rgb(28, 56, 70, 0.6)')}
            border={'2px solid rgb(139, 164, 176)'}
            borderRadius={'15px'}
            p={8}>
            <Stack 
              spacing={1.5}
              color={'rgb(139, 164, 176)'}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Primeiro nome</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Sobrenome</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={7}>
                <Button 
                  onClick={() => goToProductPage(navigate)}
                  loadingText="Submitting"
                  size="lg"
                  bg={'rgb(139, 164, 176)'}
                  color={'rgb(130, 98, 138)'}
                  transition={"1s"}
                  _hover={{
                    transform:"translateY(-5px)",
                    bg: 'rgb(130, 98, 138)',
                    color:'rgb(139, 164, 176)',
                  }}>
                  Cadastrar e comprar
                </Button>
              </Stack>
              <Stack pt={2}>
                <Text align={'center'}>
                  Já possui cadastro? <Link 
                  onClick={() => goToLoginPage(navigate)}
                  color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <DivFooter>
        <Footer />
      </DivFooter>
    </MainApp>
  );
}

export default SignupPage;