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
    goal,
  } = props;

  let emoji = partyEmoji;
  let mainMsg = "PARABÉNS!";
  let msg = `Você atingiu sua meta de ${goal} FlashCards!`;

  let rightAnswers = [];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === "right" || answers[i] === "almost") {
      rightAnswers.push(answers[i]);
    }
  }
  if (rightAnswers.length < goal) {
    emoji = sadEmoji;
    mainMsg = "PUTZ!";
    msg = "Ainda faltaram alguns... \n Mas não desanime!";
  }

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
