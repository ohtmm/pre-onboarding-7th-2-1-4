import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_CARS_API
});

export const fetchData = async (segment) => {
  const { data } = await axiosInstance.get(
    `/api/cars${segment ? `?segment=${segment}` : ""}`
  );
  return data.payload;
};

export const getCars = async (segment) => {
  return await fetchData(segment);
};
