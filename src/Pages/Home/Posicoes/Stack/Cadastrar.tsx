import React, { useState } from 'react';
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import LayoutDefault from "../../../../Styles/Layouts";
import { Link } from "react-router-dom";
import { Button, CircularProgress, TextField } from "@mui/material";
import { H1 } from "../../../../Components/Texts";
import MiniAlert from "../../../../Components/Menssager/MiniArlet";
import { uploadDataRuas } from "../../../../Utils/Connections/Post";
import { useNavigateOnError } from '../../../../Hooks/useApiOnError';
import { api } from '../../../../Utils/Api';

const Box = styled.div`
    padding: 120px 10px;
    display: flex;
    justify-content: center;
`;

const FormStyled = styled.form`
    padding: 50px 80px 50px;
    width: 500px;
    background: none;
    border: 2px white solid;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

// Ajuste no schema para garantir que os números sejam inteiros
const schema = z.object({
    posicao: z.string().min(2, "Caracteres mínimo 2").max(2, "Caracteres máximo 2").regex(/^[A-Za-z]+$/, { message: "Apenas letras são permitidas" }),
    numero: z.number().int().min(1, { message: "O mínimo é 1" }).lte(99, { message: "O número máximo é de 99" }),
    nivel: z.number().int().min(1, { message: "O mínimo é 1" }).lte(99, { message: "O número máximo é de 99" })
});

type Inputs = z.infer<typeof schema>;

export default function Cadastrar() {
    useNavigateOnError(api);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const [isLoading, setIsLoading] = useState(false);
    const [alerts, setAlerts] = useState<{ id: number, visible: boolean, texto: string }[]>([]);

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        setIsLoading(true);

        // Adicionando log para verificar os dados antes de enviar
        console.log('Dados do formulário:', formData);

        try {
            const response = await uploadDataRuas(formData);
            console.log('Dados enviados com sucesso:', response);
            adicionarAlert("Posição registrada com sucesso!!");
        } catch (error: any) {
            console.error('Erro ao enviar dados:', error);
            if (error.response && error.response.status === 400) {
                adicionarAlert("Posição já registrada");
            } else {
                adicionarAlert("Erro ao enviar dados");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const adicionarAlert = (textoString: string) => {
        const newAlert: { id: number, visible: boolean, texto: string } = {
            id: alerts.length + 1,
            visible: true,
            texto: textoString
        };

        setAlerts(prevAlerts => [...prevAlerts, newAlert]);

        setTimeout(() => {
            setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== newAlert.id));
        }, 5000);
    };

    return (
        <LayoutDefault>
            <Link to={'/posicoes'}>Voltar</Link>
            <Box>
                <FormStyled onSubmit={handleSubmit(onSubmit)}>
                    <H1>Cadastrar Posição</H1>
                    <TextField
                        id="posicao"
                        error={!!errors.posicao}
                        helperText={errors.posicao?.message}
                        label="Posição"
                        size="small"
                        autoComplete="off"
                        InputLabelProps={{
                            style: { color: "white" },
                        }}
                        {...register("posicao")}
                        sx={{
                            "& .MuiOutlinedInput-root .MuiInputBase-input": {
                                color: "white",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                    />

                    <TextField
                        id="numero"
                        error={!!errors.numero}
                        helperText={errors.numero?.message}
                        label="Quantas Posições Criar?"
                        size="small"
                        autoComplete="off"
                        InputLabelProps={{
                            style: { color: "white" },
                        }}
                        {...register("numero", { valueAsNumber: true })}
                        sx={{
                            "& .MuiOutlinedInput-root .MuiInputBase-input": {
                                color: "white",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                    />

                    <TextField
                        id="nivel"
                        error={!!errors.nivel}
                        helperText={errors.nivel?.message}
                        label="Quantas Níveis Criar?"
                        size="small"
                        autoComplete="off"
                        InputLabelProps={{
                            style: { color: "white" },
                        }}
                        {...register("nivel", { valueAsNumber: true })}
                        sx={{
                            "& .MuiOutlinedInput-root .MuiInputBase-input": {
                                color: "white",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        disabled={isLoading}
                        sx={{
                            backgroundColor: "blue",
                            "&:hover": {
                                backgroundColor: "green",
                            },
                        }}
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Registrar'}
                    </Button>
                </FormStyled>
            </Box>
            {alerts.map(alert => (
                <MiniAlert key={alert.id} visible={alert.visible} texto={alert.texto} />
            ))}
        </LayoutDefault>
    );
}