import type { ReactNode } from "react";
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 







const width = 1920;
const height = 1080 ;
const ratio= 1.5; 





export const CANVAS = {
  width,
  height,
  ratio, 
  center: { x: width / 2, y: height / 2 },
};

interface CanvasProps { // interface for Canvas-- typescript nur zum compiling
  children: ReactNode | ReactNode[];
  color?: string;
}

export const Canvas = ({ children, color }: CanvasProps) => {
  return (
    <svg width={CANVAS.width} height={CANVAS.height}>
      <linearGradient
        id="s1"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#47A5EB" />
        <stop offset="100%" stopColor="#89DEBB" />
      </linearGradient>
      {color ?? (
        <rect
          x={0}
          y={0}
          width={width}
          stroke="none"
          height={height}
          fill={color}
        />
      )}
      {children}
    </svg>
  );
};
