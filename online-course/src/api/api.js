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

export const Register =
  ({ fullname, email, password, confirmpassword }) =>
  async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({ fullname, email, password, confirmpassword });
    console.log(body);
    try {
      const res = await axios.post("http://localhost:5000/register", body, {
        headers: headers,
      });
      dispatch({
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
    }
  };
  