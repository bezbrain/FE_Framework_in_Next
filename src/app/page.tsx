// This file shall contain the root component. Just like App.tsx in normal React. But just that it contains only components that will be seen on the home/landing page.

"use client"; //This statement is just to make sure createGlobalStyle works from the client side

import { styled } from "styled-components";
import { screen } from "@/stylesrafce";
import { useHomeContext } from "@/context/homeContextrafce";
import { useEffect, useState } from "react";
import { fetchUsers } from "@/apisrafce";

const Home = () => {
  const { homeState, setHomeState } = useHomeContext();
  const [getData, setGetData] = useState([]);

  const users = async () => {
    try {
      const { data }: any = await fetchUsers();
      setGetData(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    users();
  }, []);

  return (
    <>
      <HomeWrapper>
        <h1>This is the Home Page {homeState}</h1>
        <button onClick={() => setHomeState(homeState + 1)}>Increase</button>
        {getData &&
          getData.map((each) => {
            const { id, name } = each;
            return <p key={id}>{name}</p>;
          })}
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
