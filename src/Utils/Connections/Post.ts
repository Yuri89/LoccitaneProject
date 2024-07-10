import { AxiosPromise } from "axios";
import { api } from "../Api";
import { useNavigate } from "react-router-dom";

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

export type FormProduto = {
    material: string;
    nome: string;
    codigo_material: string;
    lote_material: string;
    data_validade: string;
    quantidade: string;
    id_nivel: string;
};

export const registraProduto = async (formDataProduto: FormProduto) => {
    const formData = new FormData();

    // Adiciona os campos ao FormData
    formData.append('material', formDataProduto.material);
    formData.append('nome', formDataProduto.nome);
    formData.append('codigo_material', formDataProduto.codigo_material);
    formData.append('lote_material', formDataProduto.lote_material);
    formData.append('data_validade', formDataProduto.data_validade);
    formData.append('quantidade', formDataProduto.quantidade);
    formData.append('id_nivel', formDataProduto.id_nivel);

    try {
        const response = await api.post('/produtos', formData, {
            timeout: 5000,
            headers: {
                'Content-Type': 'multipart/form-data', // Axios setará automaticamente para FormData
            }
        });
        console.log('Dados enviados com sucesso:', response.status);
        return response.data;
    } catch (error) {
    
        console.error('Erro ao enviar dados:', error);
        throw error;
    } finally {
        console.log('Requisição POST finalizada');
    }
};
