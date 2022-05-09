import { useCurrentFrame } from "remotion";

export const MyVideo = () => {
  const frame = useCurrentFrame();
 
  const opacity = frame >= 20 ? 1 : frame / 20;
 
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
        opacity: opacity,
      }}
    >
      Hello World!
    </div>
  );
};