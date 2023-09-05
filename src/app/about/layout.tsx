import type { Metadata } from "next";
import About from "./page";

export const metadata: Metadata = {
  title: "About",
  description: "Generated by create next app",
};

const AboutLayout = () => {
  return (
    <div>
      <h3>This is the about page layout</h3>
      <About />
    </div>
  );
};

export default AboutLayout;