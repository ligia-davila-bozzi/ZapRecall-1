import React from "react";
import FlashCard from "./FlashCard";

export default function Question(props) {
  let [showFlashCard, setShowFlashCard] = React.useState(false);
  return showFlashCard === false ? (
    <section>
      <p>Pergunta {props.number}</p>
      <ion-icon
        name="play-outline"
        onClick={() => {
          setShowFlashCard((showFlashCard = true));
        }}
      ></ion-icon>
    </section>
  ) : (
    <FlashCard questionContent={props.questionContent} answer={props.answer} />
  );
}
