import { useEffect } from "react";
import Navbar from "../components/Layouts/Navbar";
import Home from "../components/Layouts/Home";

const LandingPage = () => {
  useEffect(() => {
    import("flowbite");
  }, []);
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default LandingPage;
