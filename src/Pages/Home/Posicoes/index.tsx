import { Link } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import { useState, useEffect } from "react";
import Loading from "../../../Styles/anim/Loading.json";
import { RequestDadosEstoque, fetchEstoque } from "../../../Utils/Test/FakeData/DadosListaEstoque";
import { ButtonsSeparetors, LayoutEstoque, LayoutGridEstoque } from "../Estoque/style";
import Lottie from 'lottie-react'
import { PaginationStyled } from "./style";
import Filtro from "../../../Components/Fields/Filtro";
import Ordenar from "../../../Components/Fields/Orderna";
import { useDadosPut } from "../../../Context/DadosPut";

import CardInfoProduto from "../../../Components/Cards/CardInfoProduto";

export default function Posicoes() {
    const [data, setData] = useState<RequestDadosEstoque[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const { setLista } = useDadosPut();


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const result = await fetchEstoque(page,30); // 10 é o número de itens por página
                setData(result.data);
                setTotalPages(Math.ceil(result.totalItems / 30)); // 10 é o número de itens por página
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const getDados = async () => null

        getDados();
        fetchData();
    }, [page]);

    function EditarDados(item: any) {
        setLista(item)
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const style = {
        height: 300,
        paddingTop: 100,
    };

    return (
        <LayoutDefault>
            <LayoutEstoque>
            <h1>Posições</h1>
                <ButtonsSeparetors>
                    <div>
                        <Link to={'/'}>Main Page</Link>
                        <Link to={'/stack-posicao-cadastrar'}>Cadastrar</Link>
                    </div>
                    <div>
                        <Filtro />
                        <Ordenar />
                    </div>
                </ButtonsSeparetors>
                {isLoading ? (
                    <Lottie style={style} animationData={Loading} />
                ) : (
                    <>
                        <LayoutGridEstoque onClick={() => { }}>
                            {data.map((item) => (
                                <Link to={'/stack-posicao-editar'} onClick={() => EditarDados(item)} key={item.id}>
                                    <CardInfoProduto

                                        

                                    />
                                </Link>
                            ))}
                        </LayoutGridEstoque>
                        <PaginationStyled count={totalPages} page={page} onChange={handleChange} />
                    </>
                )}
            </LayoutEstoque>

            {showModal ? (
                <div></div>
            ) : null}
        </LayoutDefault>
    );
}
