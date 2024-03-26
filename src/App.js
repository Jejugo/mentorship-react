import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Content from "./components/Content";
import TodoList from "./components/TodoList/TodoList";
import Country from "./components/Country";

function App() {
  const [isContentHidden, setIsContentHidden] = useState(false);

  return (
    <div className="App">
      {/* FIRST EXAMPLE - Hiding and showing content */}
      <Button setIsContentHidden={setIsContentHidden} />
      {!isContentHidden && <Content />}

      {/* SECOND EXAMPLE - Rendering a todo list component using inputs and controlled components */}
      <TodoList />
      <hr />
      <br />
      <br />
      <br />
      <br />

      {/* THIRD EXAMPLE - fetching data from API and using useEffect */}
      <Country />
    </div>
  );
}

export default App;
