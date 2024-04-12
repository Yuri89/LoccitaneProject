import { PropsWithChildren } from "react";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
`
export default function ModalDescricaoEstoque( editar: VoidFunction, deletar: VoidFunction ) {
    return (
        <Box>
            <div>test</div>
            <div>test</div>
            <button onClick={editar}>Editar</button>
            <button onClick={deletar}>Deletar</button>
        </Box>
    );
}
