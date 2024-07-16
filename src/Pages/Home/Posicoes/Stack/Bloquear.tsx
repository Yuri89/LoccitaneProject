import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import LayoutDefault from "../../../../Styles/Layouts";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import { H1 } from "../../../../Components/Texts";
import MiniAlert from "../../../../Components/Menssager/MiniArlet";
import SelectPosition from '../../../../Components/Fields/SelectPosition';
import SelectNivel from '../../../../Components/Fields/SelectNivel';
import { SelectRua } from '../../../../Components/Fields/SelectRua';
import { PropsGetRuas, PropsGetRuasBloquado, fetchRuas, fetchRuasBloqueado } from '../../../../Utils/Connections/Get';
import { useNavigateOnError } from '../../../../Hooks/useApiOnError';
import { api } from '../../../../Utils/Api';
import { bloquearNivel } from '../../../../Utils/Connections/Put';

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

const PrateleiraLabel = styled.div<{ isBloqueada: boolean }>`
    color: ${({ isBloqueada }) => isBloqueada ? 'red' : 'inherit'};
`;

export default function Bloquear() {
    useNavigateOnError(api);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingComponent, setIsLoadingComponent] = useState(true);
    const [alerts, setAlerts] = useState<{ id: number, visible: boolean, texto: string }[]>([]);
    const [selectedPosition, setSelectedPosition] = useState('');
    const [selectedNivel, setSelectedNivel] = useState<any>(null); // Estado para armazenar o objeto de nível selecionado
    const [selectedRuaId, setSelectedRuaId] = useState<string>(''); // Estado para armazenar o ID da rua selecionada
    const [isBloqueado, setIsBloqueado] = useState(false);
    const [listRua, setListRua] = useState<PropsGetRuas[]>([]);
    const [position, setPosition] = useState<PropsGetRuasBloquado | undefined>(); // Estado para armazenar os detalhes da posição
    const [isListNivel, setIsListNivel] = useState(false);

    // Função para lidar com a seleção de uma rua
    const handleRuaClick = (id: string) => {
        setSelectedRuaId(id); // Atualiza o estado com o ID da rua selecionada
    };

    useEffect(() => {
        // Verifica se o nível selecionado está bloqueado
        const nivelSelecionado = position?.prateleiras.find(prateleira => prateleira.id_prateleira === selectedPosition)?.niveis.find(nivel => nivel.id_nivel === selectedNivel?.id_nivel);
        setIsBloqueado(nivelSelecionado?.status === 'BLOQUEADO');
    }, [selectedNivel, position, selectedPosition]);

    const handlePositionClick = (id: string) => {
        setIsListNivel(true);
        setSelectedPosition(id);
    };

    const handleNivelClick = (id: string) => {
        const selectedNivelObj = position?.prateleiras.find(prateleira => prateleira.id_prateleira === selectedPosition)?.niveis.find(nivel => nivel.id_nivel === id);
        setSelectedNivel(selectedNivelObj);
        setIsBloqueado(selectedNivelObj?.status === 'BLOQUEADO');
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        if (!selectedNivel) {
            adicionarAlert("Nenhum nível selecionado.");
            setIsLoading(false);
            return;
        }

        const formData = {
            id: selectedNivel.id_nivel,
            status: { status: selectedNivel.status }
        };

        try {
            const response = await bloquearNivel(formData);
            adicionarAlert(`Nível ${isBloqueado ? 'desbloqueado' : 'bloqueado'} com sucesso!`);
            setSelectedNivel(response.data); // Atualiza o estado com o nível atualizado

            // Fetch updated position data after status change
            if (selectedRuaId) {
                const updatedPosition: PropsGetRuasBloquado = await fetchRuasBloqueado(selectedRuaId);
                setPosition(updatedPosition);
            }
        } catch (error) {
            console.error('Erro ao atualizar nível:', error);
            adicionarAlert(`Erro ao ${isBloqueado ? 'desbloquear' : 'bloquear'} nível.`);
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
                        styleB={false}
                    />
                    <SelectPosition
                        ids={position?.prateleiras?.map(item => item.id_prateleira) || []}
                        numeros={position?.prateleiras?.map(item => item.codigo) || []}
                        onClick={handlePositionClick}
                        isList={!position?.prateleiras || position?.prateleiras.length === 0}
                        styleB={false}
                        
                    />
                    <SelectNivel
                        niveis={position?.prateleiras.find(prateleira => prateleira.id_prateleira === selectedPosition)?.niveis || []}
                        isList={!isListNivel}
                        onClick={handleNivelClick}
                        styleB={false}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={isLoading || !selectedPosition || !selectedNivel || !selectedRuaId}
                        sx={{
                            backgroundColor: isBloqueado ? "darkblue" : "darkred",
                            "&:hover": {
                                backgroundColor: isBloqueado ? "blue" : "red",
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
