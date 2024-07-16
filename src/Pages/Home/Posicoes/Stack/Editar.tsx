import styled from "styled-components";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'; // Importa o resolver do Zod
import { number, z } from 'zod'; // Importa o Zod
import LayoutDefault from "../../../../Styles/Layouts";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { H1 } from "../../../../Components/Texts";
import { usePosicoes } from "../../../../Context/ContextPosicoes";
import { deleterPosicao } from "../../../../Utils/Connections/Delete";
import MiniAlert from "../../../../Components/Menssager/MiniArlet"; // Importe o MiniAlert aqui
import { fetchRuaID, fetchRuas } from "../../../../Utils/Connections/Get";
import { FormRuaPut, FormRuaRemove, updateRua, updateRuaRemove } from "../../../../Utils/Connections/Put";
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
  width: 500px;
  background: none;
  border: 2px white solid;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkNone = styled(Link)`
  text-decoration: none;
`;

// Define o esquema Zod para os dados do formulário
const schema = z.object({
  rua: z.string().min(2, "Caracteres mínimo 2").max(2, "Caracteres máximo 2").regex(/^[A-Za-z]+$/, { message: "Apenas letras são permitidas" }),
  prateleiras: z.number().int(),
});

type Inputs = z.infer<typeof schema>; // Define o tipo Inputs a partir do esquema Zod

export default function Editar() {
  useNavigateOnError(api);
  const navigate = useNavigate();
  const { lista } = usePosicoes();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: lista ? {
      rua: lista.codigo,
      prateleiras: Number(lista.n_prateleiras), // Converta para número aqui
    } : undefined,
  });


  const [alerts, setAlerts] = useState<{ id: number, visible: boolean, texto: string }[]>([]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {

  };

  const handleAtualizar: SubmitHandler<Inputs> = (data) => {
    if (lista?.id_rua) {
        const dataFormatUpdate: FormRuaPut = {
            codigo: lista.codigo,
            numero: Number(lista.n_prateleiras),
            numPrateleiras: data.prateleiras.toString(),
        };

        const dataFormatRemover: FormRuaRemove = {
            codigo: lista.codigo,
            number: Number(lista.n_prateleiras),
            numPrateleirasRemover: data.prateleiras
        };

        console.log('ID da rua:', lista.id_rua);

        if (Number(lista.n_prateleiras) === data.prateleiras) {
            console.log('Nada alterado!');
            adicionarAlert('Adicione um valor maior ou menor!');
        }

        if (Number(lista.n_prateleiras) < data.prateleiras) {
            console.log(lista.n_prateleiras, data.prateleiras);
            updateRua(dataFormatUpdate)
                .then(() => {
                    adicionarAlert('Posições adicionadas com sucesso!');
                    navigate(-1);
                })
                .catch((error) => {
                    console.error('Erro ao adicionar posições:', error);
                    adicionarAlert('Erro ao adicionar posições.');
                });
        }

        if (Number(lista.n_prateleiras) > data.prateleiras) {
            console.log(lista.n_prateleiras, data.prateleiras);

            updateRuaRemove(dataFormatRemover)
                .then(() => {
                    adicionarAlert('Posições removidas com sucesso!');
                    navigate(-1);
                })
                .catch((error) => {
                    console.error('Erro ao deletar posições:', error);
                    adicionarAlert('Erro ao deletar posições.');
                });
        }
    } else {
        console.log('ID da rua não está definido.');
        adicionarAlert('ID da rua não está definido!');
    }
};

  const handleDelete = () => {
    if (lista?.id_rua) {
      console.log("dados deletado \n\n" + lista.id_rua);
      deleterPosicao(lista.id_rua)
        .then(() => {
          adicionarAlert("Posição deletada com sucesso!");
          navigate(-1);
        })
        .catch((error) => {
          console.error('Erro ao deletar posição:', error);
          adicionarAlert("Erro ao deletar posição.");
        });
    } else {
      console.log("ID da rua não está definido.");
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
        <LinkNone to={'/posicoes'}>
          <Button sx={{
            backgroundColor: "blue", // Altera a cor de fundo do botão
            "&:hover": {
              backgroundColor: "#000053", // Altera a cor de fundo do botão quando hover
            },
            color: "white",
          }}>Voltar</Button>
        </LinkNone>
      </Header>
      <Box>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <H1>Editar Posição</H1>
          <TextField
            id="fullWidth"
            error={!!errors.rua}
            helperText={errors.rua?.message}
            label="Rua"
            size="small"
            autoComplete="off"
            disabled={true}
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            {...register("rua")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: 'white', // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando hover
              },
            }}
          />

          <TextField
            id="fullWidth"
            error={!!errors.prateleiras}
            helperText={errors.prateleiras?.message}
            label="Numero de prateleiras"
            size="small"
            autoComplete="off"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
            }}
            {...register("prateleiras", {
              setValueAs: v => v === "" ? undefined : Number(v) // Transforma o valor para número
            })}
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



          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit(handleAtualizar)} // Use handleSubmit para garantir que a função seja chamada corretamente
            sx={{
              backgroundColor: "#554f00", // Altera a cor de fundo do botão
              "&:hover": {
                backgroundColor: "#d4d100", // Altera a cor de fundo do botão quando hover
              },
            }}
          >
            atualizar
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{
              backgroundColor: "#5a0000", // Altera a cor de fundo do botão
              "&:hover": {
                backgroundColor: "#ff0000", // Altera a cor de fundo do botão quando hover
              },
            }}
          >
            deletar
          </Button>
        </FormStyled>
      </Box>
      {alerts.map(alert => (
        <MiniAlert key={alert.id} visible={alert.visible} texto={alert.texto} />
      ))}
    </LayoutDefault>
  );
}
