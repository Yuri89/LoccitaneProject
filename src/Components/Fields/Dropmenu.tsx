import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type DropMenuType = {
    texto: string;
    links: { link: string; linkText: string }[];
};

const StyledContainer = styled.div`
    border: 1px #d1d1d1 solid;
    border-radius: 5px;
`;

const StyledLink = styled(Link)`
    color: #202020;
`;

export default function Dropmenu(props: DropMenuType) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledContainer>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
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
                color:'#aaa',
                borderColor: '#aaa', // Cor da borda em hover para branco
              },
        }}
      >
        {props.texto}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.links.map(({ link, linkText }) => (
          <MenuItem key={link} onClick={handleClose}>
            <StyledLink to={link}>{linkText}</StyledLink>
          </MenuItem>
        ))}
      </Menu>
    </StyledContainer>
  );
}
