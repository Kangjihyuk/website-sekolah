import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Comments from "../Fragments/Comments";
const Slider = ({ comments }) => {
  return (
    <div className="container mt-10">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 90,
          },
        }}
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <Comments
              images={`http://localhost:5000/assets/${comment.images}`}
              alt={comment.nama}
              name={comment.nama}
              comments={comment.komentar}
              price={comment.id}
              classComments={comment.kelas_yang_dikomentar}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
