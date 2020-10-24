import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import colors from "../colors";

export default function Background(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  );
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    function update() {
      setSize({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      });
    }
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, []);
  if (!size) {
    return null;
  }
  const { width, height } = size;
  function getPath(offset: number, leftCorner: number, rightCorner: number) {
    return [
      `M ${offset} ${height}`,
      `L ${offset} ${leftCorner}`,
      `Q ${offset} ${offset}, ${leftCorner} ${offset}`,
      `L ${width - rightCorner} ${offset}`,
      `Q ${width - offset} ${offset}, ${width - offset} ${rightCorner}`,
      `L ${width - offset} ${height}`,
    ].join(" ");
  }
  return (
    <>
      <svg
        width={width}
        height={height}
        $position="absolute"
        $top="0"
        $left="0"
        $right="0"
        $bottom="0"
        $zIndex="-1"
      >
        <rect $fill={colors[0]} width={width} height={height} />

        <path
          d={getPath(1, 15, 45)}
          $stroke={colors[2]}
          $strokeWidth="1px"
          $fillOpacity={0}
        />
      </svg>
      <div $color={colors[4]} $margin="12px" {...props} />
    </>
  );
}
