import LinkNav from "../Elements/LinkNav";
import Title from "../Elements/Title";
const LinkFooter = ({ links, title }) => {
  return (
    <div>
      <Title title={title} style={"poppins-bold text-lg mb-2"} />
      {links.map((link) => (
        <LinkNav
          key={link.id}
          link={link.link}
          name={link.name}
          style={"text-sm  poppins-medium-italic after:bg-primary"}
        />
      ))}
    </div>
  );
};

export default LinkFooter;
