import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";

export default function FlashCardsPage(props) {
  const { restartRecall } = props;
  const questions = [
    {
      questionContent: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      questionContent: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      questionContent: "Componentes devem iniciar com __",
      answer: "letra maiúscula",
    },
    {
      questionContent: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      questionContent: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      questionContent: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      questionContent: "Usamos props para __",
      answer: "passar diferentes informações para componentes ",
    },
    {
      questionContent: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

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
      />
    </>
  );
}
