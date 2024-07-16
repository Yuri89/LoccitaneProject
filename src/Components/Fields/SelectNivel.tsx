import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type Nivel = {
  id_nivel: string;
  codigo: string;
  status: string;
};

type SelectNivelProps = {
  niveis: Nivel[];
  isList: boolean;
  onClick: (id: string) => void;
  styleB: boolean;
};

export default function SelectNivel(props: SelectNivelProps) {
  const [selectedNivel, setSelectedNivel] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setSelectedNivel(selectedValue);
    const selectedIndex = props.niveis.findIndex(nivel => nivel.codigo === selectedValue);
    props.onClick(props.niveis[selectedIndex].id_nivel);
  };

  // Ordene os níveis pelo código
  const niveisOrdenados = [...props.niveis].sort((a, b) => a.codigo.localeCompare(b.codigo));

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
          Níveis
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedNivel}
          label="Níveis"
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
          renderValue={(selected) => {
            const selectedNivel = props.niveis.find(nivel => nivel.codigo === selected);
            return (
              <span style={{ color: selectedNivel?.status === 'BLOQUEADO' || selectedNivel?.status === 'CHEIO' ? 'red' : 'inherit' }}>
                {selected}
              </span>
            );
          }}
        >
          {niveisOrdenados.map((nivel) => (
            <MenuItem
              key={nivel.codigo}
              value={nivel.codigo}
              style={{ color: nivel.status === 'BLOQUEADO' || nivel.status === 'CHEIO' ? 'red' : 'inherit' }}
            >
              {nivel.codigo} ({nivel.status})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
