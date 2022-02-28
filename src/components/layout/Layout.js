// MUI components
import { Box, Drawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Components
import clsx from "clsx";
import NewNav from "../NewNav";
import Header from "../Header";

// Styles
import { styles } from "../../styles/material-ui";
import "../../styles/App.css";

const useStyles = makeStyles(styles);

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header open={props.open} setOpen={props.setOpen} />

      <div className={classes.container}>
        <NewNav
          classes={{ paper: { height: "10%" } }}
          open={props.open}
          setOpen={props.setOpen}
        />
        <main className={classes.main}>{props.children}</main>
      </div>
      <div className={classes.footer}>
        <Typography variant="h6">Footer</Typography>
      </div>
    </Box>
  );
};

export default Layout;
