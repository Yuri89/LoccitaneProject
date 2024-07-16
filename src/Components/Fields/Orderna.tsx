import React from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export default function Ordenar({resposta}:any) {
  const [sortValue, setSortValue] = React.useState('A-Z');

  const handleChange = (event:SelectChangeEvent) => {
    const value = event.target.value;
    setSortValue(value);
    resposta(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          value={sortValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
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
          <MenuItem value="A-Z">A-Z</MenuItem>
          <MenuItem value="Z-A">Z-A</MenuItem>
          <MenuItem value="Data-Menor">Data Validade Menor</MenuItem>
          <MenuItem value="Data-Maior">Data Validade Maior</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
