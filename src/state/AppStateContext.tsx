// Libraries 
import React, { createContext, useContext, Dispatch } from "react";
import { useImmerReducer } from "use-immer";

// Own Files
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { Action } from "./actions";

// State

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        {
          id: "c0",
          text: "Generate app scaffold",
        },
      ],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [
        {
          id: "c2",
          text: "Learn Typescript",
        },
      ],
    },
    {
      id: "2",
      text: "Done",
      tasks: [
        {
          id: "c3",
          text: "Begin to use static typing",
        },
      ],
    },
  ],
};

// Context
type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
  children?: React.ReactNode;
};

const AppStateContext = createContext({} as AppStateContextProps);

//   Provider

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = appData;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Hooks

export const useAppState = () => {
  return useContext(AppStateContext);
};
