import partyEmoji from "../assets/party.png";
import sadEmoji from "../assets/sad.png";
import React from "react";

export default function FooterMsg(props) {
  const {
    answersNumber,
    questionsNumber,
    answers,
    setFooterHeight,
    restartRecall,
    setIconMargin,
  } = props;

  let emoji = partyEmoji;
  let mainMsg = "PARABÉNS!";
  let msg = "Você não esqueceu de nenhum flashcard!";

  answers.forEach((answer) => {
    if (answer === "wrong") {
      emoji = sadEmoji;
      mainMsg = "PUTZ!";
      msg = "Ainda faltaram alguns... \n Mas não desanime!";
    }
  });

  React.useEffect(() => {
    if (answersNumber === questionsNumber) {
      setFooterHeight();
      setIconMargin("answersIcons recallFinished");
    }
  });

  return answersNumber === questionsNumber ? (
    <>
      <div className="footer-mainMsg">
        <img src={emoji} alt="" />
        <p>{mainMsg}</p>
      </div>
      <p>{msg}</p>
      <p>
        {answersNumber}/{questionsNumber} CONCLUÍDOS
      </p>
      <button
        className="btn-restartRecall"
        onClick={() => {
          restartRecall();
        }}
      >
        REINICIAR RECALL
      </button>
    </>
  ) : (
    <p>
      {answersNumber}/{questionsNumber} CONCLUÍDOS
    </p>
  );
}
