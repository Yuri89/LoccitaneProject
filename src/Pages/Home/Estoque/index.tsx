import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { useQuery } from '@tanstack/react-query';
import LayoutDefault from '../../../Styles/Layouts';
import { ButtonsSeparetors, LayoutEstoque, LayoutGridEstoque, PaginationStyled } from './style';
import CardInfoEstoque from '../../../Components/Cards/CardInfoEstoque';
import LoadingAnimation from '../../../Styles/anim/Loading.json';
import Ordenar from '../../../Components/Fields/Orderna';
import { ProdutosFetch, ProdutosFetchSearch, ProdutoContentGet } from '../../../Utils/Connections/Get';
import { useProdutos } from '../../../Context/ContextProdutos';
import Dropmenu from '../../../Components/Fields/Dropmenu';
import { useNavigateOnError } from '../../../Hooks/useApiOnError';
import { api } from '../../../Utils/Api';
import { H1 } from '../../../Components/Texts';
import SearchField from '../../../Components/Fields/SearchField';

export default function Estoque() {
    useNavigateOnError(api);
    const [page, setPage] = useState(0);
    const [sortOption, setSortOption] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const { setProduto } = useProdutos();

    const { data, isError, isLoading, refetch } = useQuery<ProdutoContentGet, Error>({
        queryKey: ['produtos', page, searchQuery],
        queryFn: () => {
            return searchQuery
                ? ProdutosFetchSearch(page.toString(), '10', searchQuery)
                : ProdutosFetch(page.toString(), '10');
        },
        retry: false,
    });

    useEffect(() => {
        if (isError) {
            const intervalId = setInterval(() => {
                refetch();
            }, 10000);

            return () => clearInterval(intervalId);
        }
    }, [isError, refetch]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value - 1);
    };

    const handleSearch = (query: React.SetStateAction<string>) => {
        setSearchQuery(query);
        setPage(0); // Resetar para a primeira página
    };

    return (
        <LayoutDefault>
            <h1 style={{fontSize:'25px',borderBottom:'2px solid white',textAlign:'center'}}>Estoque</h1>
            <LayoutEstoque>
                
                <ButtonsSeparetors>
                    <Dropmenu
                        texto="Opções"
                        links={[
                            { link: '/stack-estoque-cadastrar', linkText: 'Cadastrar posição' },
                        ]}
                    />
                    <SearchField onSearch={handleSearch} />
                </ButtonsSeparetors>

                {isLoading && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '60vh' }}>
                        <Lottie animationData={LoadingAnimation} />
                    </div>
                )}

                {isError && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: '#ff8a8a', height: '60vh' }}>
                        <H1>Error ao puxar dados</H1>
                    </div>
                )}

                {!isLoading && !isError && data && data.content.length === 0 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: '#8ab9ff', height: '60vh' }}>
                        <H1>Estoque vazio</H1>
                    </div>
                )}

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
                        <PaginationStyled count={data.totalPages ? Number(data.totalPages) : 1} page={page + 1} onChange={handleChange} />
                    </>
                )}
            </LayoutEstoque>
        </LayoutDefault>
    );
}
