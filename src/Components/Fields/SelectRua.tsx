import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type CodigoRua = {
    ids: string[];
    ruas: string[];
    loading: boolean;
    onClick: (id: string) => void;
    styleB: boolean;
};

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

    // Crie uma cópia das ruas e ids e ordene-a por ruas
    const ruasComIdsOrdenadas = props.ruas
        .map((rua, index) => ({ rua, id: props.ids[index] }))
        .sort((a, b) => a.rua.localeCompare(b.rua));

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
                    {props.loading ? 'Carregando...' : 'Ruas'}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedRua}
                    label="Ruas"
                    onChange={handleChange}
                    disabled={props.loading}
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
                    {ruasComIdsOrdenadas.map(({ rua, id }) => (
                        <MenuItem key={id} value={rua}>
                            {rua}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
