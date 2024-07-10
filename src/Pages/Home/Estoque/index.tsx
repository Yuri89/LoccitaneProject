import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { useQuery } from '@tanstack/react-query';
import LayoutDefault from '../../../Styles/Layouts';
import { ButtonsSeparetors, ButtonsSeparetors2, LayoutEstoque, LayoutGridEstoque, PaginationStyled } from './style';
import CardInfoEstoque from '../../../Components/Cards/CardInfoEstoque';
import Loading from '../../../Styles/anim/Loading.json';
import Filtro from '../../../Components/Fields/Filtro';
import Ordenar from '../../../Components/Fields/Orderna';
import { ProdutoPropsGet, ProdutosFetch, ProdutoContentGet } from '../../../Utils/Connections/Get';
import useOrdenar from '../../../Hooks/useOrdenar';
import { useProdutos } from '../../../Context/ContextProdutos';
import Dropmenu from '../../../Components/Fields/Dropmenu';
import { useNavigateOnError } from '../../../Hooks/useApiOnError';
import { api } from '../../../Utils/Api';
import { H1 } from '../../../Components/Texts';

export default function Estoque() {
    useNavigateOnError(api);
    const [page, setPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const { setProduto } = useProdutos();

    const { data, isError, isLoading, refetch } = useQuery<ProdutoContentGet, Error>({
        queryKey: ['produtos', page],
        queryFn: () => ProdutosFetch(page.toString(), '10'),
        retry: false, // Desabilita tentativas automáticas do react-query
    });

    useEffect(() => {
        if (isError) {
            const intervalId = setInterval(() => {
                refetch();
            }, 10000); // 10 segundos

            return () => clearInterval(intervalId);
        }
    }, [isError, refetch]);

    useEffect(() => {
        refetch();
    }, [page, refetch]);

    function EditarDados(item: ProdutoPropsGet) {
        setProduto(item);
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value - 1); // React Query usa zero-based index para paginação
    };

    const style = {
        height: 300,
        paddingTop: 100,
    };

    return (
        <LayoutDefault>
            <LayoutEstoque>
                <h1>Estoque</h1>
                <ButtonsSeparetors>
                    <Dropmenu
                        texto="Opções"
                        links={[
                            { link: '/stack-estoque-cadastrar', linkText: 'Cadastrar posição' },

                        ]}
                    />
                    <Ordenar resposta={setSortOption} />
                </ButtonsSeparetors>
                 {/* Renderiza o componente de loading se isLoading for true */}
            {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '60vh' }}>
                    <Lottie style={style} animationData={Loading} />
                </div>
            )}

            {/* Renderiza mensagem de erro se isError for true */}
            {isError && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: '#ff8a8a', height: '60vh' }}>
                    <H1>Error ao puxar dados</H1>
                </div>
            )}

            {/* Renderiza os dados se não houver erro, isLoading for false e page não for null */}
            {!isLoading && !isError && page != null && (
                <>
                    <LayoutGridEstoque onClick={() => { }}>
                        {data && data.content.map((item) => (
                            <Link to={'/stack-estoque-editar'} onClick={() => EditarDados(item)} key={item.id_produto}>
                                <CardInfoEstoque
                                    id={Number(item.id_produto)}
                                    codigoMaterial={item.codigo_material}
                                    loteMaterial={item.lote_material}
                                    ordem={item.codigo_material}
                                    quantidade={item.quantidade}
                                    validade={item.data_validade}
                                />
                            </Link>
                        ))}
                    </LayoutGridEstoque>
                    <PaginationStyled count={data ? Number(data.totalPages) : 1} page={page + 1} onChange={handleChange} />
                </>
            )}
            </LayoutEstoque>

            {showModal ? (
                <div></div>
            ) : null}
        </LayoutDefault>
    );
}
