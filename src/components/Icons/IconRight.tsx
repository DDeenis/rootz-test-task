import React from "react";
import { CustomArrowProps } from "react-slick";

export const IconRight: React.FC<
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
        d="M23.3628 20.4296L3.761 0.649525C2.90089 -0.216508 1.50737 -0.216508 0.645085 0.649525C-0.215028 1.51556 -0.215028 2.92222 0.645085 3.78826L18.6921 21.9989L0.647257 40.2095C-0.212856 41.0756 -0.212856 42.4823 0.647257 43.3505C1.50737 44.2165 2.90306 44.2165 3.76318 43.3505L23.365 23.5704C24.212 22.7133 24.212 21.2845 23.3628 20.4296Z"
        fill="#1E1A20"
      />
    </svg>
  );
};
