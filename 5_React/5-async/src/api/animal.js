export const getFetch = () => {
  return fetch("http://localhost:8080/api/animal").then((response) => {
    console.log(response);
  });
};
