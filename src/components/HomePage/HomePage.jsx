import React from "react";
import FlashCardsPage from "../FlashCardsPage/FlashCardsPage";
import decks from "./decks";
import Home from "./Home";

export default function HomePage() {
  let [visible, setVisible] = React.useState(true);

  const [restart, setRestart] = React.useState(false);

  const [goal, setGoal] = React.useState(0);

  const [deckQuestions, setDeckQuestions] = React.useState(decks[0].questions);

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

  function getSelectedDeck(event) {
    const value = JSON.parse(event.target.value);
    setDeckQuestions(value);
  }

  return visible === true ? (
    <Home
      getSelectedDeck={getSelectedDeck}
      decks={decks}
      getInputValue={getInputValue}
      goal={goal}
      setVisible={setVisible}
    />
  ) : restart === false ? (
    <FlashCardsPage
      restartRecall={restartRecall}
      goal={goal}
      questions={deckQuestions}
    />
  ) : (
    <HomePage />
  );
}
