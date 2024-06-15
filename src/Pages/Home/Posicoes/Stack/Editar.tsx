import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'; // Importa o resolver do Zod
import { z } from 'zod'; // Importa o Zod
import LayoutDefault from "../../../../Styles/Layouts";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { H1 } from "../../../../Components/Texts";
import { useDadosPut } from "../../../../Context/DadosPut";


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
  validade: z.string()

});


type Inputs = z.infer<typeof schema>; // Define o tipo Inputs a partir do esquema Zod

export default function Editar() {
  const { lista } = useDadosPut()

  const isFieldDisabled = true;

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: lista,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleDelete: SubmitHandler<Inputs> = (data) => {
    console.log("dados deletado \n\n" + data)
  }

  return (
    <LayoutDefault>
      <Header>
        <LinkNone to={'/posicoes'}>
          <Button sx={{
            backgroundColor: "blue", // Altera a cor de fundo do botão
            "&:hover": {
              backgroundColor: "#000053", // Altera a cor de fundo do botão quando hover
            },
            color:"white",
          }}>Voltar</Button>
        </LinkNone>
        <span style={{marginLeft:15}}>id:{lista?.id.toString()}</span>
      </Header>
      <Box>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <H1>Editar Posição</H1>
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
            onClick={(data:any) => handleDelete(data)}
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
    </LayoutDefault>
  );
}
