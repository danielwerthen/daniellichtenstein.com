import React from "react";

export default function Hero(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return <div {...props} />;
}

Hero.Copy = function HeroCopy(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) {
  return <p $margin="auto" $maxWidth="50vw" {...props} />;
};
