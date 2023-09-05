// Tis file shall contain types that'll be used

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
