import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, CircularProgress, Box } from "@mui/material";
import { FormStyled, LoginPage } from "./style";
import axios, { AxiosError, AxiosResponse } from "axios";
import { appWindow, PhysicalSize } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";
import { api } from "../../Utils/Api";
import { H1 } from "../../Components/Texts";

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
    const [erro1, setErro1] = useState<boolean>(false)
    const [erro2, setErro2] = useState<boolean>(false)
    const [erro3, setErro3] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        const resize = async () => {
            await appWindow.setResizable(false);
            await appWindow.setSize(new PhysicalSize(800, 600));
        }

        resize();
    }, []);

    const [showSavedInfo, setShowSavedInfo] = useState(true);

    useEffect(() => {
      const savedInfoVisibility = localStorage.getItem('showSavedInfo');
      if (savedInfoVisibility === 'false') {
        setShowSavedInfo(false);
      }
    }, []);

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async (data: Dados) => {
        setIsLoading(true)
        setErro1(false)
        setErro2(false)
        setErro3(false)

        try {
            const response = await api.post('/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setIsLoading(false)
            const { token } = response.data;
            sessionStorage.setItem('token', token); // Armazena o token na sessionStorage
            appWindow.setResizable(true);
            await appWindow.maximize();
            navigate("/home");
        } catch (error: unknown) {
            setIsLoading(false)
            if (error instanceof AxiosError) {
                const status = error.response?.status;
                if (status === 500) {
                    setErro1(true);
                } else if (status === 403) {
                    setErro2(true);
                } else {
                    setErro3(true);
                }
            } else {
                setErro3(true);
            }
        }
    }
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    return (
        <LoginPage>
            <FormStyled>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
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
                            autoComplete: 'one-time-code',
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
                            sx: { color: "white" } // Cor do texto do label
                        }}
                        InputProps={{
                            sx: {
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
                                    color: "white", // Cor do texto de entrada
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white", // Cor da borda do campo
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white ", // Cor da borda ao passar o mouse
                                },
                                "& input[type='password']": {
                                    filter: 'invert(1) brightness(1000%)', // Inverte a cor do ícone padrão do calendário
                                },
                            },
                        }}
                    />
                    {erro1 ? <span style={{ color: "red" }}>erro ao conectar na api!!</span>
                        : null}
                    {erro2 ? <span style={{ color: "red" }}>senha e email incorretos!</span>
                        : null}
                    {erro3 ? <span style={{ color: "red" }}>error ao fazer login!</span>
                        : null}

                    <Button type="submit" variant="contained" color="primary">
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                    </Button>
                </Box>
            </FormStyled>
        </LoginPage>
    );
}
