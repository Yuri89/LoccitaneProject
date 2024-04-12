import styled from 'styled-components'
import ImgEstoque from '../../Assets/test/img/FotoEstoque.png'

const Container = styled.div`
    padding: 10px;
    width: 20px;
    height: 30px;
    border-radius: 10px;
    background-color: white;
`

export default function CardInfoProduto() {
    return (
        <div>
            <img src={ImgEstoque} alt="" />
            <div></div>
        </div>
    )

}