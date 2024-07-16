import { Link } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import Header from "../../../Components/Header";
import { VictoryPie } from "victory";
import { fetchGrafico, GraphicInfo } from "../../../Utils/Connections/Get";
import { useNavigateOnError } from "../../../Hooks/useApiOnError";
import { api } from "../../../Utils/Api";
import { useEffect, useState } from "react";

export default function Home() {
    useNavigateOnError(api);
    const [dadosGrafico, setDadosGrafico] = useState<GraphicInfo | null>(null);

    const fetchAndSetGrafico = async () => {
        try {
            const data = await fetchGrafico();
            setDadosGrafico(data);
        } catch (error) {
            console.error('Erro ao buscar os dados do gráfico:', error);
        }
    };

    useEffect(() => {
        // Primeira chamada ao montar o componente
        fetchAndSetGrafico();

        // Atualização a cada 2 segundos
        const intervalId = setInterval(fetchAndSetGrafico, 3500);

        // Limpeza do intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    const colors = [
        "#194970",
        "#4682b4",
        "#82c1f5"
    ]

    return (
        <LayoutDefault>
            <div style={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "25px"
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{ width: '650px', height: '650px' }}>
                        <VictoryPie
                            data={[
                                { x: "Bloqueado", y: dadosGrafico?dadosGrafico.totalBloqueado:1 },
                                { x: "Preenchido", y: dadosGrafico?dadosGrafico.totalPreenchidos:1 },
                                { x: "Vazios", y: dadosGrafico?dadosGrafico.totalVazios:1 }
                            ]}
                            width={300}
                            height={200}
                            colorScale={colors}
                            innerRadius={100}
                            style={{
                                labels: {
                                    fontSize: 15, fill: "#f1f1f1"
                                }
                            }}
                        />
                    </div>
                </div>
                <div style={{
                    backgroundColor: "#252525",
                    width: "50vw",
                    padding: "10vh 10vw",
                    color: "#dddddd",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    marginRight: "10vw"
                }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "2vw", height: "4vh", background: colors[2] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Vazios: {dadosGrafico?dadosGrafico.totalVazios:"carregando"}</span>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "2vw", height: "4vh", background: colors[1] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Preenchidos: {dadosGrafico?dadosGrafico.totalPreenchidos:"carregando"}</span>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "2vw", height: "4vh", background: colors[0] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Bloqueados: {dadosGrafico?dadosGrafico.totalBloqueado:"carregando"}</span>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}