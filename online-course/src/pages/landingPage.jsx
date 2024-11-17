import { useEffect } from "react";
import Navbar from "../components/Layouts/Navbar";
import Home from "../components/Layouts/Home";
import Card from "../components/Layouts/Card";

const LandingPage = () => {
  useEffect(() => {
    import("flowbite");
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Card />
    </>
  );
};

export default LandingPage;
