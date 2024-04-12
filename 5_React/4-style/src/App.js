import "./asset/style.scss";
import style from "./asset/style.module.css";
import styled from "styled-components";

const Div = styled.div`
  background-color: darkcyan;
`;

const App = () => {
  return (
    <>
      {/* 인라인 스타일 방식 */}
      <div /*style={{ backgroundColor: "black", color: "white" }}*/
        className="class" // 리액트에선 class가 아니라 className
        /*id="id"*/
      >
        <h1 className={style.deco}>Hello, React Styling!</h1>
      </div>
    </>
  );
};

export default App;
