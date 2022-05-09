import { Audio } from "remotion";
import audio from "./audio.mp3";
 
export const MyComposition: React.FC = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Audio src={audio} />
    </div>
  );
};