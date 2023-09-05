// This file shall contain the root component. Just like App.tsx in normal React. But just that it contains only components that will be seen on the home/landing page.

"use client"; //This statement is just to make sure createGlobalStyle works from the client side

import { styled } from "styled-components";
import { screen } from "@/stylesrafce";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <h1>This is the Home Page</h1>
      </HomeWrapper>
    </>
  );
};

export default Home;

const HomeWrapper = styled.main`
  ${screen.tablet`
  h1 {
    color: red;
  }
  `}
`;
