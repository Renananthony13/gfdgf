import React, { useState, useEffect } from "react";
import { ImPlay3 } from "react-icons/im";
import "./style.css";

export default function Advice() {
  const [phrase, setPhrase] = useState();

  useEffect(() => {
    gera();
  });

  function gera() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((res) => {
        console.log(res.slip.advice);
        setPhrase(res.slip.advice);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <section className="infos">
        <p>ADVICE #117</p>
        <span>"{phrase}""</span>
      </section>

      <button onClick={gera}>
        <ImPlay3 />
      </button>
    </div>
  );
}
