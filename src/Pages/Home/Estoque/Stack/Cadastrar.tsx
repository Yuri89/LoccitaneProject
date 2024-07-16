import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import LayoutDefault from "../../../../Styles/Layouts";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { H1 } from "../../../../Components/Texts";
import { SelectRua } from "../../../../Components/Fields/SelectRua";
import SelectPosition from "../../../../Components/Fields/SelectPosition";
import SelectNivel from "../../../../Components/Fields/SelectNivel";
import { useState, useEffect } from "react";
import { Nivel, PropsGetRuas, PropsGetRuasBloquado, fetchRuas, fetchRuasBloqueado } from "../../../../Utils/Connections/Get";
import { FormProduto, registraProduto } from "../../../../Utils/Connections/Post";
import MiniAlert from "../../../../Components/Menssager/MiniArlet";
import { useNavigateOnError } from "../../../../Hooks/useApiOnError";
import { api } from "../../../../Utils/Api";

const Header = styled.header`
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0px 50px 100px black;
`;

const Box = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
`;

const FormStyled = styled.form`
  padding: 50px 80px 100px;
  width: 530px;
  background: none;
  border: 2px white solid;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Separador = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const LinkNone = styled(Link)`
  text-decoration: none;
`;

const schema = z.object({
  nome: z.string().min(1, "Caracteres mínimo 1!").max(254, "Caracteres máximo 254!"),
  material: z.string().min(1, "Caracteres mínimo 1!").max(254, "Caracteres máximo 254!"),
  loteMaterial: z.string().min(1, "Caracteres mínimo 1!").max(254, "Caracteres máximo 254!"),
  quantidade: z.string().min(1, "Número mínimo 1!").max(254, "Número máximo 254!"),
  validade: z.string(),
  nivelId: z.string() // Novo campo para o ID do nível
});

type Inputs = z.infer<typeof schema>;

