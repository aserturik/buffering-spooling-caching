import { Slide, Stack } from "@revealjs/react";
import IntroBuffering from "../components/slides/buffering/IntroBuffering";
import WhyBuffering from "../components/slides/buffering/WhyBuffering";
import BufferingTypes from "../components/slides/buffering/BufferingTypes";
import CopySemantics from "../components/slides/buffering/CopySemantics";
import AdvancedBuffering from "../components/slides/buffering/AdvancedBuffering";

export default function Buffering() {
  return (
    <>
      {/* ── BUFFERING ── */}
      <Stack>
        <IntroBuffering />
        <WhyBuffering />
        <BufferingTypes />
        <CopySemantics />
        <AdvancedBuffering />
      </Stack>
    </>
  );
}
