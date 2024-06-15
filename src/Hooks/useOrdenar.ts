import { useEffect, useState } from "react";
import { PropsGetDate } from "../Utils/Connections/Get";

export default function useOrdenar(dados: PropsGetDate[], tipo: string) {
    const [dadosSetados, setDadosSetados] = useState<PropsGetDate[]>([]);

    useEffect(() => {
        // Cria uma cópia dos dados para evitar mutação direta
        const dadosOrdenados = [...dados];

        switch (tipo) {
            case "Maior":
                // Supondo que 'codigo' seja numérico
                dadosOrdenados.sort((a, b) => parseInt(b.codigo) - parseInt(a.codigo));
                break;
            case "Menor":
                // Supondo que 'codigo' seja numérico
                dadosOrdenados.sort((a, b) => parseInt(a.codigo) - parseInt(b.codigo));
                break;
            case "A-Z":
                dadosOrdenados.sort((a, b) => a.codigo.localeCompare(b.codigo));
                break;
            case "Z-A":
                dadosOrdenados.sort((a, b) => b.codigo.localeCompare(a.codigo));
                break;
            case "Data-Maior":
                // Supondo que 'data' seja um campo de data no formato ISO
                dadosOrdenados.sort((a, b) => new Date(b.registro).getTime() - new Date(a.registro).getTime());
                break;
            case "Data-Menor":
                // Supondo que 'data' seja um campo de data no formato ISO
                dadosOrdenados.sort((a, b) => new Date(a.registro).getTime() - new Date(b.registro).getTime());
                break;
            default:
                // Ordenação padrão (pode ser removida se não for necessária)
                dadosOrdenados.sort((a, b) => a.codigo.localeCompare(b.codigo));
                break;
        }

        // Atualiza o estado com os dados ordenados
        setDadosSetados(dadosOrdenados);
    }, [dados, tipo]); // Dependências do useEffect

    return dadosSetados;
}
