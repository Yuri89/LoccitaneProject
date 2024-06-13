import { Link } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import Header from "../../../Components/Header";

export default function Home(){
    return(
        <LayoutDefault>
            <Header/>
            <Link to={'/dados'}>Dados</Link>
            <Link to={'/estoque'}>Estoque</Link>
            <Link to={'/gestao'}>Gestao</Link>
            <Link to={'/posicoes'}>Posições</Link>
            <Link to={'/configuracoes'}>Configurações</Link>
        </LayoutDefault>
    )
}