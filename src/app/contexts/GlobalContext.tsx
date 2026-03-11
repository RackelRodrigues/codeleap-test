"use client";

import { createContext, ReactNode, useState } from "react";

type GlobalContextType = {
  name: string;
  setName: (name: string) => void;
};

type GlobalProviderProps = {
  children: ReactNode;
};

const initialValue: GlobalContextType = {
  name: "",
  setName: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [name, setName] = useState(initialValue.name);

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
