import { useParams, useNavigate } from "react-router-dom";
import { getAnimal, updateAnimal } from "../api/animal";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 100vh; // 헤더 높이만큼 뺀거를 자동으로 계산해줌
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

const Detail = () => {
  const navigate = useNavigate();
  const { no } = useParams();
  // 하나값 가져오니까 중괄호, 여러개 가져오면 []
  const [animal, setAnimal] = useState({ name: "", age: 0 }); // useState 안에 초기값 잡아주면 콘솔에 에러 사라진다(초기값 잡으라는 내용의 에러)

  // 동물값 하나만 가져오는 함수
  const animalAPI = async () => {
    const response = await getAnimal(no);
    setAnimal(response.data);
  };

  // 첫 시점(빈배열)에 위 함수를 한번 실행함
  useEffect(() => {
    animalAPI();
  }, []);

  // 동물 수정 함수
  const update = async () => {
    await updateAnimal(animal);
    navigate("/");
  };

  return (
    <Div>
      <input
        type="text"
        value={animal.name}
        onChange={(e) => {
          setAnimal((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <input
        type="text"
        value={animal.age}
        onChange={(e) => {
          setAnimal((prev) => ({ ...prev, age: e.target.value }));
        }}
      />
      <button onClick={update}>정보 수정</button>
    </Div>
  );
};

export default Detail;
