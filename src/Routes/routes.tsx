import Loading from "../Components/Loading";
import Configuracoes from "../Pages/Home/Configuracoes";
import Dados from "../Pages/Home/Dados";
import Estoque from "../Pages/Home/Estoque";
import Cadastrar from "../Pages/Home/Estoque/Stack/Cadastrar";
import CadastrarP from "../Pages/Home/Posicoes/Stack/Cadastrar";
import Editar from "../Pages/Home/Estoque/Stack/Editar";
import EditarP from "../Pages/Home/Posicoes/Stack/Editar";
import Gestao from "../Pages/Home/Gestao";
import Home from "../Pages/Home/MainPage";
import Posicoes from "../Pages/Home/Posicoes";
import Login from "../Pages/Login";
import { BrowserRouter as Router, RouterProvider, createMemoryRouter } from 'react-router-dom';
import BloquearP from "../Pages/Home/Posicoes/Stack/Bloquear";
import AuthProvider from "./Authentication/AuthProvider";
import ProtectedRoute from "./Authentication/ProtectedRoute";



export default function Routes() {

    const routes = createMemoryRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Login/>
                </ProtectedRoute>
            ),
        },
        {
            path: '/dados',
            element: (
                <ProtectedRoute>
                    <Dados />
                </ProtectedRoute>
            ),
        },
        {
            path: '/estoque',
            element: (
                <ProtectedRoute>
                    <Estoque />
                </ProtectedRoute>
            ),
        },
        {
            path: '/posicoes',
            element: (
                <ProtectedRoute>
                    <Posicoes />
                </ProtectedRoute>
            ),
        },
        {
            path: '/gestao',
            element: (
                <ProtectedRoute>
                    <Gestao />
                </ProtectedRoute>
            ),
        },
        {
            path: '/configuracoes',
            element: (
                <ProtectedRoute>
                    <Configuracoes />
                </ProtectedRoute>
            ),
        },
        {
            path: '/home',
            element: <Home/>,
        },


        {
            path: '/stack-estoque-cadastrar',
            element: (
                <ProtectedRoute>
                    <Cadastrar />
                </ProtectedRoute>
            ),
        },
        {
            path: '/stack-posicao-cadastrar',
            element: (
                <ProtectedRoute>
                    <CadastrarP />
                </ProtectedRoute>
            ),
        },
        {
            path: '/stack-estoque-editar',
            element: (
                <ProtectedRoute>
                    <Editar />
                </ProtectedRoute>
            ),
        },
        {
            path: '/stack-posicao-editar',
            element: (
                <ProtectedRoute>
                    <EditarP />
                    </ProtectedRoute>
            ),
        },
        {
            path: '/stack-posicao-bloquear',
            element: (
                <ProtectedRoute>
                    <BloquearP />
                </ProtectedRoute>
            ),
        },
        {
            path: '/stack-produtos',
            element: (
                <ProtectedRoute>
                    <Posicoes />
                </ProtectedRoute>
            ),
        },
        {
            path: '/stack-gestao',
            element: (
                <ProtectedRoute>
                    <Estoque />
                </ProtectedRoute>
            ),
        },
         
    ])


    return (
        <AuthProvider isSignedIn={true}>
        <RouterProvider
            router={routes}
            future={{ v7_startTransition: true }} />
        </AuthProvider>
    )
}