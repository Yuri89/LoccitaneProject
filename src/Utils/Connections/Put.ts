import { api } from "../Api";

export const updateData = async ({id, formData}:any) => {
    try {
        const response = await api.put(`/put/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Dados atualizados com sucesso:', response.data);
        return response.data,response.headers;
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        throw error;
    } finally {
        console.log('Requisição PUT finalizada');
    }
};
