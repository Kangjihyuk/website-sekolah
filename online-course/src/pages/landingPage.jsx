import { useEffect, useState } from "react";
import Navbar from "../components/Layouts/Navbar";
import Home from "../components/Layouts/Home";
import Card from "../components/Layouts/Card";
import { Course } from "../components/Layouts/Course";
import { Comments, getApi } from "../api/api";
import Instructors from "../components/Layouts/Instructors";
import Blog from "../components/Layouts/Blog";
import Contact from "../components/Layouts/Contact";
import Footer from "../components/Layouts/Footer";

const LandingPage = () => {
  const [course, setCourse] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      try {
        const [courses, comments] = await Promise.all([getApi(), Comments()]);
        setCourse(courses.data);
        setComments(comments.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fecthData();
  }, []);

  console.log({ "ini data dari comments": comments });

  console.log({ "ini data dari api": course });

  useEffect(() => {
    import("flowbite");
  }, []);
  return (
    <>
      <Navbar />
      <Home course={course} id="home" />
      <Card />
      <Course course={course} id="course" />
      <Instructors comments={comments} />
      <Blog id={"blog"} />
      <Contact id={"contact"} />
      <Footer />
    </>
  );
};

export default LandingPage;
