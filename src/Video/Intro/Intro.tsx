import { AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { FakeDevTools } from '../FakeDevTools';
import { BG_COLOR } from '../helpers/color';
import { Arc } from './Arc';
import {FC} from 'React';



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



export const Intro: React.FC<{  }> = ({  }) => {
 const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const scaleProgress = spring({
    fps,
    frame: frame,
    config: {
      mass: 10,
      damping: 200,
    },
  });
  // scale variable for all Elements
  const scale = interpolate(scaleProgress, [0, 1], [2, 1.1]);
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


  
  const offset1 = interpolate(spring1, [0, 1], [1080, 0]);
  const offset2 = interpolate(spring2, [0, 1], [1080, 0]);

  const arcs = (
    <>
      <Arc rotation={0 + 30} frame={frame} />
      <Arc rotation={120 + 30} frame={frame - 45} />
      <Arc rotation={240 + 30} frame={frame - 60} />
    </>
  );

  const opacity = 1;
  const firstEnabled = Boolean(
    interpolate(frame, [36, 37, 49, 50], [0, 1, 1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const secondEnabled = Boolean(
    interpolate(frame, [52, 53], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  return (
    <Container
      style={{
        opacity,
        background: BG_COLOR,
        color: "white",
      }}
    >
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
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
          <div style={{ transform: `translateY(${offset1}px)` }}>
            <Text>This</Text>
            <Text> </Text>
            <Text>video </Text>
            <Text>is</Text>
          </div>
          <div style={{ transform: `translateY(${offset2}px)` }}>
            <Text>made </Text>
            <FakeDevTools
              width={100.25}
              height={35.1}
              clName="sc-dOhasT"
              enabled={false}
            >
              <Text>with</Text>
            </FakeDevTools>
            <Text> </Text>
            <FakeDevTools
              width={125.44}
              height={35.1}
              clName="sc-fhjks"
              enabled={false}
            >
              <Text>React</Text>
            </FakeDevTools>
          </div>
        </ZIndex1>
        {/* <MouseCursor /> */}
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
          {/* Source code in the description */}
        </div>
      </AbsoluteFill>
    </Container>
  );
};
