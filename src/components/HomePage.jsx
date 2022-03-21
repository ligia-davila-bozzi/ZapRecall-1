import React from "react";
import logo from "../assets/logo.png";
import FlashCardsPage from "./FlashCardsPage";

export default function HomePage() {
  let [visible, setVisible] = React.useState(true);
  const [restart, setRestart] = React.useState(false);
  const [goal, setGoal] = React.useState(0);
  function restartRecall() {
    setRestart(true);
  }

  const decks = [
    {
      questions: [
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
          answer:
            "interagindo com a DOM para colocar componentes React na mesma",
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
      ],
      name: "React",
    },
    {
      questions: [
        {
          questionContent: "Pergunta do teste número 1",
          answer: "Resposta do teste número 1",
        },
      ],
      name: "Teste número 1",
    },
    {
      questions: [
        {
          questionContent: "Pergunta do teste número 2",
          answer: "Resposta do teste número 2",
        },
      ],
      name: "Teste número 2",
    },
  ];

  const [deckQuestions, setDeckQuestions] = React.useState(decks[0].questions);

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
    <div className="home">
      <img src={logo} alt="ZapRecall logo" />
      <h1>ZapRecall</h1>
      <select onChange={getSelectedDeck}>
        {decks.map((deck) => (
          <option value={JSON.stringify(deck.questions)} key={deck.name}>
            {deck.name}
          </option>
        ))}
      </select>
      <input type="text" onChange={getInputValue}></input>
      <button
        className={goal === 0 ? "btn-notClickable" : ""}
        onClick={() => {
          setVisible((visible = false));
        }}
      >
        Iniciar Recall!
      </button>
    </div>
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
