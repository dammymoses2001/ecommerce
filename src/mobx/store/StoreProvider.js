import React from "react";
import { useLocalStore, useObserver } from "mobx-react";

const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"],
    addBug: (bug) => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
