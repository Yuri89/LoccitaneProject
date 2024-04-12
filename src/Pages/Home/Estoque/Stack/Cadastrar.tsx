import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'; // Importa o resolver do Zod
import { z } from 'zod'; // Importa o Zod
import LayoutDefault from "../../../../Styles/Layouts";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { H1 } from "../../../../Components/Texts";


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
  example: z.string().min(5, "Número mínimo").max(7, "Número máximo"),
  exampleRequired: z.string().min(5, "Número mínimo").max(7, "Número máximo"),
  codigoMaterial: z.string().min(5, "Número mínimo").max(7, "Número máximo"),
  loteMaterial: z.string().min(5, "Número mínimo").max(7, "Número máximo"),
  ordem: z.string().min(5, "Número mínimo").max(7, "Número máximo"),
  quantidade: z.string().min(5, "Número mínimo").max(7, "Número máximo"),
  validade: z.date()

});


type Inputs = z.infer<typeof schema>; // Define o tipo Inputs a partir do esquema Zod

export default function Cadastrar() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <LayoutDefault>
      <Header>
        <LinkNone to={'/estoque'}>
          <Button sx={{
            backgroundColor: "blue", // Altera a cor de fundo do botão
            "&:hover": {
              backgroundColor: "#000053", // Altera a cor de fundo do botão quando hover
            },
            color:"white",
          }}>Voltar</Button>
        </LinkNone>
      </Header>
      <Box>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <H1>Cadastrar Posição</H1>
          <TextField
            id="fullWidth"
            error={!!errors.codigoMaterial}
            helperText={errors.codigoMaterial?.message}
            label="Codigo do Material"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
            }}
            {...register("codigoMaterial")}
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
            error={!!errors.loteMaterial}
            helperText={errors.loteMaterial?.message}
            label="Lote do Material"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
            }}
            {...register("loteMaterial")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: "white", // Altera a cor do texto dentro do input
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
            error={!!errors.ordem}
            helperText={errors.ordem?.message}
            label="Ordem"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
            }}
            {...register("ordem")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: "white", // Altera a cor do texto dentro do input
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
                color: "white", // Altera a cor do texto dentro do input
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
            error={!!errors.validade}
            helperText={errors.validade?.message}
            label="Validade"
            size="small"
            InputLabelProps={{
              style: { color: "white" }, // Altera a cor do rótulo
            }}
            {...register("validade")}
            sx={{
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                color: "white", // Altera a cor do texto dentro do input
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando não está focado
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Altera a cor da borda do input quando hover
              },
            }}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "blue", // Altera a cor de fundo do botão
              "&:hover": {
                backgroundColor: "#000053", // Altera a cor de fundo do botão quando hover
              },
            }}
          >
            Registrar
          </Button>

        </FormStyled>
      </Box>
    </LayoutDefault>
  );
}
