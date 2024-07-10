import { Link } from "react-router-dom";
import LayoutDefault from "../../../Styles/Layouts";
import Header from "../../../Components/Header";
import { VictoryPie } from "victory";

export default function Home() {

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
                                { x: "Bloqueado", y: 100 },
                                { x: "Preenchido", y: 600 },
                                { x: "Vazios", y: 300 }
                            ]}
                            width={300}
                            height={200}
                            colorScale={colors}
                            padAngle={5}
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
                    width:"50vw",
                    padding: "10vh 10vw",
                    color: "#dddddd",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    marginRight:"10vw"
                }}>
                    <div style={{ display: "flex", gap: "10px"  }}>
                        <div style={{ width: "2vw", height: "4vh", background: colors[2] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Vazios: 300</span>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "2vw", height: "4vh", background: colors[1] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Preenchidos: 600</span>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "2vw", height: "4vh", background: colors[0] }}></div>
                        <span style={{ fontSize: "1.5rem" }}>Bloqueados: 100</span>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}