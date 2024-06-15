import { api } from "../Api";

export const uploadData = (formData: any) => {
    return api.post('/post', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
        console.log('Dados enviados com sucesso:', response.data);
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
    