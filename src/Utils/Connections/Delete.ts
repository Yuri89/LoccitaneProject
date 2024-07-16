import { api } from "../Api";

export const deleterPosicao = async (id:string) => {
    try {
        const response = await api.delete(`/ruas/${id}`);
        console.log('Recurso deletado com sucesso:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar o recurso:', error);
        throw error;
    } finally {
        console.log('Requisição DELETE finalizada');
    }
};

export const deletarProduto = async (id:string) => {
    try {
        const response = await api.delete(`/produtos/${id}`);
        console.log('Produto deletado com sucesso:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar o produto:', error);
        throw error;
    } finally {
        console.info('Requisição DELETE finalizada');
    }
};