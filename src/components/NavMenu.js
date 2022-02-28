import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";

import "../styles/NavMenu.css";
import Profil_logo from "../images/profil_logo.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { LangContext } from "../utils/context/LangContext";

function NavMenu({ isOpened, setIsOpened }) {
  const { t } = useContext(LangContext);

  const getCookieValue = (cookieName) => {
    var cookieValue = document.cookie.match(
      "(^|;)\\s*" + cookieName + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? cookieValue.pop() : "";
  };

  return (
    <Box className="menu_content">
      <img src={Profil_logo} id="logo_profil" alt="profil-logo" />
      <Typography component={Link} to="/profile" className="hostname" m={2}>
        {getCookieValue("name")}
      </Typography>
      <Box display="flex" flexDirection="column" className="selectorMenu">
        <Button
          component={Link}
          to="/mytasks"
          className="mainButton"
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <Typography
            variant="button"
            style={{
              marginLeft: "20px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#4e6b7c",
            }}
          >
            {t("aside.my_tasks")}
          </Typography>
        </Button>
        {getCookieValue("pos") === "leader" ? (
          <Button
            component={Link}
            to="/dashboard"
            className="mainButton"
            onClick={() => {
              setIsOpened(false);
            }}
          >
            <Typography
              variant="button"
              style={{
                marginLeft: "20px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#4e6b7c",
              }}
            >
              {t("aside.dashboard")}
            </Typography>
          </Button>
        ) : (
          <noscript />
        )}
        <Button
          component={Link}
          to="/projects"
          className="mainButton"
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <Typography
            variant="button"
            style={{
              marginLeft: "20px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#4e6b7c",
            }}
          >
            {t("aside.projects")}
          </Typography>
        </Button>
        {getCookieValue("pos") === "leader" ? (
          <Button
            component={Link}
            to="/team"
            className="mainButton"
            onClick={() => {
              setIsOpened(false);
            }}
          >
            <Typography
              variant="button"
              style={{
                marginLeft: "20px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#4e6b7c",
              }}
            >
              {t("aside.team")}
            </Typography>
          </Button>
        ) : (
          <noscript />
        )}

        <Button
          className="logoutButton"
          component={Link}
          to="/login"
          onClick={() => {
            setIsOpened(false);
          }}
        >
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
  );
}

export default NavMenu;
