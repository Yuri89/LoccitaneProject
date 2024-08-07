import { Link } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import Header from "../../../Components/Header";
import { VictoryPie, VictoryLabel } from "victory";
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

        // Atualização a cada 3.5 segundos
        const intervalId = setInterval(fetchAndSetGrafico, 3500);

        // Limpeza do intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    const colors = [
        "#194970",
        "#4682b4",
        "#82c1f5"
    ];

    const total = dadosGrafico ? (dadosGrafico.totalBloqueado + dadosGrafico.totalPreenchidos + dadosGrafico.totalVazios) : 1;

    return (
        <LayoutDefault>
                        <h1 style={{fontSize:'25px',borderBottom:'2px solid white',textAlign:'center'}}>Dados</h1>
            <div style={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "25px",
                padding: "20px"
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <VictoryPie
                            data={[
                                { x: "Bloqueado", y: dadosGrafico ? dadosGrafico.totalBloqueado : 1 },
                                { x: "Preenchido", y: dadosGrafico ? dadosGrafico.totalPreenchidos : 1 },
                                { x: "Vazios", y: dadosGrafico ? dadosGrafico.totalVazios : 1 }
                            ]}
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                            colorScale={colors}
                            innerRadius={100}
                            labels={({ datum }) => `${((datum.y / Number(total)) * 100).toFixed(2)}%`}
                            style={{
                                data: {
                                    stroke: "#fff",
                                    strokeWidth: 2
                                },
                                labels: {
                                    fontSize: 20,
                                    fill: "#333",
                                    padding: 10
                                }
                            }}
                            labelComponent={
                                <VictoryLabel
                                    angle={0}
                                    style={[
                                        { fontSize: 18, fill: "#d5d5d5" }
                                    ]}
                                    backgroundPadding={[
                                        { left: 10, right: 10 }
                                    ]}
                                    lineHeight={1.2}
                                />
                            }
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                <div style={{
                    backgroundColor: "#252525",
                    width: "50%",
                    padding: "5%",
                    color: "#dddddd",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    marginRight: "5%"
                }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "20px", height: "20px", background: colors[2] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Vazios: {dadosGrafico ? dadosGrafico.totalVazios : "carregando"}</span>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "20px", height: "20px", background: colors[1] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Preenchidos: {dadosGrafico ? dadosGrafico.totalPreenchidos : "carregando"}</span>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "20px", height: "20px", background: colors[0] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Bloqueados: {dadosGrafico ? dadosGrafico.totalBloqueado : "carregando"}</span>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    );
}
