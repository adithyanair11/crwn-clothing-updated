import styled from 'styled-components';

export const CartItemContainer = styled.div ` 
    display: flex;
    align-items: center;
    width:100%;
    height: 70px;
    gap:0.5em;
    margin-bottom: 1em;
`
export const ItemImage = styled.img ` 
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const CartItemImage = styled.div ` 
    width:60px;
    height:100%;
`

export const CartItemDetails = styled.div ` 
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    gap:0.6em;
`


