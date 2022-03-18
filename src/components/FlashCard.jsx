import React from "react";
import setinha from "../assets/setinha.png";

export default function FlashCard(props) {
  let [question, setQuestion] = React.useState(true);
  const { questionContent, answer, callback } = props;

  return question === true ? (
    <section className="flashCard">
      <p className="flashContent">{questionContent}</p>
      <img
        src={setinha}
        alt=""
        onClick={() => {
          setQuestion((question = false));
        }}
      />
    </section>
  ) : (
    <section className="flashCard">
      <p className="flashContent">{answer}</p>
      <div className="btns">
        <button className="btn-wrong" onClick={() => callback("wrong")}>
          Não lembrei
        </button>
        <button className="btn-almostRight" onClick={() => callback("almost")}>
          Quase não lembrei
        </button>
        <button className="btn-Right" onClick={() => callback("right")}>
          Zap!
        </button>
      </div>
    </section>
  );
}
