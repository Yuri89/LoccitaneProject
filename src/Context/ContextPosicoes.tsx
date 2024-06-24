import React, { PropsWithChildren, createContext, useContext, useState } from "react";

interface dados {
    id_rua: string;
    codigo: string,
    n_prateleiras: string,
    n_niveis: string,
}

interface ListDadosContextType {
    lista: dados | undefined;
    setLista: React.Dispatch<React.SetStateAction<dados | undefined>>;
}

const ListDados = createContext<ListDadosContextType | undefined>(undefined);

function CompartilharPosicoes({children}:PropsWithChildren) {
    const [lista, setLista] = useState<dados>();

    return (
        <ListDados.Provider value={{ lista, setLista }}>
            {children}
        </ListDados.Provider>
    );
}

const usePosicoes = (): ListDadosContextType => {
    const context = useContext(ListDados);
    if (!context) {
      throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};


export {CompartilharPosicoes,usePosicoes}