import { Typography } from "@mui/material";

// Components
import Layout from "../components/layout/Layout";
import NewNav from "../components/NewNav";

const Home = ({ open, setOpen }) => {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Typography>Home page</Typography>
      <NewNav />
    </Layout>
  );
};

export default Home;
