import { PropsWithChildren } from "react";
import { ProviderTheme } from "./ToggleThemes";
import { SidebarProvider } from "./ToggleSideBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CompartilharDadosPut } from "./DadosPut";
import { CompartilharPosicoes } from "./ContextPosicoes";

const queryClient = new QueryClient()


export default function ProviderCenter({ children }: PropsWithChildren) {
    return (
        <ProviderTheme>
            <QueryClientProvider client={queryClient}>
            <SidebarProvider>
                <CompartilharDadosPut>
                    <CompartilharPosicoes>
                {children}
                    </CompartilharPosicoes>
                </CompartilharDadosPut>
            </SidebarProvider>
            </QueryClientProvider>
        </ProviderTheme>
    )
}