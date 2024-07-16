import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'; // Importa o resolver do Zod
import { z } from 'zod'; // Importa o Zod
import LayoutDefault from "../../../../Styles/Layouts";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { H1 } from "../../../../Components/Texts";
import { useProdutos } from "../../../../Context/ContextProdutos";
import { useNavigateOnError } from "../../../../Hooks/useApiOnError";
import { api } from "../../../../Utils/Api";
import { ProdutoPutForm, putProduto } from "../../../../Utils/Connections/Put";
import { useState } from "react";
import MiniAlert from "../../../../Components/Menssager/MiniArlet";
import { deletarProduto } from "../../../../Utils/Connections/Delete";


const Header = styled.header`
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0px 50px 100px black;
`

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
`
const LinkNone = styled(Link)`
    text-decoration: none;
`

// Define o esquema Zod para os dados do formulário
const schema = z.object({
  nome: z.string().min(1, "Número mínimo").max(254, "Número máximo"),
  material: z.string().min(1, "Número mínimo").max(254, "Número máximo"),
  codigo_material: z.string().min(1, "Número mínimo").max(254, "Número máximo"),
  lote_material: z.string().min(1, "Número mínimo").max(254, "Número máximo"),
  quantidade: z.string().min(1, "Número mínimo").max(254, "Número máximo"),
  data_validade: z.string()

});


type Inputs = z.infer<typeof schema>; // Define o tipo Inputs a partir do esquema Zod

export default function Editar() {
  useNavigateOnError(api);
  const [alerts, setAlerts] = useState<{ id: number, visible: boolean, texto: string }[]>([]);
  const { produto, setProduto } = useProdutos();
  const navigate = useNavigate()


  const isFieldDisabled = true;

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...produto,
      quantidade: produto?.quantidade.toString() ?? "", // Garante que quantidade seja uma string
    },
  });

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (
      produto &&
      (produto.nome === data.nome &&
        produto.material === data.material &&
        produto.codigo_material === data.codigo_material &&
        produto.lote_material === data.lote_material &&
        produto.quantidade.toString() === data.quantidade &&
        produto.data_validade === data.data_validade)
    ) {
      adicionarAlert("Atualize alguma informação para atualizar!");
    } else {
      const format: ProdutoPutForm = {
        id: produto?.id_produto.toString(),
        nome: data.nome,
        material: data.material,
        codigo_material: data.codigo_material,
        lote_material: data.lote_material,
        quantidade: data.quantidade,
        data_validade: data.data_validade,
      }

      try {
        const respose = putProduto(format)
        console.log("tudo ok: " + respose);
        adicionarAlert("Produto atualizado com sucesso!!");
      } catch (error) {
        adicionarAlert("Erro ao atualizar o Produto!!");
      }
    }
  };

  const handleDelete: SubmitHandler<Inputs> = (data) => {
    if (produto) {
      try {
        const deletar = deletarProduto(produto.id_produto).then((response) => {
          console.info("Objeto excluido: " + { ...data }, response)
          navigate("/estoque")
        }).catch((error) => {
          console.log(error)
          adicionarAlert("erro ao retornar dados!");
        })

      } catch (error) {
        adicionarAlert("erro ao deletar id!");
      }
    } else {
      adicionarAlert("erro ao pegar id!");
    }
  }

  return (
    <LayoutDefault>
      <Header>
        <LinkNone to={'/estoque'}>
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
            error={!!errors.nome}
            helperText={errors.nome?.message}
            label="Nome"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
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
            id="fullWidth"
            error={!!errors.material}
            helperText={errors.material?.message}
            label="Material"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
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
            id="fullWidth"
            error={!!errors.codigo_material}
            helperText={errors.codigo_material?.message}
            label="Codigo do Material"
            size="small"
            disabled={true}
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
            }}
            {...register("codigo_material")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: 'white', // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },

            }}
          />

          <TextField
            id="fullWidth"
            error={!!errors.lote_material}
            helperText={errors.lote_material?.message}
            label="Lote do Material"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
            }}
            {...register("lote_material")}
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
            id="fullWidth"
            error={!!errors.quantidade}
            helperText={errors.quantidade?.message}
            label="Quantidade"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
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
            id="fullWidth"
            error={!!errors.data_validade}
            helperText={errors.data_validade?.message}
            label="Validade"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
            }}
            {...register("data_validade")}
            disabled={isFieldDisabled}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: "white", // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },

            }}
          />

          <Button
            variant="contained"
            type="submit"
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
            onClick={(data: any) => handleDelete(data)}
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
