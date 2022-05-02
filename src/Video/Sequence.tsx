
import { Audio, Sequence, Series, staticFile } from "remotion";
import { AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate,  } from 'remotion'; 

//Imports for Sequences
import {Intro} from './Intro/Intro';
import { RemotionLogo } from "./components/RemotionBlurredLogo";
import { Scene1 } from "./Scenes/Scene";
import { Scene2 } from "./Scenes/Scene2";
import { Scene3 } from "./Scenes/Scene3";



// const audio = staticFile("/audio.wav");

export const Main = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={120}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <RemotionLogo/>
        </Series.Sequence>
        <Series.Sequence durationInFrames={150}>
        <Scene1/>
        </Series.Sequence>
        <Series.Sequence durationInFrames={330}>
          <Scene2/>
        </Series.Sequence>
        <Series.Sequence durationInFrames={330}>
          <Scene3/>
        </Series.Sequence>
      </Series>
    
    </>
  );
};
