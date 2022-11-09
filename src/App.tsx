// Modules
import React from "react";

// Styles
import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";

// Components
import { AddNewItem } from "./AddNewItem";

import { Column } from "./Column";

function App() {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
