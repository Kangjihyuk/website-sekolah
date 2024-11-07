import { Fragment } from "react";
import Navbar from "../components/Layouts/Navbar";
import Home from "../components/Layouts/Home";

const landingPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
};

export default landingPage;
