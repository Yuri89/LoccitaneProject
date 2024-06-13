import { BoxSide, SideBarMainPerfil, SideBarSvgImg, SidebarDivMenu, SidebarDivBotaoMenu, SidebarBotaoMenu, SidebarBotaoMenu2 } from "./style";
import { useSidebar } from "../../Context/ToggleSideBar";

import DadosSvg from "../../assets/svg/svgButtos/Dados.svg";
import EstoqueSvg from "../../assets/svg/svgButtos/Estoque.svg";
import PosicoesSvg from "../../assets/svg/svgButtos/Posicoes.svg";
import GestaoSvg from "../../assets/svg/svgButtos/Gestao.svg";
import ConfigSvg from "../../assets/svg/svgButtos/Perfil.svg";


export default function SideBar() {

    const { isSidebarOpen, toggleSidebar } = useSidebar();

    return (
        <BoxSide>
            <SideBarMainPerfil onClick={toggleSidebar}>
                <div>
                    <h2>{isSidebarOpen?">":"<"}</h2>
                </div>
                <h1>L'occitane</h1>
            </SideBarMainPerfil>
            <SidebarDivMenu>

                <SidebarDivBotaoMenu>
                    <SidebarBotaoMenu to={'/'}>
                        <SideBarSvgImg src={DadosSvg} /><p>Dados</p>
                    </SidebarBotaoMenu>

                    <SidebarBotaoMenu to={'/estoque'}>
                        <SideBarSvgImg src={EstoqueSvg} /><p>Estoque</p>
                    </SidebarBotaoMenu>

                    <SidebarBotaoMenu to={'/posicoes'}>
                        <SideBarSvgImg src={PosicoesSvg} /><p>Posições</p>
                    </SidebarBotaoMenu>

                    <SidebarBotaoMenu to={''}>
                        <SideBarSvgImg src={GestaoSvg} /><p>Gestão</p>
                    </SidebarBotaoMenu>

                </SidebarDivBotaoMenu>

                <div>
                    <SidebarBotaoMenu2 to={''}>
                        <SideBarSvgImg src={ConfigSvg} /><p>Configurações</p>
                    </SidebarBotaoMenu2>
                </div>

            </SidebarDivMenu>

        </BoxSide>
    )
}