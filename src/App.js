import React from "react"
import Router from "./router/Router"
import { ChakraProvider } from '@chakra-ui/react'
import { createGlobalStyle } from "styled-components"


export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {


  return (
    <>
    <ChakraProvider>
     <GlobalStyled />
    <Router/>
    </ChakraProvider>
    </>
  );
}


export default App;
