import React from "react"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { DivFooter, Cadastro, MainApp } from './styles'
import background from '../assets/img/galaxy.png'
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





function LoginPage() {

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
          Login
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
            bg={useColorModeValue('rgb(28, 56, 70, 0.6)', 'gray.700')}
            border={'2px solid rgb(139, 164, 176)'}
            borderRadius={'15px'}
            p={8}>
            <Stack 
              spacing={1.5}
              color={'rgb(139, 164, 176)'}>
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
              <Stack spacing={10} pt={8}>
                <Button onClick={() => goToProductPage(navigate)}
                  loadingText="Submitting"
                  size="lg"
                  bg={'rgb(139, 164, 176)'}
                  color={'rgb(130, 98, 138)'}
                  transition={"1s"}
        
                  _hover={{
                    transform:"translateY(-5px)",
                    color: 'rgb(139, 164, 176)',
                    bg: 'rgb(130, 98, 138)',
                  }}>
                  Continuar comprando
                </Button>
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

export default LoginPage;