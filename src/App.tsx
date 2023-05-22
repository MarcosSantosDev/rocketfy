import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { Header, Board } from "./components";
import { BoardContextProvider } from "./components/Board/context/BoardContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <DndProvider backend={HTML5Backend}>
        <BoardContextProvider>
          <Board />
        </BoardContextProvider>
      </DndProvider>
    </>
  );
}

export default App;
