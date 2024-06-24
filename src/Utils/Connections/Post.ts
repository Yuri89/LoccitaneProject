import { AxiosPromise } from "axios";
import { api } from "../Api";

export const uploadDataRuas = async (formData: { posicao: string; numero: number; nivel: number; }): AxiosPromise<any> => {

    const dateTime = Date.now()

    const data = new FormData();
    data.append('codigo', formData.posicao);
    data.append('prateleiras', formData.numero.toString());
    data.append('niveis', formData.nivel.toString());
    data.append('status', "PARA_USO");
    data.append('registro', dateTime.toString())

    return api.post('/ruas', data, {
        timeout: 5000
    })
    .then(response => {
        console.log('Dados enviados com sucesso:', response.data);
        console.log('Dados enviados com sucesso:', response.status);
        console.log('Dados enviados com sucesso:', response.headers);
        console.log('Dados enviados com sucesso:', response.config);
        return response.data;
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        throw error;
    })
    .finally(() => {
        console.log('Requisição POST finalizada');
    });
};
