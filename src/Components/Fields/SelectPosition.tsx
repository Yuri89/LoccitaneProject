import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type NumberPositions = {
  ids: string[];
  numeros: string[];
  isList: boolean;
  onClick: (id: string) => void;
  styleB: boolean;
};

export default function SelectPosition(props: NumberPositions) {
  const [selectedNumero, setSelectedNumero] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setSelectedNumero(selectedValue);
    const selectedIndex = props.numeros.indexOf(selectedValue);
    props.onClick(props.ids[selectedIndex]);
  };

  // Ordene a lista de números junto com seus ids
  const numerosComIdsOrdenados = props.numeros
    .map((numero, index) => ({ numero, id: props.ids[index] }))
    .sort((a, b) => parseFloat(a.numero) - parseFloat(b.numero));

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: 'white',
            background: '#222',
            padding: '0px 5px'
          }}
        >
          Posições
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedNumero}
          label="Posições"
          onChange={handleChange}
          disabled={props.isList}
          sx={{
            width: props.styleB ? '100%' : undefined,
            border: '1px solid white', // Define a borda branca
            color: 'white', // Define a cor do texto como branco
            "& .MuiSelect-iconOutlined": {
              color: 'white', // Cor do ícone de dropdown também em branco
            },
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: 'white', // Cor da borda em hover para branco
              },
            },
            "&:hover": {
              borderColor: '#aaa', // Cor da borda em hover para branco
            },
          }}
        >
          {numerosComIdsOrdenados.map(({ numero, id }) => (
            <MenuItem key={id} value={numero}>
              {numero}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
