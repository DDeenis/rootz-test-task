import React from "react";
import { CustomArrowProps } from "react-slick";

export const IconLeft: React.FC<
  Partial<HTMLOrSVGElement> & CustomArrowProps
> = ({ currentSlide, slideCount, ...props }) => {
  return (
    <svg
      {...props}
      width="24"
      height="44"
      viewBox="0 0 24 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.637209 20.4296L20.239 0.649525C21.0991 -0.216508 22.4926 -0.216508 23.3549 0.649525C24.215 1.51556 24.215 2.92222 23.3549 3.78826L5.30792 21.9989L23.3527 40.2095C24.2129 41.0756 24.2129 42.4823 23.3527 43.3505C22.4926 44.2165 21.0969 44.2165 20.2368 43.3505L0.635036 23.5704C-0.212046 22.7133 -0.212044 21.2845 0.637209 20.4296Z"
        fill="#1E1A20"
      />
    </svg>
  );
};
