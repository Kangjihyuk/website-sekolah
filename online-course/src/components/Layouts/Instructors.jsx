import { Fragment } from "react";
import Title from "../Elements/Title";
import { GrLinkPrevious } from "react-icons/gr";
import PropTypes from "prop-types";
import Slider from "../Fragments/Slider";
const Instructors = ({ comments }) => {
  return (
    <Fragment>
      <div className="mt-20 lg:mt-32 bg-primary/40 max-h-[50%] p-4">
        <div className="container flex justify-between items-center">
          <Title title="Instructors" style={"lg:text-4xl"} />
          <div className="flex items-center gap-2 mt-4">
            <GrLinkPrevious className="prev-button" />
            <GrLinkPrevious className="next-button rotate-180 rounded-sm bg-primary/20" />
          </div>
        </div>
        <Slider comments={comments} />
      </div>
    </Fragment>
  );
};

Instructors.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nama: PropTypes.string.isRequired,
      images: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Instructors;
