import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'; 
import { z } from 'zod'; 
import LayoutDefault from "../../../../Styles/Layouts";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { H1 } from "../../../../Components/Texts";


const Box = styled.div`
    padding: 120px 10px;
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

const schema = z.object({
  posicao: z.string().min(2, "Caracteres mínimo 2").max(2, "Caracteres máximo 2"),
  numero: z.number().min(1, { message: "O minimo é 1" }).lte(99, { message: "O numero maximo é de 99" })
});

type Inputs = z.infer<typeof schema>; 

export default function Cadastrar() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <LayoutDefault>
      <Link to={'/posicoes'}>Voltar</Link>
      <Box>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <H1>Cadastrar Posição</H1>
          <TextField
            id="fullWidth"
            error={!!errors.posicao}
            helperText={errors.posicao?.message}
            label="Posição"
            size="small"
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
            id="fullWidth"
            error={!!errors.numero}
            helperText={errors.numero?.message}
            label="Quantas Posições Criar?"
            size="small"
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

          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "blue", 
              "&:hover": {
                backgroundColor: "green", 
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
