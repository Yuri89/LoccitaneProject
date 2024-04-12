import { Link } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import Header from "../../../Components/Header";

export default function Configuracoes() {
    return (
        <LayoutDefault>
            <Header />
            <h1>Configuracoes</h1>
            <Link to={'/'}>Main Page</Link>
        </LayoutDefault>
    )
}   