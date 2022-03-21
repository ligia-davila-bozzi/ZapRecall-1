import reactDom from "react-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return <HomePage />;
}

const zapRecall = App();
const rootDiv = document.querySelector(".root");
reactDom.render(zapRecall, rootDiv);
