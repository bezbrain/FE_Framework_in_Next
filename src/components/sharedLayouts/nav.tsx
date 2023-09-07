// This file shall contain anything related to nav section

import React from "react";
import { useNavContext } from "@/context/navContextrafce";
import Link from "next/link";
import styled from "styled-components";

const Nav = () => {
  const { navState, setNavState } = useNavContext();

  return (
    <NavWrapper>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">{navState}</Link>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  font-size: 20px;

  a {
    margin-inline: 20px;
  }
`;
