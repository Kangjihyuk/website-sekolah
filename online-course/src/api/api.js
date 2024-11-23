import axios from "axios";

export const getApi = async () => {
  try {
    const response = await axios.get("http://localhost:5000/data", {
      headers: {
        "Content-Type": "application/json ",
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
};

export const Register = async ({
  username,
  email,
  password,
  confirmpassword,
}) => {
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify({ username, email, password, confirmpassword });

  try {
    const res = await axios.post("http://localhost:5000/register", body, {
      headers,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data?.errors || "Unknown error occurred";
  }
};

export const Login = async ({ email, password }) => {
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("http://localhost:5000/login", body, {
      headers,
    });
    console.log({ "login success": res.data });
    return res.data;
  } catch (err) {
    throw err.response?.data?.message || "error";
  }
};