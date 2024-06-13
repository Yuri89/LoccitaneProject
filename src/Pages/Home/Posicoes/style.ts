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

export const PaginationStyled = styled(Pagination)`
    filter: invert(1);
    transition: 500ms;
    align-self: center;
    padding: 10px;
`
export const ButtonsSeparetors = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    & div{
        display: flex;
        gap: 16px;
    }
`
