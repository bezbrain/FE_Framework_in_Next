// This file shall contain anything related to nav section
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrapper>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
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
