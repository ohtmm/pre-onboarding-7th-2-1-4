import axios from "axios";

export const fetchData = async () => {
  const res = await axios.get("https://preonboarding.platdev.net/api/cars");
  return res.data.payload;
};
