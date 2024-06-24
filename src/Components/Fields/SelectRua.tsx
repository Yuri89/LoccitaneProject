import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type CodigoRua = {
    ids: string[];
    ruas: string[];
    loading: boolean;
    onClick: (id: string) => void;
}

export function SelectRua(props: CodigoRua) {
    const [selectedRua, setSelectedRua] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value as string;
        setSelectedRua(selectedValue); // Atualiza o estado com o valor selecionado

        const selectedIndex = props.ruas.indexOf(selectedValue);

        // Verifica se o índice é válido (não -1)
        if (selectedIndex !== -1) {
            const selectedId = props.ids[selectedIndex];
            props.onClick(selectedId);
            console.log(`Valor Selecionado: ${selectedValue}, ID: ${selectedId}`);
        } else {
            console.log(`Valor selecionado não encontrado: ${selectedValue}`);
        }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    {props.loading ? 'Carregando...' : 'Ruas'}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedRua}
                    label="Ruas"
                    onChange={handleChange}
                    disabled={props.loading}
                >
                    {props.ruas.map((rua, index) => (
                        <MenuItem key={props.ids[index]} value={rua}>
                            Rua: {rua}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
