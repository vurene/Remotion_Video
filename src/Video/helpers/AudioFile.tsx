import { Audio } from "remotion";
import music from "../../assets/audioFile.wav";

export const AudioFile: React.FC = () => {
  return (
      <Audio src={music} />

  );
};