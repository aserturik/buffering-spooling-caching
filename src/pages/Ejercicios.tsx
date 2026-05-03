import { Slide, Stack } from "@revealjs/react";

export default function Ejercicios() {
  return (
    <>
      <Stack>
        <Slide
          data-background-iframe="./doc_ejercicios.html"
          data-background-interactive
          data-transition="fade"
        />
      </Stack>
    </>
  );
}
