import { useCallback, useState } from "react";
import "./App.css";
import DemoOut from "./components/Demo/DemoOut";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const memoizedToggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const setAllowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOut show={showParagraph} />
      <Button onClick={memoizedToggleParagraphHandler}>
        Toggle Paragraph!
      </Button>
      <Button onClick={setAllowToggleHandler}>Allow Toggling</Button>
    </div>
  );
}

export default App;
