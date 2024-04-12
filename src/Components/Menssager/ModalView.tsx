import { PropsWithChildren, useState } from "react";
import styled from "styled-components";

interface ModalViewProps extends PropsWithChildren {
    modalProp: boolean;
}

const ModalStyleMiniAlert = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
`;

const ModalStyleCenter = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000a9;
`;

export default function ModalView({ children, modalProp }: ModalViewProps) {
    const [modalTipo, setModalTipo] = useState<boolean>(modalProp);

    if (modalTipo) {
        return (
            <ModalStyleCenter>
                {children}
            </ModalStyleCenter>
        );
    }
}
