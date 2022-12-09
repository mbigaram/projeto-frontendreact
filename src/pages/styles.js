import styled from 'styled-components'

export const DivContainer = styled.div`
 margin-bottom: 12.4vh;
 margin-top: 70px;   
`

export const MainApp = styled.main`
display: flex;
flex-direction: column;
height: 100%;

.back{
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -1;
}
`
export const DivFooter = styled.div`
 position: fixed;
 bottom: 0;
 width: 100vw;
`
export const DivFooter2 = styled.div`

 
`


export const Home = styled.h1`
   font-size: 60px;
   margin-top: 1vh;
   width: 40vw;
   margin-left: 65px;
   color: rgb(139, 164, 176);
   font-family: 'Stick No Bills', sans-serif; 
`

export const Obs = styled.p`
   display: flex;
   flex-direction: column;
   text-align: center;
   border: 2px solid rgb(139, 164, 176);
   background: rgb(28, 56, 70, 0.6);
   padding: 15px;
   border-radius: 15px;
   width: 50vw;
   height: 0 auto;
   font-size: 19px;
   margin-top: 2%;
   color: rgb(139, 164, 176);
   font-family: 'Saira Condensed', sans-serif; 
   .bolso{
    display: flex;
    justify-content: center;
    font-size: 21px;
   }
   .logo{
    display: flex;
    justify-content: center;
    gap:20px; 
    
}
.rs{
    display:flex;
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
`

export const Homeobs = styled.span`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%; 
   font-size: 20px;
   color: rgb(139, 164, 176);
   font-family: 'Saira Condensed', sans-serif; 
`

export const ButtonC = styled.button`
        padding: 8px;
        width: 180px;
        background: rgb(139, 164, 176);
        color:rgb(28, 56, 70);
        font-family: 'Saira Condensed', sans-serif; 
        font-size: 23px;
        border: none;
        border-radius: 10px;
        box-shadow: 1px 1px 5px grey;
        cursor: pointer;
        transition: 1s;

:hover{
    background-color: rgb(139, 164, 176);
    color: rgb(130, 98, 138);
    transform: translateY(-5px);
    
}
`

export const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const Cadastro = styled.p`
    display: flex;
    justify-content: center;   
    font-family: 'Stick No Bills', sans-serif; 
    color: rgb(139, 164, 176);
    font-size: 30px;
`
