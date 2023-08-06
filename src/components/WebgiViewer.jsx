import {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function WebgiViewer() {
  const canvasRef = useRef(null);
  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef}></canvas>
    </div>
  );
}

export default WebgiViewer;
