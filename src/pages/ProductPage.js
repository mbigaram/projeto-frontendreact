import React from "react"
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import BotaoCadastro from '../components/BotaoCadastro/BotaoCadastro'
import data from '../data'
import { DivFooter2, DivContainer, MainApp } from './styles'
import background from '../assets/img/galaxy.png'




function ProductPage() {
    const { products } = data;
  
    return (
      <MainApp>
        <div className="back" style={{ backgroundImage: `url(${background})` }}>
      </div>
      <Header/>
      <BotaoCadastro/>
        <DivContainer>
          <Main 
          products={products} 
          ></Main>   
        </DivContainer>
        <DivFooter2>
        <Footer/>
        </DivFooter2>
      </MainApp>
    );
  }
  
  export default ProductPage;