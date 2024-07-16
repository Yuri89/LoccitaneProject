import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { useQuery } from '@tanstack/react-query';
import LayoutDefault from '../../../Styles/Layouts';
import { ButtonsSeparetors, LayoutEstoque, LayoutGridEstoque, PaginationStyled } from './style';
import CardInfoEstoque from '../../../Components/Cards/CardInfoEstoque';
import LoadingAnimation from '../../../Styles/anim/Loading.json';
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

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value - 1); // React Query usa zero-based index para paginação
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
                        <Lottie animationData={LoadingAnimation} />
                    </div>
                )}

                {/* Renderiza mensagem de erro se isError for true */}
                {isError && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: '#ff8a8a', height: '60vh' }}>
                        <H1>Error ao puxar dados</H1>
                    </div>
                )}

                {/* Renderiza mensagem de estoque vazio */}
                {!isLoading && !isError && data && data.content.length === 0 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: '#8ab9ff', height: '60vh' }}>
                        <H1>Estoque vazio</H1>
                    </div>
                )}

                {/* Renderiza os dados se não houver erro, isLoading for false e data estiver disponível */}
                {!isLoading && !isError && data && data.content.length > 0 && (
                    <>
                        <LayoutGridEstoque>
                            {data.content.map((item) => (
                                <Link to={'/stack-estoque-editar'} onClick={() => setProduto(item)} key={item.id_produto}>
                                    <CardInfoEstoque
                                        id={Number(item.id_produto)}
                                        nome={item.nome}
                                        material={item.material}
                                        codigoMaterial={item.codigo_material}
                                        loteMaterial={item.lote_material}
                                        quantidade={item.quantidade}
                                        validade={item.data_validade}
                                    />
                                </Link>
                            ))}
                        </LayoutGridEstoque>
                        {/* Certifique-se de que data.totalPages é convertido para número */}
                        <PaginationStyled count={data.totalPages ? Number(data.totalPages) : 1} page={page + 1} onChange={handleChange} />
                    </>
                )}
            </LayoutEstoque>
        </LayoutDefault>
    );
}
