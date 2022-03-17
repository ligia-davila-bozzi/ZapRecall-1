import Question from "./Question.jsx";

export default function Main() {
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

  return (
    <main>
      {questions.map((question) => (
        <Question
          number={questions.findIndex((element) => element === question) + 1}
          questionContent={question.questionContent}
          answer={question.answer}
          key={
            "Pergunta" + questions.findIndex((element) => element === question)
          }
        />
      ))}
    </main>
  );
}
