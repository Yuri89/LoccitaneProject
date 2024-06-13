import styled from "styled-components";

export const HeaderStyled = styled.header`
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    padding: 8px;
    display: flex;
    justify-content: space-between;

`