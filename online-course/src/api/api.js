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
