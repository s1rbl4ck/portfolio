/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const LightTheme = ({ children, bdOn }) => {
  
  React.useEffect(() => {
      if (bdOn) {
      document.querySelector("body").classList.add("bd-dark");
      return () => {
        document.querySelector("body").classList.remove("bd-dark");
      };
    }
  });
  
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="/css/light.css" /> */}
        {/* <link rel="stylesheet" href="/css/styles.css" /> */}
      </Head>
      {children}
    </>
  );
};

export default LightTheme;
