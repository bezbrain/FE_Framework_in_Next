// Tis file shall contain types that'll be used
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IMedia {
  xlargeScreen: any;
  largeScreen: any;
  midScreen: any;
  pad: any;
  pc: any;
  smallpc: any;
  tablet: any;
  miniTablet: any;
  largePhone: any;
  phone: any;
  smallPhone: any;
}

export interface UserProps {
  isLoading: boolean;
  users: object[];
  error: string;
}

// Context Providers types
export interface NavContextProps {
  navState: string;
  setNavState: Dispatch<SetStateAction<string>>;
}

export interface HomeContextProps {
  homeState: number;
  setHomeState: Dispatch<SetStateAction<number>>;
}

// App Providers types
export interface NavProviderProps {
  children: ReactNode;
}

export interface HomeProviderProps {
  children: ReactNode;
}
