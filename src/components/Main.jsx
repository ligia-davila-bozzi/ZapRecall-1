import Pergunta from "./Pergunta.jsx";

export default function Main() {
  const perguntas = [];

  return (
    <main>
      {perguntas.map((pergunta) => {
        <Pergunta />;
      })}
    </main>
  );
}
