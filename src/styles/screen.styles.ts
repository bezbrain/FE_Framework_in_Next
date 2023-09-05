// This file shall contain development of media query for different screen sizes

import { css } from "styled-components";
import { IMedia } from "../types";
const sizes = {
  xlargeScreen: 1440,
  largeScreen: 1300,
  pad: 1024,
  mediumpc: 912,
  ipadAir: 820,
  tablet: 768,
  surfaceDuo: 540,
  iPhone: 420,
  smallPhone: 330,
  galaxyFold: 280,
};

// iterate through the sizes and create a media template
export const screen = Object.keys(sizes).reduce((accumulator: any, label) => {
  /** use em in breakpoints to work properly cross-browser and support users
   * changing their browsers font-size: https://zellwk.com/blog/media-query-units/
   */
  const emSize = sizes[label as keyof typeof sizes] / 16;
  accumulator[label] = (...args: Parameters<typeof css>) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {}) as IMedia;

export default screen;
