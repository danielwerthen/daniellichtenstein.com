import React from "react";
import Head from "next/head";
import Link from "next/link";
import colors from "../colors";
import Hero from "../components/Hero";

const IndexPage = () => (
  <>
    <Head>
      <title>Daniel Lichtenstein</title>
    </Head>
    <div $display="flex" $mobileFlexDirection="column">
      <div $flex="1.5">
        <h1
          $textAlign="center"
          $fontSize="max(min(6vw, 52px), 28px)"
          $marginBottom="0"
        >
          Daniel Lichtenstein
        </h1>
        <h2
          $textAlign="center"
          $fontSize="max(min(2vw, 18px), 14px)"
          $fontFamily='"Roboto Mono", monospace'
          $marginTop=".2em"
        >
          {"<>"}Software architect and developer{"</>"}
        </h2>
      </div>
      <div
        $flex="1"
        $display="flex"
        $justifyContent="space-evenly"
        $alignItems="center"
      >
        <Link href="/blog">
          <a
            href="/blog"
            $color={colors[4]}
            $textDecoration="underline"
            $fontSize="24px"
          >
            Blog
          </a>
        </Link>
        <a
          href="https://github.com/danielwerthen"
          $color={colors[4]}
          $textDecoration="underline"
          $fontSize="24px"
        >
          Github
        </a>
      </div>
    </div>
    <Hero>
      <Hero.Copy $fontWeight="bold" $textAlign="center" $marginBottom=".5em">
        Would you like to create something?
      </Hero.Copy>
      <Hero.Copy>
        With 10 years of experience as software architect and developer, I help
        people and companies build software that make a difference. To me, a{" "}
        <b>beautiful user experience</b> is the goal, and that goal means a
        whole lot more than a set of tastefully arranged pixels on a screen.
      </Hero.Copy>
    </Hero>
  </>
);

export default IndexPage;
