import { BASE_URL } from "./constaints";
import axios from "axios";

export const  postCall = async (data, url) => {
  const res = await axios.post(
    url !== undefined ? `${process.env.PORT}/${url}` : BASE_URL,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export const getCall = async (path) => {
  const res = await axios.get(`${process.env.PORT}/${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
