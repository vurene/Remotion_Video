
import { Audio, Sequence, Series, staticFile } from "remotion";
import { AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate,  } from 'remotion'; 

//Imports for Sequences
import {Intro} from './Scenes/Intro';
import { RemotionLogoIntro } from "./Scenes/RemotionLogoIntro";
import { Scene1 } from "./Scenes/Scene1";
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
import { Scene0 } from "./Scenes/Scene0";
import { Scene35 } from "./Scenes/Scene35";
import { Showcase2 } from "./Scenes/Showcase2";
import { AudioFile } from "./helpers/AudioFile";
import { SceneOutro } from "./Scenes/SceneOutro";
import { RemotionLogoOutro } from "./Scenes/RemotionLogoOutro";




export const Main = () => {


  return (



    <>
<AudioFile/>

      <Series>
  
{/*               Logo                        */}

<Series.Sequence durationInFrames={120}>
          <Intro/>
        </Series.Sequence>

{/*               Logo                        */}

        <Series.Sequence durationInFrames={120}>
          <RemotionLogoIntro/>
        </Series.Sequence>

{/*           Assets in Remotion                   */}

        <Series.Sequence durationInFrames={330}>
          <Showcase/>
        </Series.Sequence>
  
{/*         Introduction          */}

        <Series.Sequence durationInFrames={240}>
        <Scene0/>
        </Series.Sequence>

{/*         Introduction          */}

        <Series.Sequence durationInFrames={330}>
        <Scene1/>
        </Series.Sequence>

{/*      Fundamentals - Video Properties           */}

        <Series.Sequence durationInFrames={360}>
          <Scene2/>
        </Series.Sequence>

 {/*      Fundamentals - Compositions              */}

        <Series.Sequence durationInFrames={660}>
          <Scene3/>
        </Series.Sequence>

  {/*      Fundamentals - Compositions              */}

        <Series.Sequence durationInFrames={480}>
          <Scene35/>
        </Series.Sequence> 

{/*      Animating Properties - Introduction          */}

        <Series.Sequence durationInFrames={360 }>
          <Scene4/>
        </Series.Sequence>

{/*      Animating Properties - interpolate() explanation            */}

        <Series.Sequence durationInFrames={660}>
          <Scene5/>
        </Series.Sequence>

 {/*     Animating Properties - spring() explanation            */}

        <Series.Sequence durationInFrames={1020}>
          <Scene6/>
        </Series.Sequence>

 {/*     Interpolate & Spring showcase             */}

        <Series.Sequence durationInFrames={240}> 
          <Scene7/>
        </Series.Sequence>

 {/*    Translate() Files Explained + Showcase         */}

        <Series.Sequence durationInFrames={510}>
          <Scene8/>
        </Series.Sequence>

{/*     SVG Files Explained + Showcase         */}

        <Series.Sequence durationInFrames={450}>
          <Scene9/>
        </Series.Sequence>

{/*    How to SVG explanation     */}       

        <Series.Sequence durationInFrames={510}>
          <Scene10/>
        </Series.Sequence>

{/*   Audio Explained         */}

        <Series.Sequence durationInFrames={390}>
          <Scene11/>
        </Series.Sequence>
  
    
{/*      Outro    / Credits        */}

<Series.Sequence durationInFrames={330}>
          <SceneOutro/>
        </Series.Sequence>

{/*      Remotion Logo Outro       */}

        <Series.Sequence durationInFrames={180}>
          <RemotionLogoOutro/>
        </Series.Sequence>

      </Series>

    </>
  );
};
