import { useState, useEffect } from "react";
import Btn from "./Btn";

const Converter = () => {
  const [number, setNumber] = useState("");
  const [bool, setBool] = useState(false);
  const [text, setText] = useState("Minutes => Hours");

  const change = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  useEffect(() => {
    if (!bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);

  const invert = () => {
    setBool(!bool);
    reset();
  };

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :{" "}
        <input
          type="number"
          placeholder="Minutes"
          onChange={change}
          value={bool ? number * 60 : number}
          disabled={bool}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          type="number"
          placeholder="Hours"
          onChange={change}
          disabled={!bool}
          value={bool ? number : Math.floor(number / 60)}
        />
      </p>

      <Btn text="Reset" click={reset} />
      <Btn text={text} click={invert} />
    </>
  );
};

export default Converter;
