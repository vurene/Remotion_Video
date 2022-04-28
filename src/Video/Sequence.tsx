
import { Audio, Sequence, Series, staticFile } from "remotion";
import { AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate,  } from 'remotion'; 

//Imports for Sequences
import {Intro} from './Intro';




// const audio = staticFile("/audio.wav");

export const Main = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={70}>
          <Intro />
        </Series.Sequence>
      
      </Series>
    
    </>
  );
};
