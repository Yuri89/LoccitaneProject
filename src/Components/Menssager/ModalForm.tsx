import { PropsWithChildren } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
`

export default function ModalForm({ children, editar, deletar }: PropsWithChildren & { editar: VoidFunction; deletar: VoidFunction; }) {
    return (
        <ContainerStyled>
            {children}
            <button onClick={editar}>Editar</button>
            <button onClick={deletar}>Deletar</button>
        </ContainerStyled>
    );
}
