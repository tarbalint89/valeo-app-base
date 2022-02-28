import { useContext } from "react";
import { Link } from "react-router-dom";

// MUI components
import { Box, Button, Drawer, Typography } from "@mui/material";

// MUI icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// Styles
import "../styles/NavMenu.css";

// Files
import Profil_logo from "../images/profil_logo.png";
import { LangContext } from "../utils/context/LangContext";

const name = "Name";

const NewNav = ({ open, setOpen }) => {
  const { t } = useContext(LangContext);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        style: { height: "calc(100% - 117px)", top: 82, boxShadow: "none" },
      }}
      BackdropProps={{
        style: { backgroundColor: "rgba(0,0,0,0)" },
      }}
    >
      <Box className="menu_content" role="presentation">
        <img src={Profil_logo} id="logo_profil" alt="profil-logo" />
        <Typography component={Link} to="/" className="hostname" m={2}>
          {name}
        </Typography>
        <Box display="flex" flexDirection="column" className="selectorMenu">
          <Button component={Link} to="/" className="mainButton">
            <Typography
              variant="button"
              style={{
                marginLeft: "20px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#4e6b7c",
              }}
            >
              {t("aside.home")}
            </Typography>
          </Button>

          <Button className="logoutButton" component={Link} to="/login">
            <ExitToAppIcon
              fontSize="medium"
              style={{
                marginLeft: "-30px",
                fontWeight: "bold",
                color: "#4e6b7c",
              }}
            />
            <Typography
              variant="button"
              style={{
                marginLeft: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#4e6b7c",
              }}
            >
              Log Out
            </Typography>
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default NewNav;
