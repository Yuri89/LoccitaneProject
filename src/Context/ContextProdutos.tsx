import React, { createContext, PropsWithChildren, useContext, useState } from "react";

interface ProdutoPropsGet {
    id_produto: string;
    material: string;
    nome: string;
    codigo_material: string;
    lote_material: string;
    data_validade: string;
    quantidade: string;
    niveis: any[]; // Ajuste este tipo conforme necessário
}

interface ProdutosContextType {
    produto: ProdutoPropsGet | undefined;
    setProduto: React.Dispatch<React.SetStateAction<ProdutoPropsGet | undefined>>;
}

const ProdutosContext = createContext<ProdutosContextType | undefined>(undefined);

function CompartilharProdutos({ children }: PropsWithChildren) {
    const [produto, setProduto] = useState<ProdutoPropsGet>();

    return (
        <ProdutosContext.Provider value={{ produto, setProduto }}>
            {children}
        </ProdutosContext.Provider>
    );
}

const useProdutos = (): ProdutosContextType => {
    const context = useContext(ProdutosContext);
    if (!context) {
        throw new Error('useProdutos must be used within a ProdutosProvider');
    }
    return context;
};

export { CompartilharProdutos, useProdutos };
