import FooterMsg from "./FooterMsg";
import React from "react";

export default function Footer(props) {
  const {
    answers,
    questionsNumber,
    footerHeight,
    setFooterHeight,
    restartRecall,
  } = props;
  let keyCont = 0;
  const [iconMargin, setIconMargin] = React.useState("answersIcons");

  return (
    <footer className={footerHeight}>
      <FooterMsg
        answers={answers}
        answersNumber={answers.length}
        questionsNumber={questionsNumber}
        setFooterHeight={setFooterHeight}
        restartRecall={restartRecall}
        setIconMargin={setIconMargin}
      />
      <div className={iconMargin}>
        {answers.map((answer) => {
          keyCont++;
          let ionName = "";
          let color = "";
          if (answer === "right") {
            ionName = "checkmark-circle";
            color = "#2FBE34";
          }
          if (answer === "almost") {
            ionName = "help-circle";
            color = "#FF922E";
          }
          if (answer === "wrong") {
            ionName = "close-circle";
            color = "#FF3030";
          }

          return (
            <ion-icon
              name={ionName}
              style={{ color: color }}
              key={"Pergunta" + keyCont}
            ></ion-icon>
          );
        })}
      </div>
    </footer>
  );
}
