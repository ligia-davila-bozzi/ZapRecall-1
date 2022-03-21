import Header from "./Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import React from "react";

export default function FlashCardsPage(props) {
  const { restartRecall, goal, questions } = props;
  const [answers, setAnswers] = React.useState([]);
  const [footerHeight, setFooterHeight] = React.useState("");

  function changeFooterHeight() {
    setFooterHeight("footerMaior");
  }

  function addAnswer(answer) {
    setAnswers([...answers, answer]);
  }

  return (
    <>
      <Header />
      <Main
        addAnswer={addAnswer}
        questions={questions}
        restartRecall={restartRecall}
      />
      <Footer
        setFooterHeight={changeFooterHeight}
        footerHeight={footerHeight}
        answers={answers}
        questionsNumber={questions.length}
        restartRecall={restartRecall}
        goal={goal}
      />
    </>
  );
}
