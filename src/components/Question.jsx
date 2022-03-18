import React from "react";
import FlashCard from "./FlashCard";

export default function Question(props) {
  let [showFlashCard, setShowFlashCard] = React.useState(false);
  let [result, setResult] = React.useState("notAnswered");
  function answerCard(result) {
    setResult(result);
  }

  const { number, questionContent, answer } = props;
  if (result === "notAnswered") {
    return showFlashCard === false ? (
      <section>
        <p>Pergunta {number}</p>
        <ion-icon
          name="play-outline"
          onClick={() => {
            setShowFlashCard((showFlashCard = true));
          }}
        ></ion-icon>
      </section>
    ) : (
      <FlashCard
        questionContent={questionContent}
        answer={answer}
        callback={answerCard}
      />
    );
  } else {
    let ionName = "";
    let color = "";
    let pStyle = null;
    if (result === "right") {
      ionName = "checkmark-circle";
      pStyle = {
        color: "#2FBE34",
        textDecorationLine: "line-through",
      };
      color = "#2FBE34";
    }
    if (result === "almost") {
      ionName = "help-circle";
      pStyle = {
        color: "#FF922E",
        textDecorationLine: "line-through",
      };
      color = "#FF922E";
    }
    if (result === "wrong") {
      ionName = "close-circle";
      pStyle = {
        color: "#FF3030",
        textDecorationLine: "line-through",
      };
      color = "#FF3030";
    }
    return (
      <section>
        <p style={pStyle}>Pergunta {number}</p>
        <ion-icon name={ionName} style={{ color: color }}></ion-icon>
      </section>
    );
  }
}
