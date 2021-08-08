import { useQuery } from "react-query";
import axios from "axios";

const getCall = async (path) => {
  const data = await axios.get(path, {
      headers: {
          'Content-type': 'application/json'
      },
  });
  return data;
};

export default function useGet( path, key) {
  return useQuery([key ? key : 'item', path], () => getCall(path), {retry: 0});
}
