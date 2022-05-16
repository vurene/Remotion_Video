import { AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';

import { Ellipse } from '../Intro/Ellipse';



//_______Styled-Components____________

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ZIndex1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%; 
  height: 100%;
`;

const Text = styled.span`
  font-family: Cubano;
  font-size: 70px;
  font-weight: 700; 
  line-height: 1;
  white-space: pre;
`;

// background-color
const coloe = "#16181D" 

export const Intro: React.FC<{  }> = ({  }) => {

// import frame from useCurrentFrame()
const frame = useCurrentFrame();

// import default props from VideoConfig 
const { fps, width, height } = useVideoConfig();

// Spring-Function for Timing interpolate "Scaler"
  const scaleProgress = spring({
    fps,
    frame: frame,
    config: {
      mass: 10,
      damping: 200,
    },
  });


// interpolate Funnction for scaling AbsoluteFill
  const Scaler = interpolate(scaleProgress, [0, 1], [2, 1.1]);


//spring functions init
  const spring1 = spring({
    fps,
    frame: frame,
    config: {
      stiffness: 100,
      damping: 200,
    },
  });

  const spring2 = spring({
    fps,
    frame: frame - 10,
    config: {
      stiffness: 100,
      damping: 200,
    },
  });


  const sourceCode = spring({
    fps,
    frame: frame - 60,
    config: {
      stiffness: 100,
      damping: 200,
    },
  });


  
  const OFFSET = interpolate(spring1, [0, 1], [1080, 0]);
  const OFFSET2 = interpolate(spring2, [0, 1], [1080, 0]);


  //  initializing the Component for the Animation & inserting the 3 Ellipses, 
  //  each having a different angle of rotation and a different "frame" value to start the animation
  const arcs = (
    <>

      <Ellipse rotation={0 + 30} frame={frame} />
      <Ellipse rotation={120 + 30} frame={frame - 45} />
      <Ellipse rotation={240 + 30} frame={frame - 60} />
    </>
  );

// initializing opacity with value "1" = always visible.
  const opacity = 1;
 

  return (
    <Container
      style={{
        opacity: opacity,
        background: coloe,
        color: "white",
      }}
    >
      <AbsoluteFill
        style={{
          transform: `scale(${Scaler})`,
        }}
      >
        <svg
          style={{
            width,
            height,
            position: "absolute",
          }}
        >


          <defs>
            <linearGradient id="lg">
              <stop stopColor="#326cb8" offset="0" />
              <stop stopColor="#2fa8b1" offset="1" />
            </linearGradient>


            <mask id="mask">{arcs}</mask>
          </defs>
          {arcs}
        </svg>
        <ZIndex1 style={{ color: "white", fontFamily: "Helvetica" }}>
          <div style={{ transform: `translateY(${OFFSET}px)` }}>
            <Text>This</Text>
            <Text> </Text>
            <Text>video </Text>
            <Text>was</Text>
          </div>
          <div style={{ transform: `translateY(${OFFSET2}px)` }}>
            <Text>made </Text>
         
              <Text>with</Text>
          
            <Text> </Text>
          
              <Text>React</Text>
           
          </div>
        </ZIndex1>
       
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          position: "absolute",
          fontFamily: "Helvetica",
          color: "white",
          fontSize: 100,
        }}
      >
        <div
          style={{
            bottom: 200,
            position: "absolute",
            textAlign: "center",
            width: "100%",
            opacity: sourceCode,
          }}
        >
       
        </div>
      </AbsoluteFill>
    </Container>
  );
};
