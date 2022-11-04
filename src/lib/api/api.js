import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_CARS_API
});

export const fetchData = async ({ queryKey }) => {
  const segment = queryKey[1];
  const { data } = await axiosInstance.get(
    `/api/cars${segment ? `?segment=${segment}` : ""}`
  );
  return data.payload;
};
