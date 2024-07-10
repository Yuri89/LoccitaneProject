import React, { PropsWithChildren, createContext, useContext, useState } from "react";

interface Dados {
    id_rua: string;
    codigo: string;
    n_prateleiras: string;
    n_niveis: string;
}

interface DadosContextType {
    lista: Dados | undefined;
    setLista: React.Dispatch<React.SetStateAction<Dados | undefined>>;
}

const ListDados = createContext<DadosContextType | undefined>(undefined);

function CompartilharPosicoes({children}: PropsWithChildren) {
    const [lista, setLista] = useState<Dados>();

    return (
        <ListDados.Provider value={{ lista, setLista }}>
            {children}
        </ListDados.Provider>
    );
}

const usePosicoes = (): DadosContextType => {
    const context = useContext(ListDados);
    if (!context) {
      throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};


export {CompartilharPosicoes,usePosicoes}