import { Fragment, useState } from "react";
import Title from "../Elements/Title";
import Button from "../Elements/Button";
import OurBlog from "../Fragments/OurBlog";
import Analyse from "../../../images/assets/blog/analisis.png";
import Note from "../../../images/assets/blog/note.png";
import Presentasion from "../../../images/assets/blog/presentasion.png";

const BlogJson = [
  {
    id: 1,
    title: "SkillUp IT Bootcamp",
    desc: "Platform bootcamp intensif untuk mengembangkan keterampilan IT, mulai dari pemrograman hingga pengelolaan basis data. Didesain untuk pemula hingga profesional, dengan mentor berpengalaman dan proyek nyata untuk mempersiapkan Anda menghadapi dunia kerja teknologi.",
    images: Analyse,
  },
  {
    id: 2,
    title: "Langkah Awal Karir IT Anda",
    desc: "Website pelatihan IT interaktif yang menawarkan kurikulum terkini untuk karir di bidang teknologi. Pelajari coding, pengembangan web, dan teknologi cloud secara mendalam melalui kelas online dan sesi langsung bersama para ahli industri.",
    images: Note,
  },
  {
    id: 3,
    title: "Siap Menjadi Profesional IT",
    desc: "Tingkatkan keahlian IT Anda dengan TechReady Bootcamp. Program pembelajaran fleksibel untuk menguasai keterampilan teknologi yang dibutuhkan di era digital, lengkap dengan sertifikasi dan peluang jaringan profesional.",
    images: Presentasion,
  },
];

const Blog = ({ id }) => {
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (id) => {
    setIsOpen((prevId) => (prevId === id ? null : id));
  };

  return (
    <Fragment>
      <div className="container mt-10 md:mt-14 lg:mt-20" id={id}>
        <div className="flex justify-between items-center">
          <Title title="Read Our Blog" style={"md:text-3xl lg:text-4xl"} />
          <Button
            type="button"
            buttonName="View All"
            classname="uppercase  bg-primary "
          />
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {BlogJson.map((item) => {
            const conditionalCLass =
              item.id === BlogJson.length
                ? "md:translate-x-1/2 xl:translate-x-0"
                : "";
            return (
              <OurBlog
                key={item.id}
                images={item.images}
                desc={item.desc}
                title={item.title}
                isOpen={isOpen === item.id}
                handleClick={() => handleClick(item.id)}
                style={conditionalCLass}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
