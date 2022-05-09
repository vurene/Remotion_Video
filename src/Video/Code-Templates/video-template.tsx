import { useVideoConfig } from "remotion";
 
export const MyVideo = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();
 
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
       }}
      >
      This {width}px x {height}px video is {durationInFrames / fps} seconds long.
    </div>
  );
};
