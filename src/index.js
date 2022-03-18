import reactDom from "react-dom";
import HomePage from "./components/HomePage";
import FlashCardsPage from "./components/FlashCardsPage";

function App() {
  return <FlashCardsPage />;
}

const zapRecall = App();
const rootDiv = document.querySelector(".root");
reactDom.render(zapRecall, rootDiv);
