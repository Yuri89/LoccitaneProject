import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({ onSearch }:any) => {
    const [searchValue, setSearchValue] = useState('');

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            onSearch(searchValue);
        }
    };

    return (
        <TextField
            variant="outlined"
            placeholder="Pesquisar..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon
                            sx={{ color: 'white', cursor: 'pointer' }}
                            onClick={() => onSearch(searchValue)}
                        />
                    </InputAdornment>
                ),
            }}
            sx={{
                width:'35vw',
                borderColor: 'white',
                color: 'white',
                "& .MuiOutlinedInput-input": {
                    padding: '10px',
                    color: 'white',
                },
                "& .MuiInputBase-input::placeholder": {
                    color: 'white',
                },
                "& .MuiSelect-iconOutlined": {
                    color: 'white',
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: 'white',
                },
                "& .MuiOutlinedInput-root": {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: '#aaa',
                    },
                },
            }}
        />
    );
};

export default SearchField;
