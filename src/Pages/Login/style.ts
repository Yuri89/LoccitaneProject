import { Box , TextField } from "@mui/material";
import styled from "styled-components";

export const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
`

export const FormStyled = styled.div`
    display: inline;

    & > :nth-child(1){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #252525;
    padding: 60px 40px;
    width: 450px;
    gap: 10px;
    }
`

