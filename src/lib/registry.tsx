// This file is to make sure classNames from the Client side match with the ones from the Server side
"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

// import React, { useState, useEffect } from "react";
// import { useServerInsertedHTML } from "next/navigation";
// import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// const StyledComponentsRegistry = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   // Only create stylesheet once with lazy initial state
//   // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
//   const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

//   useServerInsertedHTML(() => {
//     const styles = styledComponentsStyleSheet.getStyleElement();
//     styledComponentsStyleSheet.instance.clearTag();
//     return <>{styles}</>;
//   });

//   useEffect(() => {
//     styledComponentsStyleSheet.seal();
//   }, []); // Ensure this effect runs only once on the client-side

//   if (typeof window !== "undefined") return <>{children}</>;

//   return (
//     <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
//       {children}
//     </StyleSheetManager>
//   );
// };

// export default StyledComponentsRegistry;
