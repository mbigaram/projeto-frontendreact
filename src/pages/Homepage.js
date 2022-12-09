import React from "react"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import BotaoCadastro from '../components/BotaoCadastro/BotaoCadastro'
import { DivContainer, MainApp, Home, Obs, Homeobs } from './styles'
import background from '../assets/img/galaxy.png'
import {goToProductPage} from "../router/coordinator"
import { useNavigate } from "react-router-dom"
import { ButtonC, NavContainer, DivFooter } from './styles'




function HomePage() {
    
  const navigate = useNavigate()
  
    return (
      <MainApp>
        <div className="back" style={{ backgroundImage: `url(${background})` }}>
      </div>
      <Header/>
      <BotaoCadastro/>
        <DivContainer className="divhome">
            <Homeobs>
          <Home>O CÉU NÃO É O LIMITE</Home>
          <Obs>Preço faturamento direto de acordo com a categoria de venda. Para a categoria Astronautas (formação NASA) preço com isenção total (IPI e ICMS) em dólar, podendo variar de acordo com a tributação e alíquotas de cada Estado e de modalidades de venda direta.<br/>Taxa de juros 0%, IPVA e tranferência pagos. Até 72X.<br/>Outras cores e tipos de pintura possuem custo adicional. O sistema de exibição na tela não reproduz a cor real do foguete. <br/><div className="logo">
            
          <span className="rs">
            <h2 className="rocket">Rocket</h2>
            <h2 className="shopping">Shopping </h2>
          </span>
          <br/>
          <span><p className="bolso">O Foguete que cabe no seu bolso.</p></span>
        </div></Obs>
          </Homeobs>
          <NavContainer>          
        <ButtonC onClick={()=>goToProductPage(navigate)}>
          Comece a comprar
        </ButtonC>   
      </NavContainer>
        </DivContainer>
      <DivFooter>
        <Footer/>
        </DivFooter>
      </MainApp>
    );
  }
  
  export default HomePage;