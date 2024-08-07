import { AxiosPromise } from "axios";
import { api } from "../Api";

export type PropsGetRuas = {
    id_rua: string;
    codigo: string,
    registro: string,
    status: string,
    n_prateleiras: string,
    n_niveis: string,
    n_vazios: string,
    n_preenchidos: string,
    n_bloqueado: string,
};


export const fetchRuas = async (): Promise<PropsGetRuas[]> => {
    try {
        const response = await api.get<PropsGetRuas[]>("/ruas");
        console.log('Dados recebidos:', response.data);
        console.log('Dados recebidos:', response.headers);
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    } finally {
        console.log('Requisição finalizada');
    }
};

export const fetchRuaID = async (id:String): Promise<PropsGetRuas[]> => {
    try {
        const response = await api.get<PropsGetRuas[]>(`/ruas/${id}`);
        console.log('Dados recebidos:', response.data);
        console.log('Dados recebidos:', response.status);
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    } finally {
        console.log('Requisição finalizada');
    }
};

export type Nivel = {
    id_nivel: string;
    codigo: string;
    status: string;
    produto: string | null;
};


export type Prateleira = {
    id_prateleira: string;
    codigo: string;
    niveis: Nivel[];
};

export type PropsGetRuasBloquado = {
    id_rua: string;
    codigo: string;
    prateleiras: Prateleira[];
};

export const fetchRuasBloqueado = async (id: string): Promise<PropsGetRuasBloquado> => {
    try {
        const response = await api.get<PropsGetRuasBloquado>(`/ruas/${id}`);
        console.log('Dados recebidos:', response.data);
        console.log('Status da resposta:', response.status);
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    } finally {
        console.log('Requisição finalizada');
    }
};

export type PropsGetRuasEditar = {
    id_rua: string;
    codigo: string,
    n_prateleiras: string,
    n_niveis: string,
};

export const fetchRuasEditar = async (id: string): Promise<PropsGetRuasEditar> => {
    try {
        const response = await api.get<PropsGetRuasEditar>(`/ruas/${id}`);
        console.log('Dados recebidos:', response.data);
        console.log('Status da resposta:', response.status);
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    } finally {
        console.log('Requisição finalizada');
    }
};

export type ProdutoPropsGet = {
    id_produto: string,
    material: string,
    nome: string,
    codigo_material: string,
    lote_material: string,
    data_validade: string,
    quantidade: string,
    niveis: any[]
}

export type ProdutoContentGet = {
    content: ProdutoPropsGet[],
    size: string,
    totalElements: string,
    totalPages: string,
}

export const ProdutosFetch = async (page: string, size: string): Promise<ProdutoContentGet> => {
    try {
        const response = await api.get<ProdutoContentGet>('/produtos', {
            params: { page, size },
        });
        console.log('Dados recebidos:', response.data);
        console.log('Status da resposta:', response.status);
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    } finally {
        console.log('Requisição finalizada');
    }
};

export type GraphicInfo = {
    totalBloqueado: string,
    totalNiveis: string,
    totalPrateleiras: string,
    totalPreenchidos: string,
    totalRuas: string,
    totalVazios: string,
}

export const fetchGrafico = async (): Promise<GraphicInfo> => {
    try {
        const response = await api.get<GraphicInfo>("/ruas/grafico");
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    } finally {
        
    }
};

export const ProdutosFetchSearch = async (page: string, size: string, search: string): Promise<ProdutoContentGet> => {
    try {
        const response = await api.get<ProdutoContentGet>('/produtos/filtro', {
            params: { page, size, search },
        });
        console.log('Dados recebidos:', response.data);
        console.log('Status da resposta:', response.status);
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    } finally {
        console.log('Requisição finalizada');
    }
};