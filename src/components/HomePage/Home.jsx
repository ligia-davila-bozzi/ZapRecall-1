import logo from "../../assets/logo.png";

export default function Home(props) {
  const { getSelectedDeck, decks, getInputValue, goal, setVisible } = props;

  return (
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
      <input
        type="text"
        placeholder="Digite sua meta de zaps..."
        onChange={getInputValue}
      ></input>
      <button
        className={goal === 0 ? "btn-notClickable" : ""}
        onClick={() => {
          setVisible(false);
        }}
      >
        Iniciar Recall!
      </button>
    </div>
  );
}
