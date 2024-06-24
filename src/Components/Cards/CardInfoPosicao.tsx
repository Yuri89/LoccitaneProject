import { PropsWithChildren, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 560px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: #333;
    gap: 10px;

    & h1{
        background-color: #333;
        padding: 10px;
        width: 250px;
        text-align: center;
        border-radius: 10px 0px 0px 10px;
        font-size: 128px;
    }
    & span{
        border-radius: 0px 10px 10px 0px;
        background-color: #d5d5d5;
        color: #252525;
        & h2{
            font-size: 18px;
            border: 1px #252525 solid;
            padding: 5px 10px;
            width: 300px;
        }
    }
`

type Props = {
    codigo:string,
    registro:string,
    status:string,
    prateleiras:string,
    niveis:string,
    livre:string,
    preenchido:string, 
    bloqueado:string 
}

export default function  CardInfoPosicao(props:Props) {  
    
    function formatDateString(dateString:string) {
        const parts = dateString.split('-');
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    return (
        <Container>
            <h1>{props.codigo.toLocaleUpperCase()}</h1>
            <span>
                <h2>registro: {formatDateString(props.registro)}</h2>
                <h2>status: {
                props.status
                .toLowerCase()
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}</h2>
                <h2>prateleiras : {props.prateleiras}</h2>
                <h2>niveis : {props.niveis}</h2>
                <h2>livre : {props.livre}</h2>
                <h2>preenchido : {props.preenchido}</h2>
                <h2>bloqueado : {props.bloqueado}</h2>
            </span>
        </Container>
    )

}