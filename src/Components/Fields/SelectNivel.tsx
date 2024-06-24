import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type Nivel = {
  id_nivel: string;
  codigo: string;
  status: string;
}

type SelectNivelProps = {
  niveis: Nivel[];
  isList: boolean;
  onClick: (id: string) => void;
}

export default function SelectNivel(props: SelectNivelProps) {
  const [selectedNivel, setSelectedNivel] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setSelectedNivel(selectedValue);
    const selectedIndex = props.niveis.findIndex(nivel => nivel.codigo === selectedValue);
    props.onClick(props.niveis[selectedIndex].id_nivel);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Níveis</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedNivel}
          label="Níveis"
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
          renderValue={(selected) => {
            const selectedNivel = props.niveis.find(nivel => nivel.codigo === selected);
            return (
              <span style={{ color: selectedNivel?.status === 'BLOQUEADO'? 'red' : 'inherit' }}>
                {selected}
              </span>
            );
          }}
        >
          {props.niveis.map((nivel) => (
            <MenuItem key={nivel.id_nivel} value={nivel.codigo} style={{ color: nivel.status === 'BLOQUEADO'? 'red' : 'inherit' }}>
              {nivel.codigo} ({nivel.status})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
