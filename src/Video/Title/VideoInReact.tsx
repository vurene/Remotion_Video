
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";

// import { Code } from "./components/Code";
import { RemotionLogo } from "../Intro/RemotionLogo";
import { BG_COLOR } from "../helpers/color";

export const VideoInReact = () => {
  const frame = useCurrentFrame();
  const source = `const MyVideo = () => {
  const frame = useCurrentFrame(); // ${frame}

  // TODO: Draw something
}`;
  return (
    <AbsoluteFill>

      <Sequence from={90}>
        <RemotionLogo />
      </Sequence>
    </AbsoluteFill>
  );
};
