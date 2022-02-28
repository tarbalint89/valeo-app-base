// MUI components
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

// MUI icons
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// Components
import { Clock } from "./Clock";

// Styles
import "../styles/Header.css";

// Files
import GB_flag from "../images/british_logo.png";
import HU_flag from "../images/hungarian_logo.png";
import UK_flag from "../images/ukrainian_logo.png";
import Valeo from "../images/valeo_logo.png";
import { useContext } from "react";
import { LangContext, LANGS } from "../utils/context/LangContext";

const Header = function ({ open, setOpen }) {
  const { changeLang } = useContext(LangContext);

  return (
    <AppBar>
      <Toolbar className="toolbar">
        <IconButton onClick={() => setOpen(!open)} className="icon">
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>

        <Box className="header_menu">
          <Box color="black" className="clock">
            <Clock />
          </Box>
          <Box className="logo">
            <img src={Valeo} alt="Not found" id="logo" />
          </Box>

          <Box className="language">
            <Button onClick={() => changeLang(LANGS.EN)}>
              <img
                className="language_logo"
                src={GB_flag}
                alt="Not found"
                id="GB"
              />
            </Button>
            <Button onClick={() => changeLang(LANGS.HU)}>
              <img
                className="language_logo unactive_language"
                src={HU_flag}
                alt="Not found"
                id="HU"
              />
            </Button>
            <Button onClick={() => changeLang(LANGS.UK)}>
              <img
                className="language_logo unactive_language"
                src={UK_flag}
                alt="Not found"
                id="UK"
              />
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
