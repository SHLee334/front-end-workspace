import { getAnimals } from "../api/animal";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { delAnimal } from "../api/animal";

const Table = styled.table`
  width: 100%;
  th {
    font-weight: bold;
    padding: 10px;
  }

  td {
    padding: 10px;
    text-align: center;
    border-top: 1px dashed gray;
  }
`;

const Home = () => {
  const [animals, setAnimals] = useState([]);

  const animalAPI = async () => {
    const result = await getAnimals();
    setAnimals(result.data);
  };

  const onDelete = async (no) => {
    await delAnimal(no);
    setAnimals(animals.filter((animal) => animal.no !== no));
  };

  useEffect(() => {
    animalAPI();
  }, []); // [] 빈 배열은 한번만 호출할때

  return (
    <Table>
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal) => (
          <tr key={animal.no}>
            <td>{animal.name}</td>
            <td>{animal.age}</td>
            <td>
              <button onClick={() => onDelete(animal.no)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Home;
