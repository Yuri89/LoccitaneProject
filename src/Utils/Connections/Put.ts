import { api } from "../Api";

type FormRuaPut = {
    codigo: string;
    numero: number;
    numPrateleiras: string;
}

type FormRuaRemove = {
    codigo: string;
    number: number;
    numPrateleirasRemover: string;
}


export const updateData = async ({ id, formData }: any) => {
    try {
        const response = await api.put(`/put/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Dados atualizados com sucesso:', response.data);
        return response.data, response.headers;
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        throw error;
    } finally {
        console.log('Requisição PUT finalizada');
    }
};

export const updateRua = async (formData: FormRuaPut) => {
    // Converte numPrateleiras de string para número
    const numPrateleiras = parseInt(formData.numPrateleiras, 10);
    
    // Calcula o resultado correto somando os números
    const numResult = numPrateleiras - formData.numero;
    
    formData.numPrateleiras = numResult.toString();
    console.log(`Número total de prateleiras após adição: ${numResult}`);

    try {
        const response = await api.put(`/ruas/adicionar-prateleiras/${formData.codigo}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Dados atualizados com sucesso:', response.data);
        return {
            data: response.data,
            headers: response.headers
        };
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        throw error;
    } finally {
        console.log('Requisição PUT finalizada');
    }
};


export const updateRuaRemove = async (formData: FormRuaRemove) => {
    // Converte numPrateleiras de string para número
    const numPrateleiras = parseInt(formData.numPrateleirasRemover, 10);
    
    // Calcula o resultado correto somando os números
    const numResult = numPrateleiras - formData.number;
    
    formData.numPrateleirasRemover = numResult.toString();
    console.log(`Número total de prateleiras após adição: ${numResult}`);

    try {
        const response = await api.delete(`/ruas/removerPrateleirasENiveis`, {
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Dados atualizados com sucesso:', response.data);
        return {
            data: response.data,
            headers: response.headers
        };
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        throw error;
    } finally {
        console.log('Requisição PUT finalizada');
    }
    
};

