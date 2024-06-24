// Em Bloquear.tsx

import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import LayoutDefault from "../../../../Styles/Layouts";
import { Link } from "react-router-dom";
import { Button, CircularProgress, FormControl, FormHelperText } from "@mui/material";
import { H1 } from "../../../../Components/Texts";
import MiniAlert from "../../../../Components/Menssager/MiniArlet";
import SelectPosition from '../../../../Components/Fields/SelectPosition';
import SelectNivel from '../../../../Components/Fields/SelectNivel';
import { SelectRua } from '../../../../Components/Fields/SelectRua'; // Importe correto
import { PropsGetRuas, PropsGetRuasBloquado, fetchRuas, fetchRuasBloqueado } from '../../../../Utils/Connections/Get';

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

export default function Bloquear() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingComponent, setIsLoadingComponent] = useState(true);
    const [alerts, setAlerts] = useState<{ id: number, visible: boolean, texto: string }[]>([]);
    const [selectedPosition, setSelectedPosition] = useState('');
    const [selectedNivel, setSelectedNivel] = useState('');
    const [selectedRuaId, setSelectedRuaId] = useState<string>(''); // Estado para armazenar o ID da rua selecionada
    const [isBloqueado, setIsBloqueado] = useState(false);
    const [listRua, setListRua] = useState<PropsGetRuas[]>([]);
    const [position, setPosition] = useState<PropsGetRuasBloquado | undefined>(); // Estado para armazenar os detalhes da posição

    // Função para lidar com a seleção de uma rua
    const handleRuaClick = (id: string) => {
        setSelectedRuaId(id); // Atualiza o estado com o ID da rua selecionada
    };

    useEffect(() => {
        // Verifica se o nível selecionado está bloqueado
        const nivelSelecionado = niveis.find(nivel => nivel.id === selectedNivel);
        setIsBloqueado(nivelSelecionado?.status === 'BLOQUEADO');
    }, [selectedNivel]);

    const handlePositionClick = (id: string) => {
        setIsListNivel(true)
        setSelectedPosition(id);
    };

    const handleNivelClick = (id: string) => {
        setSelectedNivel(id);
        const selectedNivelObj = niveis.find(nivel => nivel.id === id);
        if (selectedNivelObj && selectedNivelObj.status === 'BLOQUEADO') {
            setIsBloqueado(true);
        } else {
            setIsBloqueado(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            position: selectedPosition,
            nivel: selectedNivel,
            rua: selectedRuaId // Usa o ID da rua selecionada
        };

        console.log('Dados do formulário:', formData);

        // Chama a função para bloquear ou desbloquear o nível
        if (isBloqueado) {
            handleDesbloquearClick();
        } else {
            handleBloquearClick();
        }

        setIsLoading(false);
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

    const handleBloquearClick = async () => {
        console.log('Bloquear nível:', selectedNivel);

        // Lógica para bloquear o nível
        try {
            await fetchRuasBloqueado(selectedRuaId); // Chama a função com o ID da rua selecionada
            adicionarAlert("Nível bloqueado com sucesso!");
        } catch (error) {
            console.error('Erro ao bloquear nível:', error);
            adicionarAlert("Erro ao bloquear nível.");
        }
    };

    const handleDesbloquearClick = async () => {
        console.log('Desbloquear nível:', selectedNivel);

        // Lógica para desbloquear o nível
        try {
            await fetchRuasBloqueado(selectedRuaId); // Chama a função com o ID da rua selecionada
            adicionarAlert("Nível desbloqueado com sucesso!");
        } catch (error) {
            console.error('Erro ao desbloquear nível:', error);
            adicionarAlert("Erro ao desbloquear nível.");
        }
    };

    const niveis = [
        { id: '1', texto: 'Nível 1', status: 'PARA_USO' },
        { id: '2', texto: 'Nível 2', status: 'BLOQUEADO' },
        { id: '3', texto: 'Nível 3', status: 'PARA_USO' }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lista: PropsGetRuas[] = await fetchRuas();
                setListRua(lista);
                setIsLoadingComponent(false);
            } catch (error) {
                console.error('Erro ao buscar ruas:', error);
            }
        };

        fetchData();
    }, []);

    const [isListNivel,setIsListNivel] = useState(false);

    useEffect(() => {
        const fetchData2 = async () => {
            if (selectedRuaId) { // Verifica se há uma rua selecionada
                try {
                    const posicao: PropsGetRuasBloquado = await fetchRuasBloqueado(selectedRuaId);
                    setPosition(posicao);
                    setIsLoadingComponent(false);
                } catch (error) {
                    console.error('Erro ao buscar detalhes da rua bloqueada:', error);
                }
            }
        };

        fetchData2();
    }, [selectedRuaId]); // Executa sempre que o ID da rua selecionada mudar

    return (
        <LayoutDefault>
            <Link to={'/posicoes'}>Voltar</Link>
            <Box>
                <FormStyled onSubmit={handleSubmit}>
                    <H1>Bloquear Posições</H1>
                    <SelectRua
                        ids={listRua.map(item => item.id_rua)}
                        ruas={listRua.map(item => item.codigo)}
                        onClick={handleRuaClick}
                        loading={isLoadingComponent}
                    />
                    <SelectPosition
                        ids={position?.prateleiras?.map(item => item.id_prateleira) || []}
                        numeros={position?.prateleiras?.map(item => item.codigo) || []}
                        onClick={handlePositionClick}
                        isList={!position?.prateleiras || position?.prateleiras.length === 0}
                    />

                    <SelectNivel
                        niveis={position?.prateleiras.find(prateleira => prateleira.id_prateleira === selectedPosition)?.niveis || []}
                        isList={!isListNivel}
                        onClick={handleNivelClick}
                    />


                    <Button
                        variant="contained"
                        type="submit"
                        disabled={isLoading || !selectedPosition || !selectedNivel || !selectedRuaId}
                        onClick={isBloqueado ? handleDesbloquearClick : handleBloquearClick}
                        sx={{
                            backgroundColor: isBloqueado ? "red" : "blue",
                            "&:hover": {
                                backgroundColor: isBloqueado ? "darkred" : "green",
                            },
                        }}
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : (isBloqueado ? 'Desbloquear' : 'Bloquear')}
                    </Button>
                </FormStyled>
            </Box>
            {alerts.map(alert => (
                <MiniAlert key={alert.id} visible={alert.visible} texto={alert.texto} />
            ))}
        </LayoutDefault>
    );
}
