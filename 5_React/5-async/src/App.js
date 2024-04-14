import { useEffect, useState } from "react";
import { getFetch, getAwait, getAxios, useGetQuery } from "./api/animal";

const App = () => {
  // const [data, setData] = useState([]);

  // const dataLoad = async () => {
  //   const result = await getAxios();
  //   setData(result);
  //   // getAwait().then((result) => {
  //   //   console.log(result);
  //   //   setData(result);
  //   // });
  // };

  // useEffect(() => {
  //   dataLoad();
  // }, []);

  // react-query
  const { data, isLodaing, isError } = useGetQuery();

  // 로딩중일때 보여줄 화면
  if (isLodaing) return <>Loading...</>;

  // 에러 났을때 보여줄 화면
  if (isError) return <>Error...</>;

  return (
    <>
      {data?.map((animal) => (
        <div key={animal.no}>{animal.name}</div>
      ))}
    </>
  );
};

export default App;
