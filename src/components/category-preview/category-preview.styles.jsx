import styled from 'styled-components';
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div ` 
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const CategoryTitle = styled.span` 
    font-size: 20px;
    margin-bottom: 25px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
`
export const Preview = styled.div ` 
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap:20px;
`
