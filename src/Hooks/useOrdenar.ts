import { useMemo } from "react";
import { PropsGetRuas } from "../Utils/Connections/Get";

export default function useOrdenar(dados: PropsGetRuas[], tipo: string) {
    const dadosOrdenados = useMemo(() => {
        const copiaDados = [...dados];
        switch (tipo) {
            case "Maior":
                copiaDados.sort((a, b) => parseInt(b.codigo) - parseInt(a.codigo));
                break;
            case "Menor":
                copiaDados.sort((a, b) => parseInt(a.codigo) - parseInt(b.codigo));
                break;
            case "A-Z":
                copiaDados.sort((a, b) => a.codigo.localeCompare(b.codigo));
                break;
            case "Z-A":
                copiaDados.sort((a, b) => b.codigo.localeCompare(a.codigo));
                break;
            case "Data-Maior":
                copiaDados.sort((a, b) => new Date(b.registro).getTime() - new Date(a.registro).getTime());
                break;
            case "Data-Menor":
                copiaDados.sort((a, b) => new Date(a.registro).getTime() - new Date(b.registro).getTime());
                break;
            default:
                copiaDados.sort((a, b) => a.codigo.localeCompare(b.codigo));
        }
        return copiaDados;
    }, [dados, tipo]);

    return dadosOrdenados;
}
