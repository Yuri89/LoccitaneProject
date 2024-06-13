import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styled from 'styled-components';

const FormControlColors = styled(FormControl)`
    filter: invert(1);
`

export default function Ordenar() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      
      <FormControlColors sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">Data Validade Menor</MenuItem>
          <MenuItem value={10}>Data Validade Maior</MenuItem>
          <MenuItem value={20}>Data Estoque Menor</MenuItem>
          <MenuItem value={30}>Data Estoque Maior</MenuItem>
          <MenuItem value={40}>A - Z</MenuItem>
          <MenuItem value={50}>Z - A</MenuItem>
          <MenuItem value={60}>Peso Maior</MenuItem>
          <MenuItem value={70}>Peso Menor</MenuItem>
          <MenuItem value={80}>Codigo Maior</MenuItem>
          <MenuItem value={90}>Codigo Menor</MenuItem>
          <MenuItem value={100}>Quantidade Maior</MenuItem>
          <MenuItem value={110}>Quantidade Menor</MenuItem>
        </Select>
        
      </FormControlColors>
    </div>
  );
}