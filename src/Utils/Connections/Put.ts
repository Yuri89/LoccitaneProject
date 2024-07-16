import { api } from "../Api";

export type FormRuaPut = {
    codigo: string;
    numero: number;
    numPrateleiras: string;
}

export type FormRuaRemove = {
    codigo: string;
    number: number;
    numPrateleirasRemover: number;
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
    try {
        const numPrateleirasAtual = formData.numPrateleirasRemover; // Número atual de prateleiras
        const numPrateleirasRemover = formData.number; // Número de prateleiras a serem removidas

        const novoNumPrateleiras = numPrateleirasRemover - numPrateleirasAtual;

        const dataFormat = new FormData();
        dataFormat.append('codigo', formData.codigo);
        dataFormat.append('numPrateleirasRemover', novoNumPrateleiras.toString());

        const response = await api.delete(`/ruas/removerPrateleirasENiveis`, {
            data: dataFormat,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log(`Dados atualizados com sucesso: Excluído ${numPrateleirasRemover} prateleiras, agora tem ${novoNumPrateleiras}!`);
        return {
            data: response.data,
            headers: response.headers
        };
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        throw error;
    } finally {
        console.log('Requisição DELETE finalizada');
    }
};

export type ProdutoPutForm = {
    id: string | undefined,
    nome: string,
    material: string,
    codigo_material: string,
    lote_material: string,
    quantidade: string,
    data_validade: string,
}

export const putProduto = async (formData: ProdutoPutForm) => {
    try {
        const response = await api.put(`/produtos/${formData.id}`, formData, {
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
    }
}

type StatusNivel = {
    status: "BLOQUEADO" | "PARA_USO";
};

export const bloquearNivel = async (formData: { id: string; status: StatusNivel }) => {

    const newStatus: StatusNivel = {
        status: formData.status.status === "BLOQUEADO" ? "PARA_USO" : "BLOQUEADO"
    };

    // Cria um objeto FormData e adiciona os campos
    const data = new FormData();
    data.append('id', formData.id);
    data.append('status', newStatus.status);


    try {
        const response = await api.patch(`/niveis/mudar-status`, data, {
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
    }
};

