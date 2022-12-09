import styled from 'styled-components'

export const Button = styled.button`
        position: fixed;
        right: 36px;
        top: 12px;
        padding: 8px;
        width: 150px;
        background: rgb(139, 164, 176);
        color:rgb(28, 56, 70);
        font-family: 'Saira Condensed', sans-serif; 
        font-size: 15px;
        border: none;
        border-radius: 10px;
        box-shadow: 1px 1px 5px grey;
        cursor: pointer;
        z-index: 1;
        transition: 1s;
        :hover{
            transform: translateY(-5px);
        }
`