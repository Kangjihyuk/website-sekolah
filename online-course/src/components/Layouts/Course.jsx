import Title from "../Elements/Title";
import LinkNav from "../Elements/LinkNav";
import Cart from "../Fragments/Cart";

export const Course = ({ course, id }) => {
  const displayTitle = new Set();
  return (
    <>
      <div className="container mt-20 lg:mt-32" id={id}>
        <Title
          title="Online Courses"
          style="flex justify-center text-3xl lg:text-4xl"
        />
        <div className="flex flex-wrap justify-center gap-5 ">
          {course.map((item, index) => {
            if (displayTitle.has(item.title)) {
              return null;
            }
            displayTitle.add(item.title);
            return (
              <LinkNav
                key={index}
                name={item.title}
                style={"hover:text-primary after:hover:bg-primary poppins-bold"}
              />
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {course.length > 0
            ? course.map((item, index) => (
                <Cart key={index}>
                  <Cart.CartImage
                    images={`http://localhost:5000/assets/${item.images}`}
                    alt={item.title}
                    price={item.price}
                  />
                  <Cart.CartTitle
                    title={item.title}
                    desc={item.description}
                    descIcon={item.duration}
                    duration={item.duration}
                    user={item.id}
                  />
                </Cart>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
