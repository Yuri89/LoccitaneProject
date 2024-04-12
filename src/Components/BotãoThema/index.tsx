import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ToggleThemes";
import { Button } from "@mui/material";

function BotaoTema() {
    const [menuOpen, setMenuOpen] = useState(false);
    const themeContext = useContext(ThemeContext);
  
    if (!themeContext) {
      return <div>Error: ThemeContext not available</div>;
    }
  
    const { toggleTheme, theme } = themeContext;
  
    
    return <Button onClick={toggleTheme}>Toggle Theme</Button>;
  }
  
  export default BotaoTema;