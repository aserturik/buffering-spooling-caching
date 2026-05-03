import { Slide, Stack } from "@revealjs/react";
import IntroCaching from "../components/slides/caching/IntroCaching";
import CachePrinciples from "../components/slides/caching/CachePrinciples";
import CPUHierarchy from "../components/slides/caching/CPUHierarchy";
import LinuxPageCache from "../components/slides/caching/LinuxPageCache";
import ReplacementAlgos from "../components/slides/caching/ReplacementAlgos";
import NVMeBottleneck from "../components/slides/caching/NVMeBottleneck";
import IOSchedulers from "../components/slides/caching/IOSchedulers";

export default function Caching() {
  return (
    <>
      {/* ── CACHING ── */}
      <Stack>
        <IntroCaching />
        <CachePrinciples />
        <CPUHierarchy />
        <LinuxPageCache />
        <ReplacementAlgos />
        <NVMeBottleneck />
        <IOSchedulers />

        {/* Referencia técnica detallada */}
        <Slide
          data-background-iframe="./doc_caching.html"
          data-background-interactive
          data-transition="fade"
        />
      </Stack>
    </>
  );
}
