
import { AbsoluteFill, Img, Easing, useCurrentFrame, 
  useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
  
export const Ellipse: React.FC<{
  
  rotation: number;
  frame: number;

}> = ({ frame, rotation }) => {

//import default props from VideoConfig()  
  const { height, width, fps } = useVideoConfig();

  const rx = 180 / 2 ;
  const ry = 400 / 2 ;


// Variable for the Length with PI for making a circle. IS used in Ellipse SVG to make a 
  const arcLength = Math.PI * 2 * Math.sqrt((rx * rx + ry * ry) / 2);



  // Spring function for Timing of StrokeDashOffset
  const progress = spring({
    frame,
    fps,
    config: {
    damping: 100,
    mass: 10,
    },
  });

// Opacity for SVG 
  const Opacity = interpolate(progress, [0, 0.2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
// Interpolate Function for strokewidth of SVG-Animation
  const strokeWidth = interpolate(progress, [0, 1], [200, 70],{
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (

//_____________SVG Ellipse________________
<g
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity: Opacity,
        transformOrigin: "50% 50%",
      }}
    >
{/*_____________Ellipse Component f  */}
     <ellipse
        cx={width / 2}
        cy={height / 2}
        x={width / 2}
        y={height / 2}
        rx={rx}
        ry={ry}
        strokeLinecap="round"
        strokeDasharray={`${arcLength}`}
        strokeDashoffset={(1 - progress) * arcLength}
        stroke="url(#lg)"
        strokeWidth={strokeWidth/3}
        fill="none"
      
      />
</g>
  );
};
