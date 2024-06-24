import { Pagination } from "@mui/material";
import styled from "styled-components";

export const LayoutEstoque = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const LayoutGridEstoque = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 15px;
`
export const LayoutGridPosicao = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: space-around;
`

export const PaginationStyled = styled(Pagination)`
    filter: invert(1);
    transition: 500ms;
    align-self: center;
    padding: 10px;
`
export const ButtonsSeparetors = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 16px;
    gap: 16px;
    align-items: center;
    
`
