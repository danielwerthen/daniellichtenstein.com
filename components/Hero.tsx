import React from "react";

export default function Hero(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return <div $margin="25vh 0" {...props} />;
}

Hero.Copy = function HeroCopy(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) {
  return (
    <p
      $marginLeft="auto"
      $marginRight="auto"
      $maxWidth="25em"
      $mobileMaxWidth="80vw"
      $fontSize="24px"
      {...props}
    />
  );
};
