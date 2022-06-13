import styled from 'styled-components';


export const CheckItem = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:1em;
    padding-bottom:1em;
    width:100%;
    border-bottom: 1px solid #000;
`
export const CheckItemImage = styled.img ` 
    width:150px;
    height:200px;
    object-fit: cover;
`

export const CheckItemSpan = styled.span ` 
    font-weight: bold;
    font-size: 20px;
`
export const Arrows = styled.span ` 
    cursor: pointer;
`

export const Remove = styled.span ` 
    cursor: pointer;
`

