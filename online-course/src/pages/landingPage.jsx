import { useEffect } from "react";
import Navbar from "../components/Layouts/Navbar";
import Home from "../components/Layouts/Home";
import Card from "../components/Layouts/Card";
import { Course } from "../components/Layouts/Course";

const LandingPage = () => {
  useEffect(() => {
    import("flowbite");
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Card />
      <Course />
    </>
  );
};

export default LandingPage;
