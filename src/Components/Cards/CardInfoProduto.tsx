import { PropsWithChildren, useState } from 'react'
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

type Props = {
    codigo:string,
    registro:string,
    status:string
}

export default function  CardInfoProduto(props:Props) {  
    
    function formatDateString(dateString:string) {
        const parts = dateString.split('-');
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    return (
        <Container>
            <h1>{props.codigo.toLocaleUpperCase()}</h1>
            <span>
                <h2>{formatDateString(props.registro)}</h2>
                <h2>{
                props.status
                .toLowerCase()
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}</h2>
            </span>
        </Container>
    )

}