export default function Cadastrar() {
  useNavigateOnError(api);
  const [isLoadingComponent, setIsLoadingComponent] = useState(true);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedNivel, setSelectedNivel] = useState('');
  const [selectedRuaId, setSelectedRuaId] = useState<string>('');
  const [isBloqueado, setIsBloqueado] = useState(false);
  const [listRua, setListRua] = useState<PropsGetRuas[]>([]);
  const [position, setPosition] = useState<PropsGetRuasBloquado | undefined>();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const [alerts, setAlerts] = useState<{ id: number, visible: boolean, texto: string }[]>([]);


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const selectedRuaObj = listRua.find(rua => rua.id_rua === selectedRuaId);
    const selectedPrateleira = position?.prateleiras.find(prateleira => prateleira.id_prateleira === selectedPosition);
    const selectedNivelObj = selectedPrateleira?.niveis.find(nivel => nivel.id_nivel === selectedNivel);

    const formData = {
      ...data,
      nivelId: selectedNivel
    };

    const formDataProduto: FormProduto = {
      material: formData.material, // Substitua pelos valores apropriados
      nome: formData.nome, // Substitua pelos valores apropriados
      codigo_material: `${selectedRuaObj?.codigo}.${selectedPrateleira?.codigo}.${selectedNivelObj?.codigo}`,
      lote_material: formData.loteMaterial,
      data_validade: formData.validade, // Convertendo para string ISO
      quantidade: formData.quantidade,
      id_nivel: formData.nivelId,
    };
    
    if(selectedNivelObj?.status != "BLOQUEADO"){
    try {
      const response = await registraProduto(formDataProduto);
      adicionarAlert("Produto registrado com sucesso!!");
      console.log("Produto registrado com sucesso:", response);
    } catch (error) {
      adicionarAlert("Erro ao registrado o Produto!!");
      console.error("Erro ao registrar produto:", error);

    }}else{
      adicionarAlert("Produto está Bloqueado!!");
      console.log("Produto Bloqueado");
    }
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

  const [isListNivel, setIsListNivel] = useState(false);

  useEffect(() => {
    const fetchData2 = async () => {
      if (selectedRuaId) {
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
  }, [selectedRuaId, register]);

  const handlePositionClick = (id: string) => {
    setIsListNivel(true);
    setSelectedPosition(id);
  };

  const handleNivelClick = (id: string) => {
    setSelectedNivel(id);
    setValue("nivelId", id); // Define o campo nivelId no formulário
    const selectedNivelObj = position?.prateleiras
      .find(prateleira => prateleira.id_prateleira === selectedPosition)
      ?.niveis.find(nivel => nivel.id_nivel === id);

    if (selectedNivelObj && selectedNivelObj.status === 'BLOQUEADO') {
      setIsBloqueado(true);
    } else {
      setIsBloqueado(false);
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
      <Header>
        <LinkNone to={'/estoque'}>
          <Button sx={{
            backgroundColor: "blue",
            "&:hover": {
              backgroundColor: "#000053",
            },
            color: "white",
          }}>Voltar</Button>
        </LinkNone>
      </Header>
      <Box>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <H1>Cadastrar Posição</H1>
          <Separador>
            <SelectRua
              ids={listRua.map(item => item.id_rua)}
              ruas={listRua.map(item => item.codigo)}
              onClick={(id: string) => setSelectedRuaId(id)}
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
          </Separador>

          <TextField
            id="nome"
            error={!!errors.nome}
            helperText={errors.nome?.message}
            label="Nome"
            size="small"
            InputLabelProps={{
              style: { color: "white" },
            }}
            {...register("nome")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: 'white', // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },
              "& :hover .MuiOutlinedInput-notchedOutline": {
                borderColor: '#aaa', // Cor da borda em hover para branco
              },
            }}
          />

          <TextField
            id="material"
            error={!!errors.material}
            helperText={errors.material?.message}
            label="Material"
            size="small"
            InputLabelProps={{
              style: { color: "white" },
            }}
            {...register("material")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: 'white', // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },
              "& :hover .MuiOutlinedInput-notchedOutline": {
                borderColor: '#aaa', // Cor da borda em hover para branco
              },
            }}
          />


          <TextField
            id="loteMaterial"
            error={!!errors.loteMaterial}
            helperText={errors.loteMaterial?.message}
            label="Lote do Material"
            size="small"
            InputLabelProps={{
              style: { color: "white" },
            }}
            {...register("loteMaterial")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: 'white', // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },
              "& :hover .MuiOutlinedInput-notchedOutline": {
                borderColor: '#aaa', // Cor da borda em hover para branco
              },
            }}
          />


          <TextField
            id="quantidade"
            error={!!errors.quantidade}
            helperText={errors.quantidade?.message}
            label="Quantidade"
            size="small"
            InputLabelProps={{
              style: { color: "white" },
            }}
            {...register("quantidade")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: 'white', // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },
              "& :hover .MuiOutlinedInput-notchedOutline": {
                borderColor: '#aaa', // Cor da borda em hover para branco
              },
            }}
          />

          <TextField
            id="validade"
            error={!!errors.validade}
            helperText={errors.validade?.message}
            label="Data de Validade"
            size="small"
            type="date"
            InputLabelProps={{
              shrink: true, // Mantém o label visível
              style: { color: "white", background: "#222", padding: "0px 5px" },
            }}
            {...register("validade")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: 'white', // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: '#aaa', // Cor da borda em hover para branco
              },
              "& .MuiInputAdornment-root .MuiSvgIcon-root": {
                color: 'white', // Altera a cor do ícone do calendário
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white", // Altera a cor do texto do placeholder
                opacity: 0.5, // Define a opacidade do placeholder
              },
              "& .MuiOutlinedInput-root": {
                "& .MuiSvgIcon-root": {
                  color: 'white', // Altera a cor do ícone do calendário
                }
              }
            }}
          />

          <TextField
            id="nivelId"
            type="hidden"
            {...register("nivelId")}
            value={selectedNivel}
            sx={{
              overflow:"hidden"
            }}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#000053",
              "&:hover": {
                backgroundColor: "blue",
              },
            }}
          >
            Registrar
          </Button>

        </FormStyled>
      </Box>
      {alerts.map(alert => (
        <MiniAlert key={alert.id} visible={alert.visible} texto={alert.texto} />
      ))}
    </LayoutDefault>
  );
}
