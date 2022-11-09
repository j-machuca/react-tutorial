import React from "react";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";

function App() {
  return (
    <AppContainer>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
