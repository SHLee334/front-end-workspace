import { useState } from "react";
import styled from "styled-components";
import { addAnimal } from "../api/animal";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  width: 100%;
  height: calc(100vh - 70px); // 헤더 높이만큼 뺀거를 자동으로 계산해줌
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin-right: 5px;
    padding: 5px;
  }

  button {
    color: white;
    background-color: black;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const Create = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({});
  const add = async () => {
    await addAnimal(animal);
    navigate("/"); // 홈화면으로 리다이렉트 시켜줌
  };

  return (
    <Div>
      <input
        type="text"
        placeholder="동물 이름 입력"
        value={animal.name}
        onChange={(e) => {
          setAnimal((prev) => ({ ...prev, name: e.target.value }));
          // ...prev : 원래 가지고있는 기존정보들 같이 담겨짐
        }}
      />
      <input
        type="text"
        placeholder="동물 나이 입력"
        value={animal.age}
        onChange={(e) => {
          setAnimal((prev) => ({ ...prev, age: e.target.value }));
        }}
      />
      <button onClick={add}>동물 추가</button>
    </Div>
  );
};

export default Create;
