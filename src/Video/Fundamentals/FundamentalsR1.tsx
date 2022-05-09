import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import VidPic from '../../assets/MyVideo.png'
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';


const Container = styled(ABSO_FILL)`

`;





export const FundamentalsR1: React.FC = () => {

const config = useVideoConfig();
const frame = useCurrentFrame();
 
const Scale = spring({
  frame: frame - 120,
  from: 0,
  to: 1.3,
  fps: config.fps, 
  config: {
    stiffness: 100,
  },
});

	return (
		<Container>
		<Img src={VidPic}
		style={{
			transform: `translate(300px,0px)scale(${Scale})`
		}}/>
	
		</Container>




	);
};
