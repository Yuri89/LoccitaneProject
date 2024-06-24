import React from 'react';
import Lottie from 'lottie-react';
import InfoAnim from '../../Styles/anim/InfoAnim.json';
import styled, { keyframes } from 'styled-components';

interface ModalAlertProps {
    visible: boolean;
    texto: string;

}

const fadeInAndOut = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    20% {
        opacity: 1;
        transform: translateY(0);
    }
    80% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(100%);
    }
`;
const Caixinha = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
`

const ModalAlert = styled.div<ModalAlertProps>`
    position: absolute;
    display: flex;
    background-color: #303030;
    width: 300px;
    justify-content: center;
    align-items: center;
    padding: 5px 20px 5px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    animation: ${fadeInAndOut} 5s ease forwards; /* Aplica a animação */
`;


export default function MiniAlert({ visible, texto }: ModalAlertProps) {
    return (
        <Caixinha>
            <ModalAlert visible={visible} texto={texto}>
                <Lottie loop={false} style={{ width: 50 }} animationData={InfoAnim} />
                <span>{texto}</span>
            </ModalAlert>
        </Caixinha>
    );
}
