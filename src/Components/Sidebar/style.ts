import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxSide = styled.nav`
    background-color: #151515;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
`

export const SideBarMainPerfil = styled.div`
    display: flex;
    flex-direction: row;
    color: #ffffff;
    align-items: center;
    gap: 0px 20px;
    padding: 10px 0px 20px;
    border-bottom: #ffffff 5px solid;
    cursor: pointer;
`

export const FotoPerfil = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 100px;
    margin-left: 12px;
`

export const SideBarSvgImg = styled.img`
    width: 40px;
    margin-right: 22px;
    margin-left: 6px;
`

export const SidebarDivMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const SidebarDivBotaoMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const SidebarBotaoMenu = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    color: #ffffff;
    transition: background-color 300ms, color 300ms;

    &:hover {
        cursor: pointer;
        text-decoration: none;
        background-color: #ffffff;
        color: #252525;

        & ${SideBarSvgImg} {
            filter: invert(0.8); // Remove o filtro invert no hover
        }
    }
`;