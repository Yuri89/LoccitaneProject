import { PropsWithChildren } from "react";
import { ProviderTheme } from "./ToggleThemes";
import { SidebarProvider } from "./ToggleSideBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CompartilharDadosPut } from "./DadosPut";
import { CompartilharPosicoes } from "./ContextPosicoes";
import { CompartilharProdutos } from "./ContextProdutos";
import { ToastWrapper } from "./ContextToast";

const queryClient = new QueryClient()


export default function ProviderCenter({ children }: PropsWithChildren) {
    return (
        <ProviderTheme>
            <QueryClientProvider client={queryClient}>
                <SidebarProvider>
                    <CompartilharDadosPut>
                        <CompartilharPosicoes>
                            <CompartilharProdutos>
                                <ToastWrapper>
                                    {children}
                                </ToastWrapper>
                            </CompartilharProdutos>
                        </CompartilharPosicoes>
                    </CompartilharDadosPut>
                </SidebarProvider>
            </QueryClientProvider>
        </ProviderTheme>
    )
}