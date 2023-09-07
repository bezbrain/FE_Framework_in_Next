// This file shall contain useContext setup for a feature

"use client";

import { HomeContextProps, HomeProviderProps } from "@/typesrafce";
import { createContext, useContext, useState } from "react";

export const HomeContext = createContext<HomeContextProps | undefined>(
  undefined
);

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [homeState, setHomeState] = useState<number>(2);

  return (
    <HomeContext.Provider value={{ homeState, setHomeState }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a AppProvider");
  }
  return context;
};
