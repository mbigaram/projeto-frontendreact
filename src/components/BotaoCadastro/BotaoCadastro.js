import React from 'react'
import { Button } from './styles'
import {goToSignupPage} from "../../router/coordinator"
import { useNavigate } from "react-router-dom"

const BotaoCadastro = () => {

    const navigate = useNavigate()


  return (
    <Button onClick={()=>goToSignupPage(navigate, '22022703')}>
          Entre ou Cadastre-se
        </Button>
  )
}

export default BotaoCadastro