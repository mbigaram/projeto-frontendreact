import React from "react"
import { createGlobalStyle } from "styled-components";
import {Header} from "./Header/Header"
import Produtos from "./Produtos/Produtos"
import './App.css';

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


function App() {
  return (
    
    <>
      <GlobalStyled />
      <Header>
      </Header>
      <Produtos>
      </Produtos>    
    </>
     
  );
}

export default App;