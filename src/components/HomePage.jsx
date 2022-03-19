import React from "react";
import logo from "../assets/logo.png";
import FlashCardsPage from "./FlashCardsPage";

export default function HomePage() {
  let [visible, setVisible] = React.useState(true);
  const [restart, setRestart] = React.useState(false);
  function restartRecall() {
    setRestart(true);
  }

  return visible === true ? (
    <div className="home">
      <img src={logo} alt="ZapRecall logo" />
      <h1>ZapRecall</h1>
      <button
        onClick={() => {
          setVisible((visible = false));
        }}
      >
        Iniciar Recall!
      </button>
    </div>
  ) : restart === false ? (
    <FlashCardsPage restartRecall={restartRecall} />
  ) : (
    <HomePage />
  );
}
