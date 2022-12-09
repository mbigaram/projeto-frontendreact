import styled from 'styled-components'


export const CarrinhoAside = styled.aside`
position: fixed;
right: 1.5%;
width: 323px;

.propag{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3px;
    gap: 6px;
    font-family: 'Saira Condensed', sans-serif;
    font-size: 25px;
    color: rgb(139, 164, 176);
        
}
.logo{
    display: flex;
    
}
.rocket{
    font-family: 'Stick No Bills', sans-serif; 
    background:rgb(130, 98, 138);
    border: 2px solid rgb(139, 164, 176);
    border-bottom-left-radius : 10px;
    border-top-left-radius : 10px;
    padding: 0 10px;
    }
.shopping{
    font-family: 'Stick No Bills', sans-serif; 
    color: rgb(130, 98, 138);
    background: rgb(139, 164, 176);
    border-top: 2px solid rgb(139, 164, 176);
    border-right: 2px solid rgb(139, 164, 176);
    border-bottom: 2px solid rgb(139, 164, 176);
    border-bottom-right-radius : 10px;
    border-top-right-radius : 10px;
    padding: 0 10px;
    }

.nome{
    display: flex;
    font-family: 'Stick No Bills', sans-serif; 
    color: rgb(139, 164, 176);
    font-size: 30px;
}

.vazio{
    text-align: center;
    font-size: 25px;

}

.carrinho{
    display: flex;
    flex-direction: column;
    background: rgb(28, 56, 70, 0.6);
    font-family: 'Stick No Bills', sans-serif; 
    margin-top: 12px;
    padding: 10px 0;
    border: 2px solid rgb(139, 164, 176);
    color: rgb(139, 164, 176);
    border-radius: 15px;
    gap: 4px;
}

.valor{
    display: flex;
    padding: 0 10px;
    font-family: 'Saira Condensed', sans-serif;
}

.foguete {
    flex-basis: 100px;
   
}

.botoes {
    display: flex;
    flex-basis: 100px;
    justify-content: space-between;
    padding-right: 10px;
   
}

.precolix {
    display: flex;
    flex-basis: 100px;
    justify-content: space-between;
    
}

.botao{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: rgb(139, 164, 176);
    color:rgb(28, 56, 70);
    font-family: 'Saira Condensed', sans-serif;  
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 3px grey;    
}



.liximg{
    width: 20px; 
    cursor: pointer;   
}


.carcesta {
    display: flex;
    justify-content: center;
    gap: 20px; 
}

.cesta {
    font-family: 'Saira Condensed', sans-serif; 
    font-size: 14px;
    background: rgb(28, 56, 70);
    border-radius: 50%;
    width: 25px;
    border: 2px solid rgb(139, 164, 176);
    color: rgb(139, 164, 176);
    position: absolute;
    right: 73px;
    top: -6px; 

}

.imagemCarrinho{
    width: 36px;  
}


.valortotal{
    display: flex;
    gap: 37px;
    text-decoration: overline;
    font-family: 'Stick No Bills', sans-serif;
    padding: 0px 10px;
}
`
export const Finalizar = styled.button`
    cursor: pointer;
    background: rgb(139, 164, 176);
    color:rgb(28, 56, 70);
    font-family: 'Saira Condensed', sans-serif;  
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 3px grey; 
    padding: 0 21px;
 
`