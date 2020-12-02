import React from "react";

export default function Hero(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return <div $margin="20vh 0" {...props} />;
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
      $maxWidth="50vw"
      $mobileMaxWidth="80vw"
      $fontSize="24px"
      {...props}
    />
  );
};
