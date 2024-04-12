import Loading from "../Components/Loading";
import Configuracoes from "../Pages/Home/Configuracoes";
import Dados from "../Pages/Home/Dados";
import Estoque from "../Pages/Home/Estoque";
import Cadastrar from "../Pages/Home/Estoque/Stack/Cadastrar";
import Editar from "../Pages/Home/Estoque/Stack/Editar";
import Gestao from "../Pages/Home/Gestao";
import Home from "../Pages/Home/MainPage";
import Produtos from "../Pages/Home/Produtos";
import Login from "../Pages/Login";
import AuthProvider from "./Authentication/AuthProvider";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import { BrowserRouter as Router, RouterProvider, createMemoryRouter } from 'react-router-dom';



export default function Routes() {

    const routes = createMemoryRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Home />
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
            path: '/produtos',
            element: (
                <ProtectedRoute>
                    <Produtos />
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
            path: '/signin',
            element: <Login />,
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
            path: '/stack-estoque-editar',
            element: (
                <ProtectedRoute>
                    <Editar />
                </ProtectedRoute>
            ),
        },
        {
            path: '/stack-produtos',
            element: (
                <ProtectedRoute>
                    <Produtos />
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
                fallbackElement={<Loading />}
                future={{ v7_startTransition: true }} />
        </AuthProvider>

    )
}