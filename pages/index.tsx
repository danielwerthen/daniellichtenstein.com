import React from "react";
import Head from "next/head";
import Background from "../components/Background";

const IndexPage = () => (
  <>
    <Head>
      <title>Daniel Lichtenstein</title>
    </Head>
    <Background>
      <h1 $textAlign="center" $fontSize="calc(8vw)">
        Daniel Lichtenstein
      </h1>
      <p>This is the intro</p>
    </Background>
  </>
);

export default IndexPage;
