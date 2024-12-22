import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="flex lg:-m-3 bg-primary/5">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                Halo Semua👌, saya
                <span className="block font-bold text-4xl mt-1 text-dark md:text-5xl ">
                  Khusni Mubarok
                </span>
              </h1>
              <h2 className="font-medium text-slate text-lg mb-5 lg:text-2xl ">
                Student
                <span className="text-dark "> & Front End Developer</span>
              </h2>
              <p className="font-medium text-black mb-10 leading-relaxed">
                saya adalah seorang yang memiliki minat dalam pengembangan
                fullstack, menggabungkan keahlian frontend dan backend untuk
                menciptakan aplikasi web yang fungsional dan menarik. Ia
                berkomitmen untuk terus belajar teknologi baru dan meningkatkan
                keterampilan dalam pengembangan perangkat lunak.
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-lg shadow-lg hover:shadow-lg hover:opacity-90 transition-all duration-300 active:bg-sky-700 ease-in-out cursor-pointer "
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 relative lg:mt-9 lg:right-0">
                <img
                  src="../../images/user.png"
                  alt="hero"
                  className="max-w-full mx-auto relative z-10 -translate-y-20 rounded-lg"
                />
                <span className="absolute top-0 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width="600"
                    height="600"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#02816d"
                      d="M58.3,-23.2C63.5,-2.8,47.5,20.2,28.3,32.6C9.2,45,-13.1,46.8,-30.1,35.8C-47.1,24.7,-58.9,0.9,-53,-20.4C-47.2,-41.6,-23.6,-60.3,1.5,-60.8C26.5,-61.3,53,-43.6,58.3,-23.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
