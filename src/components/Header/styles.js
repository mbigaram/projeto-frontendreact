import styled from 'styled-components'


export const HeaderContainer = styled.main`
    font-family: 'Stick No Bills', sans-serif; 
    font-size: 40px;
    font-weight: bold;
    display: flex;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, rgb(28, 56, 70, 0.7) ,rgb(130, 98, 138), rgb(130, 98, 138) , rgb(130, 98, 138) , rgb(130, 98, 138), rgb(130, 98, 138), rgb(28, 56, 70, 0.7));
    border-bottom: 2px solid rgb(139, 164, 176);
    border-left: 2px solid rgb(139, 164, 176);
    border-right: 2px solid rgb(139, 164, 176);
    align-items: center;
    justify-content: center;
    color: rgb(139, 164, 176);
    border-bottom-left-radius : 15px;
    border-bottom-right-radius : 15px;
    height: 65px;
    width: 97%;
    margin-left: 1.5%;
    z-index: 1;

    .rocket{
        display: flex;
        align-items: center;
        height: 50px;
        border: 2px solid rgb(139, 164, 176);
        border-bottom-left-radius : 15px;
        border-top-left-radius : 15px;
        padding: 0 20px;
    }

    .shopping{
        display: flex;
        height: 50px;
        align-items: center;
        color: rgb(130, 98, 138);
        background: rgb(139, 164, 176);
        border-top: 2px solid rgb(139, 164, 176);
        border-right: 2px solid rgb(139, 164, 176);
        border-bottom: 2px solid rgb(139, 164, 176);
        border-bottom-right-radius : 15px;
        border-top-right-radius : 15px;
        padding: 0 20px;
    }
`
// export const Button = styled.button`
//         position: fixed;
//         right: 36px;
//         padding: 8px;
//         width: 150px;
//         background: rgb(139, 164, 176);
//         color:rgb(28, 56, 70);
//         font-family: 'Saira Condensed', sans-serif; 
//         font-size: 15px;
//         border: none;
//         border-radius: 10px;
//         box-shadow: 1px 1px 5px grey;
//         cursor: pointer;
// `