
import { Audio, Sequence, Series, staticFile } from "remotion";
import { AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate,  } from 'remotion'; 

//Imports for Sequences
import {Intro} from './Intro/Intro';
import { RemotionLogo } from "./Intro/RemotionLogo";
import { Scene1 } from "./Scenes/Scene";
import { Scene2 } from "./Scenes/Scene2";
import { Scene3 } from "./Scenes/Scene3";
import { Scene4 } from "./Scenes/Scene4";
import { Scene5 } from "./Scenes/Scene5";
import { Scene6 } from "./Scenes/Scene6";
import { Scene7 } from "./Scenes/Scene7";
import { Scene8 } from "./Scenes/Scene8";
import { Scene9 } from "./Scenes/Scene9";
import { Scene10 } from "./Scenes/Scene10";
import { Scene11 } from "./Scenes/Scene11";
import { Showcase } from "./Scenes/Showcase";



// const audio = staticFile("/audio.wav");

export const Main = () => {
  return (
    <>
      <Series>
  

{/*            Logo                        */}

        <Series.Sequence durationInFrames={120}>
          <RemotionLogo/>
        </Series.Sequence>

{/*           Assets in Remotion                     */}

        <Series.Sequence durationInFrames={210}>
          <Showcase/>
        </Series.Sequence>
  
{/*         Introduction          */}

        <Series.Sequence durationInFrames={150}>
        <Scene1/>
        </Series.Sequence>

{/*      Fundamentals - Video Properties           */}

        <Series.Sequence durationInFrames={330}>
          <Scene2/>
        </Series.Sequence>

 {/*      Fundamentals - Compositions         */}

        <Series.Sequence durationInFrames={330}>
          <Scene3/>
        </Series.Sequence>

{/*      Animating Properties - Introduction          */}

        <Series.Sequence durationInFrames={310}>
          <Scene4/>
        </Series.Sequence>

{/*      Animating Properties - interpolate() explanation            */}

        <Series.Sequence durationInFrames={510}>
          <Scene5/>
        </Series.Sequence>

 {/*     Animating Properties - spring() explanation            */}

        <Series.Sequence durationInFrames={1020}>
          <Scene6/>
        </Series.Sequence>

 {/*     Interpolate & Spring showcase             */}

        <Series.Sequence durationInFrames={390}> 
          <Scene7/>
        </Series.Sequence>

 {/*    Translate() Files Explained + Showcase         */}

        <Series.Sequence durationInFrames={390}>
          <Scene8/>
        </Series.Sequence>

{/*    Translate() Files Explained + Showcase         */}

        <Series.Sequence durationInFrames={330}>
          <Scene9/>
        </Series.Sequence>
        <Series.Sequence durationInFrames={330}>
          <Scene10/>
        </Series.Sequence>
        <Series.Sequence durationInFrames={330}>
          <Scene11/>
        </Series.Sequence>
      </Series>
    
    </>
  );
};
