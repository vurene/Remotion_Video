import { spring, useCurrentFrame, useVideoConfig } from "remotion";
 
export const MyVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
 
  const scale = spring({
    fps,
    from: 0,
    to: 1,
    frame,
  });
 
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
      }}
    >
      <div style={{ transform: `scale(${scale})` }}>Hello World!</div>
    </div>
  );
};