import React from "react";
import { Slide } from "@revealjs/react";

const ComparativaSlide: React.FC = () => {
  return (
    <Slide
      data-background-iframe="./comparativa.html"
      data-background-interactive
      data-transition="fade"
    />
  );
};

export default ComparativaSlide;
