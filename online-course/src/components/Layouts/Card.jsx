import { Fragment } from "react";
import {
  Student,
  ChalkboardTeacher,
  GraduationCap,
} from "@phosphor-icons/react";
import Modal from "../../components/Elements/Modal";

const JsonCard = [
  {
    id: 1,
    icon: Student,
    title: "Enrolled Student",
    subtitle: "80,000+",
  },
  {
    id: 2,
    icon: ChalkboardTeacher,
    title: "Online Courses",
    subtitle: "20,000+",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Expert instructors",
    subtitle: "100,000+",
  },
];
const Card = () => {
  return (
    <Fragment>
      <div className="container mt-20 grid place-content-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {JsonCard.map((card) => {
          const conditionalCLass =
            card.id === JsonCard.length
              ? "sm:translate-x-1/2 lg:translate-x-0"
              : "";
          return <Modal key={"card.id"} {...card} style={conditionalCLass} />;
        })}
      </div>
    </Fragment>
  );
};

export default Card;
