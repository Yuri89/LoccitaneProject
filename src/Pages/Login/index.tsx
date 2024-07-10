import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { BoxLogin, LoginPage } from "./style";
import axios from "axios";
import { appWindow, PhysicalSize } from "@tauri-apps/api/window";
import { useEffect } from "react";
import { api } from "../../Utils/Api";

type Dados = {
    email: string,
    senha: string
}

// Esquema de validação usando Zod
const schema = z.object({
    email: z.string().min(1, "Usuário é obrigatório").max(254, "Usuário muito longo"),
    senha: z.string().min(1, "Senha é obrigatória").max(254, "Senha muito longa"),
});

type Inputs = z.infer<typeof schema>;

export default function Login() {
    useEffect(() => {
        const resize = async () => {
            await appWindow.setResizable(false);
            await appWindow.setSize(new PhysicalSize(800, 600));
        }

        resize();
    }, []);

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async (data: Dados) => {
        try {
            const response = await api.post('/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const { token } = response.data;
            sessionStorage.setItem('token', token); // Armazena o token na sessionStorage
            appWindow.setResizable(true);
            await appWindow.maximize();
            navigate("/home");
        } catch (error) {
            console.error('Erro no login:', error);
        }
    }
        const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
            resolver: zodResolver(schema),
        });

        return (
            <LoginPage>
                <BoxLogin onSubmit={handleSubmit(onSubmit)}>
                    <h1 style={{ marginBottom: "30px", fontSize: "50px" }}>L´occitane</h1>
                    <TextField
                        label="Usuário"
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                        {...register("email")}
                        InputLabelProps={{
                            style: { color: "white" } // Cor do texto do rótulo
                        }}
                        InputProps={{
                            style: {
                                color: "white", // Cor do texto de entrada
                                borderColor: "white", // Cor da borda do campo
                            },
                            sx: {
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
                                    color: "white", // Cor do texto de entrada
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white", // Cor da borda do campo
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white", // Cor da borda ao passar o mouse
                                },
                            },
                        }}
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        variant="outlined"
                        fullWidth
                        error={!!errors.senha}
                        helperText={errors.senha ? errors.senha.message : ""}
                        {...register("senha")}
                        InputLabelProps={{
                            style: { color: "white" } // Cor do texto do label
                        }}
                        InputProps={{
                            style: { color: "white" }, // Cor do texto de entrada
                            sx: {
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
                                    color: "white", // Cor do texto de entrada
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white", // Cor da borda do campo
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white", // Cor da borda ao passar o mouse
                                },
                            },
                        }}
                    />

                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </BoxLogin>
            </LoginPage>
        );
    }
