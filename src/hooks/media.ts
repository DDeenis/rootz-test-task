import { useEffect, useState } from "react";

type CSSUnit = "px" | "em" | "rem";

export const useMediaQuery = (maxWidth: number, unit: CSSUnit = "px") => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const matchQuery = () => {
      const result = window.matchMedia(`(max-width: ${maxWidth}${unit})`);
      setIsMatch(result.matches);
    };

    window.addEventListener("resize", matchQuery);

    return () => window.removeEventListener("resize", matchQuery);
  }, [maxWidth, unit]);

  return isMatch;
};
