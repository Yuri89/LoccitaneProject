import styled, { keyframes } from 'styled-components'
import {BoxInBox} from '../../Assets/svg/BoxInBox'

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    align-items: center;
    padding: 2px;
    border-radius: 10px;
    background-color: #d5d5d5;
    animation: ${fadeIn} 0.5s ease-in-out;

    & div{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    & div:nth-child(1){
        background-color: #222;
        align-items: center;
    }
    
    & div:nth-child(2){
        background-color: #ddd;
    }
`
const Info = styled.span`
    color: black;
    font-size: 500;
`


export default function CardInfoEstoque( props:CardEstoqueList ) {

    const dataPart = props.validade.split('-')

    return (
        <Container>
            <div>
            <BoxInBox height={'100px'} width={'100px'} fill={'#DDD'}/>
            </div>
            <div>
            <Info><b>Nome:</b> {props.nome}</Info>
            <Info><b>Material:</b> {props.material}</Info>
            <Info><b>Código Material:</b> {props.codigoMaterial}</Info>
            <Info><b>Lote do Material:</b> {props.loteMaterial}</Info>
            <Info><b>Quantidade:</b> {props.quantidade}</Info>
            <Info><b>Validade:</b> {`${dataPart[2]}/${dataPart[1]}/${dataPart[0]}`}</Info>
            </div>
        </Container>
    )

}