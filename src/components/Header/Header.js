import React from 'react';
import { HeaderContainer, Button } from './styles'
// import {goToSignupPage} from "../../router/coordinator"
// import { useNavigate } from "react-router-dom"


export default function Header(props) {

  // const navigate = useNavigate()

  return (
    <HeaderContainer>

      <h1 className="rocket">Rocket</h1><h1 className="shopping">Shopping </h1>
        {/* <Button onClick={()=>goToSignupPage(navigate, '22022703')}>
          Entre ou Cadastre-se
        </Button>  */}

    </HeaderContainer>
  );
}
