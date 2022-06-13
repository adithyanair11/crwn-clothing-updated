import styled from 'styled-components'

export const CategoryProducts = styled.div `
    display: flex;
    flex-direction: column;
`

export const CategoryTitle = styled.h1 `
    margin-bottom: 1em;
    text-transform: capitalize;
    text-align: center;
`

export const CategoryContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap:20px;
    row-gap: 50px;
`
