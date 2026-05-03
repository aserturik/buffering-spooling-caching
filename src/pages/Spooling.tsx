import { Slide, Stack } from "@revealjs/react";
import IntroSpooling from "../components/slides/spooling/IntroSpooling";
import BufferingVsSpooling from "../components/slides/spooling/BufferingVsSpooling";
import PrinterCase from "../components/slides/spooling/PrinterCase";
import SpoolerSecurity from "../components/slides/spooling/SpoolerSecurity";

export default function Spooling() {
  return (
    <>
      {/* ── SPOOLING ── */}
      <Stack>
        <IntroSpooling />
        <BufferingVsSpooling />
        <PrinterCase />
        <SpoolerSecurity />

        {/* Referencia técnica detallada */}
        <Slide
          data-background-iframe="./doc_spooling.html"
          data-background-interactive
          data-transition="fade"
        />
      </Stack>
    </>
  );
}
