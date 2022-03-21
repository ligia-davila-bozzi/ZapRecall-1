import React from "react";
import logo from "../assets/logo.png";
import FlashCardsPage from "./FlashCardsPage";

export default function HomePage() {
  let [visible, setVisible] = React.useState(true);
  const [restart, setRestart] = React.useState(false);
  const [goal, setGoal] = React.useState(0);
  function restartRecall() {
    setRestart(true);
  }

  function getInputValue(event) {
    const value = event.target.value;
    if (!isNaN(value) && value * 1 >= 1) {
      setGoal(value);
    } else {
      setGoal(0);
    }
  }

  return visible === true ? (
    <div className="home">
      <img src={logo} alt="ZapRecall logo" />
      <h1>ZapRecall</h1>
      <input type="text" onChange={getInputValue}></input>
      <button
        className={goal === 0 ? "btn-notClickable" : ""}
        onClick={() => {
          setVisible((visible = false));
        }}
      >
        Iniciar Recall!
      </button>
    </div>
  ) : restart === false ? (
    <FlashCardsPage restartRecall={restartRecall} goal={goal} />
  ) : (
    <HomePage />
  );
}
