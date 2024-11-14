import { Link } from "react-router-dom";
const AuthLayout = (props) => {
  const { type, title, children } = props;
  return (
    <div className={`flex justify-center items-center h-screen `}>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-primary">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your name
        </p>
        {children}
        <p className="text-center mt-4">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="text-primary font-bold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-primary font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
