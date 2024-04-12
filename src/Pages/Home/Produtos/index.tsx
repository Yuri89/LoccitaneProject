import { Link } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import Header from "../../../Components/Header";
import { useState, useEffect } from "react";
import CardInfoEstoque from "../../../Components/Cards/CardInfoEstoque";
import Loading from "../../../Styles/anim/Loading.json";
import { RequestDadosEstoque, fetchEstoque } from "../../../Utils/Test/FakeData/DadosListaEstoque";
import { LayoutEstoque, LayoutGridEstoque } from "../Estoque/style";
import Lottie from 'lottie-react'
import { PaginationStyled } from "./style";

export default function Produtos() {
    const [data, setData] = useState<RequestDadosEstoque[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const result = await fetchEstoque(page, 10); // 10 é o número de itens por página
                setData(result.data);
                setTotalPages(Math.ceil(result.totalItems / 10)); // 10 é o número de itens por página
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [page]);

    function handleOpenModal() {
        setShowModal(showModal => !showModal)
    }

    function handleCloseModal() {
        setShowModal(showModal => !showModal)
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
            <Header />
            <LayoutEstoque>
                <div>
                    <h1>Estoque</h1>
                    <Link to={'/'}>Main Page</Link>
                    <Link to={'/stack-estoque'}>Cadastrar</Link>
                </div>
                {isLoading ? (
                    <Lottie style={style} animationData={Loading} />
                ) : (
                    <>
                        <LayoutGridEstoque onClick={() => {}}>
                            {data.map((item) => (
                                <div onClick={() => handleOpenModal()}>
                                <CardInfoEstoque
                                    key={item.id}
                                    id={item.id}
                                    codigoMaterial={item.codigoMaterial}
                                    loteMaterial={item.loteMaterial}
                                    ordem={item.ordem}
                                    quantidade={item.quantidade}
                                    validade={item.validade}
                                    
                                />
                                </div>
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
