import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type NumberPositions = {
    ids: string[]; // Corrigido para 'ids' para corresponder ao uso no map
    numeros: string[];
    isList: boolean;
    onClick: (id: string) => void; // A função onClick agora aceita um identificador
}

export default function SelectPosition(props: NumberPositions) {
  const [selectedNumero, setSelectedNumero] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setSelectedNumero(selectedValue);
    const selectedIndex = props.numeros.indexOf(selectedValue);
    props.onClick(props.ids[selectedIndex]); 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Posições</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedNumero}
          label="Posições"
          onChange={handleChange}
          disabled={props.isList}
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
        >
          {props.numeros.map((numero, index) => (
            <MenuItem key={props.ids[index]} value={numero}>
              Posição: {numero}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
