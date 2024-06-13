import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: white;
    gap: 10px;

    & h1{
        background-color: #333;
        padding: 10px;
        width: 75px;
        text-align: center;
        border-radius: 10px 0px 0px 10px;
        font-size: 38px;
    }
    & span{
        color: #252525;
        & h2{
            font-size: 18px;
        }
    }
`

export default function  CardInfoProduto() {
    return (
        <Container>
            <h1>A2</h1>
            <span>
                <h2>Numero: 10</h2>
                <h2>Disponivel: 10</h2>
                <h2>Bloqueado: 10</h2>
            </span>
        </Container>
    )

}