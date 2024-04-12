import { Link } from "react-router-dom";
import { BoxSide, SideBarMainPerfil, FotoPerfil, SideBarSvgImg, SidebarDivMenu, SidebarDivBotaoMenu, SidebarBotaoMenu } from "./style";
import { useSidebar } from "../../Context/ToggleSideBar";

import DadosSvg from "../../assets/svg/svgButtos/Dados.svg";
import EstoqueSvg from "../../assets/svg/svgButtos/Estoque.svg";
import GestaoSvg from "../../assets/svg/svgButtos/Gestao.svg";
import ConfigSvg from "../../assets/svg/svgButtos/Perfil.svg";
import Foto from "../../assets/img/user.jpg"

export default function SideBar() {

    const { isSidebarOpen, toggleSidebar } = useSidebar();

    return (
        <BoxSide>
            <SideBarMainPerfil onClick={toggleSidebar}>
                <div>
                    <FotoPerfil src={Foto} />
                </div>
                <span>Cleriston</span>
            </SideBarMainPerfil>
            <SidebarDivMenu>

                <SidebarDivBotaoMenu>
                    <SidebarBotaoMenu to={'/'}>
                        <SideBarSvgImg src={DadosSvg} /><p>Dados</p>
                    </SidebarBotaoMenu>

                    <SidebarBotaoMenu to={'/estoque'}>
                        <SideBarSvgImg src={EstoqueSvg} /><p>Estoque</p>
                    </SidebarBotaoMenu>

                    <SidebarBotaoMenu to={'/produtos'}>
                        <SideBarSvgImg src={EstoqueSvg} /><p>Produtos</p>
                    </SidebarBotaoMenu>

                    <SidebarBotaoMenu to={'/gestao'}>
                        <SideBarSvgImg src={GestaoSvg} /><p>Gestão</p>
                    </SidebarBotaoMenu>

                </SidebarDivBotaoMenu>

                <div>
                    <SidebarBotaoMenu to={'/'}>
                        <SideBarSvgImg src={ConfigSvg} /><p>Configurações</p>
                    </SidebarBotaoMenu>
                </div>

            </SidebarDivMenu>

        </BoxSide>
    )
}