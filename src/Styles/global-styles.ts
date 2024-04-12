import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    a{
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    }
    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        transition: 500ms;
    }

    .sidebar{
        background: ${props => props.theme.colors.backgroundSideBar};
        color: ${props => props.theme.colors.textSiderBar};
        transition: 300ms;
    }
    `