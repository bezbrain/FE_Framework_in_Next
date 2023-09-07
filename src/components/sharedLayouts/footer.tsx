// This file shall contain anything related to the footer

// "use client";

import React from "react";
import styled from "styled-components";
import { basics } from "@/stylesrafce";

const { colors } = basics;

const Footer = () => {
  return <FooterWrapper>The footer could be here</FooterWrapper>;
};

export default Footer;

const FooterWrapper = styled.nav`
  font-size: 20px;
  color: ${colors.bloodRed};
  text-transform: uppercase;
`;
