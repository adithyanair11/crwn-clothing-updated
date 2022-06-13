import styled from 'styled-components'

export const CartDropDownContainer = styled.div `
    position: absolute;
    height: 340px;
    width:240px;
    display: flex;
    flex-direction: column;
    padding:20px;
    border: 1px solid #000;
    background-color: #fff;
    top:90px;
    right:40px;
    z-index: 5;
    
    button{
        margin-top: auto;
    }
`

export const CartItems = styled.div `
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
`

export const EmptyMessage = styled.span ` 
    margin: 50% auto;
`
