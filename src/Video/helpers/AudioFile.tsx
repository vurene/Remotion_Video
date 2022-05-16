import { Audio } from "remotion";
import music from "../../assets/audioFile.wav";

export const AudioFile: React.FC = () => {
  
  return (


  // initializing Audio component & selecting source
      <Audio src={music} />
  );
};