import { Link } from 'react-router-dom'
import { HeaderStyled } from './style'
import BotaoTema from '../BotãoThema'

export default function Header() {
    return (
        <HeaderStyled>
            <span>Loccacitane</span>
            <BotaoTema/>
        </HeaderStyled>
    )
}