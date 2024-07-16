import styled, { keyframes } from 'styled-components'
import ImgEstoque from '../../Assets/test/img/FotoEstoque.png'

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
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    animation: ${fadeIn} 0.5s ease-in-out;
`
const Info = styled.span`
    color: black;
    font-size: 500;
`
const Imagem = styled.img`
    width: 180px;
    border-radius: 10px;
`

export default function CardInfoEstoque( props:CardEstoqueList ) {

    return (
        <Container>
            <Imagem src={ImgEstoque} alt="Imagem de Estoque" />
            <Info>Nome: {props.nome}</Info>
            <Info>Material: {props.material}</Info>
            <Info>Código Material: {props.codigoMaterial}</Info>
            <Info>Lote do Material: {props.loteMaterial}</Info>
            <Info>Quantidade: {props.quantidade}</Info>
            <Info>Validade: {props.validade}</Info>
        </Container>
    )

}