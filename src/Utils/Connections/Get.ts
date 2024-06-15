import { api } from "../Api";

export type PropsGetDate = {
    sort(arg0: (a: any, b: any) => any): unknown;
    id:string,
    codigo:string,
    registro:string,
    status:string
}

export const responseGet: Promise<PropsGetDate[]> = api.get<PropsGetDate[]>("/ruas")
    .then((response) => {
        console.log('Dados recebidos:', response.data)
        console.log('Dados recebidos:', response.headers)
        console.log('Dados recebidos:', response.config)
        console.log('Dados recebidos:', response.status)
        return response.data; // Retorne os dados recebidos
    })
    .catch((error) => {
        console.error('Erro na requisição:', error);
        throw error; // Propaga o erro para ser capturado pelo chamador
    })
    .finally(() => {
        console.log('Requisição finalizada');
    });
    