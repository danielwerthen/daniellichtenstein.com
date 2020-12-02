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
            Writings
          </a>
        </Link>
        <a
          href="https://github.com/danielwerthen?tab=repositories"
          $color={colors[4]}
          $textDecoration="underline"
          $fontSize="24px"
        >
          Open Source
        </a>
      </div>
    </div>
    <Hero>
      <Hero.Copy $fontWeight="bold" $textAlign="center" $marginBottom=".66em">
        Let's build something together!
      </Hero.Copy>
      <Hero.Copy>
        With 10 years of experience as software architect and developer, I help
        people and companies build software that make a difference. To me,
        building software has always been about turning that which is{" "}
        <span $whiteSpace="nowrap">complicated—simple!</span>
      </Hero.Copy>
    </Hero>
  </>
);

export default IndexPage;
