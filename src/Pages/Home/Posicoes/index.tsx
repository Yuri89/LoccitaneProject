import { Link, useLocation } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import Lottie from 'lottie-react';
import Loading from "../../../Styles/anim/Loading.json";
import { ButtonsSeparetors, LayoutEstoque, LayoutGridPosicao } from "../Estoque/style";
import Filtro from "../../../Components/Fields/Filtro";
import Ordenar from "../../../Components/Fields/Orderna";
import { useDadosPut } from "../../../Context/DadosPut";
import CardInfoPosicao from "../../../Components/Cards/CardInfoPosicao";
import useOrdenar from "../../../Hooks/useOrdenar";
import { useQuery } from "@tanstack/react-query";
import { PropsGetRuas, fetchRuas } from "../../../Utils/Connections/Get";
import { useEffect, useState } from "react";
import { H1 } from "../../../Components/Texts";
import Dropmenu from "../../../Components/Fields/Dropmenu";
import { usePosicoes } from "../../../Context/ContextPosicoes";
import { useNavigateOnError } from "../../../Hooks/useApiOnError";
import { api } from "../../../Utils/Api";

export default function Posicoes() {
    useNavigateOnError(api);
    const { setLista } = usePosicoes();
    const [sortOption, setSortOption] = useState('');
    const location = useLocation();


    const { data, isLoading, isError, error, refetch } = useQuery<PropsGetRuas[], Error>({
        queryKey: ['ruas'],
        queryFn: fetchRuas,
        staleTime: 5000, // 5 segundos em milissegundos
        enabled: true, // Habilitar inicialmente
    });

    useEffect(() => {
        refetch();
    }, [location, refetch]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 30000); // Dispara refetch a cada 30 segundos

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, [refetch]);

    const sortedData = useOrdenar(data ?? [], sortOption);

    function EditarDados(item: any) {
        setLista(item);
    }

    const style = {
        height: 100,
    };
    useEffect(() => {
        refetch()
    }, [])


    return (
        <LayoutDefault>
            <h1 style={{ fontSize: '25px', borderBottom: '2px solid white', textAlign: 'center' }}>Posições</h1>

            <LayoutEstoque>
                <ButtonsSeparetors>
                    <Dropmenu
                        texto="Opções"
                        links={[
                            { link: '/stack-posicao-cadastrar', linkText: 'Cadastrar posição' },
                            { link: '/stack-posicao-bloquear', linkText: 'Bloquear posições' },
                        ]}
                    />
                    <Ordenar resposta={setSortOption} />
                </ButtonsSeparetors>
                <LayoutGridPosicao>
                    {isLoading && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '60vh' }}>
                            <Lottie style={style} animationData={Loading} />
                        </div>
                    )}
                    {isError && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: '#ff8a8a', height: '60vh' }}>
                            <H1>Error ao puxar dados</H1>
                        </div>
                    )}
                    {!isLoading && !isError && sortedData.length === 0 && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: '#5a8aff', height: '60vh' }}>
                            <H1>Dados Vazios</H1>
                        </div>
                    )}
                    {!isLoading && !isError && sortedData.length > 0 && sortedData.map((item) => (
                        <Link to={'/stack-posicao-editar'} onClick={() => EditarDados(item)} key={item.id_rua}>
                            <CardInfoPosicao
                                codigo={item.codigo}
                                registro={item.registro}
                                status={item.status}
                                prateleiras={item.n_prateleiras}
                                niveis={item.n_niveis}
                                livre={item.n_vazios}
                                preenchido={item.n_preenchidos}
                                bloqueado={item.n_bloqueado}
                            />
                        </Link>
                    ))}
                </LayoutGridPosicao>
            </LayoutEstoque>
        </LayoutDefault>
    );
}
