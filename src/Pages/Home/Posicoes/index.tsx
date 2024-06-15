import { Link } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import { useState, useEffect } from "react";
import Loading from "../../../Styles/anim/Loading.json";
import { ButtonsSeparetors, LayoutEstoque, LayoutGridEstoque } from "../Estoque/style";
import Lottie from 'lottie-react';
import { PaginationStyled } from "./style";
import Filtro from "../../../Components/Fields/Filtro";
import Ordenar from "../../../Components/Fields/Orderna";
import { useDadosPut } from "../../../Context/DadosPut";
import CardInfoProduto from "../../../Components/Cards/CardInfoProduto";
import { PropsGetDate, responseGet } from "../../../Utils/Connections/Get";
import useOrdenar from "../../../Hooks/useOrdenar"; 

export default function Posicoes() {
    const [data, setData] = useState<PropsGetDate[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [sortOption, setSortOption] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const { setLista } = useDadosPut();

    useEffect(() => {
        const getDados = async () => {
            try {
                setIsLoading(true);
                const response: PropsGetDate[] = await responseGet;
                setData(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        getDados();
    }, [page]);

    const sortedData = useOrdenar(data, sortOption);

    function EditarDados(item: any) {
        setLista(item);
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
                        <Ordenar resposta={setSortOption} />
                    </div>
                </ButtonsSeparetors>
                {isLoading ? (
                    <Lottie style={style} animationData={Loading} />
                ) : (
                    <>
                        <LayoutGridEstoque onClick={() => { }}>
                            {sortedData.map((item) => (
                                <Link to={'/stack-posicao-editar'} onClick={() => EditarDados(item)} key={item.id}>
                                    <CardInfoProduto
                                        codigo={item.codigo}
                                        registro={item.registro}
                                        status={item.status}
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
