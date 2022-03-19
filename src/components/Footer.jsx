import FooterMsg from "./FooterMsg";
import React from "react";

export default function Footer(props) {
  const { answers, questionsNumber, footerHeight, setFooterHeight } = props;
  let keyCont = 0;

  return (
    <footer className={footerHeight}>
      <FooterMsg
        answers={answers}
        answersNumber={answers.length}
        questionsNumber={questionsNumber}
        setFooterHeight={setFooterHeight}
      />
      <div className="answersIcons">
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
