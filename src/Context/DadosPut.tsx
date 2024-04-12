import React, { PropsWithChildren, createContext, useContext, useState } from "react";

interface dados {
    id: string;
    codigoMaterial: string;
    loteMaterial: string;
    ordem: string;
    quantidade: string;
    validade: string;
}

interface ListDadosContextType {
    lista: dados | undefined;
    setLista: React.Dispatch<React.SetStateAction<dados | undefined>>;
}

const ListDados = createContext<ListDadosContextType | undefined>(undefined);

function CompartilharDadosPut({children}:PropsWithChildren) {
    const [lista, setLista] = useState<dados>();

    return (
        <ListDados.Provider value={{ lista, setLista }}>
            {children}
        </ListDados.Provider>
    );
}

const useDadosPut = (): ListDadosContextType => {
    const context = useContext(ListDados);
    if (!context) {
      throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};


export {CompartilharDadosPut,useDadosPut}