import { useState, useEffect } from "react";

const Btn = ({ click, text }) => {
  return <button onClick={click}>{text}</button>;
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  console.log("always!");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useEffect(() => {
    console.log("counter change~");
  }, [counter]);
  // useEffect( ()=> {}, [변화하는 시점] )

  //useState : 상태변화
  //useEffect : 시점변화

  return (
    <>
      <h1>Total Clicks : {counter}</h1>
      <Btn click={plus} text="+1" />
      <Btn click={minus} text="-1" />
    </>
  );
};

export default Counter;
