import { api } from "../Api";

export const deleteResourceWithBody = async ({id, additionalParams}:any) => {
    try {
        const response = await api.delete(`/delete/${id}`, { data: additionalParams });
        console.log('Recurso deletado com sucesso:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar o recurso:', error);
        throw error;
    } finally {
        console.log('Requisição DELETE finalizada');
    }
};

    