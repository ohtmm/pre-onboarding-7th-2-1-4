import axios from "axios";

export const fetchData = async () => {
  const res = await axios.get(
    "https://preonboarding.platdev.net/api/cars"
    // `https://preonboarding.platdev.net/api/cars${
    //   segment ? `?/segment=${segment}` : ""
    // }`
  );
  return res.data.payload;
};
