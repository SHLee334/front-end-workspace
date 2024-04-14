import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// fetch ~ then
export const getFetch = () => {
  return fetch("http://localhost:8080/api/animal")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

// async ~ await
export const getAwait = async () => {
  const response = await fetch("http://localhost:8080/api/animal");
  console.log(response);
  return response.json();
};

// axios (async ~ await)
export const getAxios = async () => {
  const response = await axios.get("http://localhost:8080/api/animal");
  console.log(response);
  return response.data;
};

// react-query
export const useGetQuery = () => {
  return useQuery({
    queryKey: ["animal"],
    queryFn: getAxios,
  });
};
