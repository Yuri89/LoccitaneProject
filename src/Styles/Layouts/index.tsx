import { PropsWithChildren } from "react";
import Sidebar from "../../Components/Sidebar";
import styled, { CSSProperties } from "styled-components";
import { useSidebar } from "../../Context/ToggleSideBar";

interface LayoutGridProps {
  isSidebarOpen: boolean;
}

const LayoutGrid = styled.div<LayoutGridProps>`
    height: 100vh;
    display: grid;
    background-color: ${props => props.theme.colors.background};

    grid-template-columns: ${({ isSidebarOpen }: LayoutGridProps) => (
    isSidebarOpen ? '75px auto' : '250px auto'
  )};
    transition: 300ms;
`;

const LayoutColum = styled.div`
    flex-direction: column;
    position: relative;
    overflow-y: auto;
`

export default function LayoutDefault({ children }: PropsWithChildren<{}>) {
  const { isSidebarOpen } = useSidebar();

  return (
    <LayoutGrid isSidebarOpen={isSidebarOpen}>
      <Sidebar />
      <LayoutColum>{children}</LayoutColum>
    </LayoutGrid>
  )
}
