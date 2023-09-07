// This file shall contain useContext setup for a feature

"use client";

import React, { useContext, createContext, useState } from "react";
import { NavContextProps, NavProviderProps } from "@/typesrafce";

export const NavContext = createContext<NavContextProps | undefined>(undefined);

export const NavProvider = ({ children }: NavProviderProps) => {
  const [navState, setNavState] = useState<string>("Our Services");

  return (
    <NavContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = (): NavContextProps => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a AppProvider");
  }
  return context;
};
