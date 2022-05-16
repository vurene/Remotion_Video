import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import VidPic from '../../assets/myVideo.png'
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';

//_______Styled-Components____________

const Container = styled(ABSO_FILL)`

`;


export const FundamentalsR1: React.FC = () => {

// import default prop  from VideoConfig Hook
const config = useVideoConfig(); 

// import default prop from useCurrentFrame
const frame = useCurrentFrame(); 
 

// Spring function for scaling picture
const Scale = spring({
  frame: frame - 120,
  from: 0,									// Start of value given
  to: 0.8,									//  End of Value given
  fps: config.fps, 					
  config: {									// config modulates the animation
    stiffness: 100,
  },
});


	return (
		<Container>
{/* Image Component with Scale Animation */}
		<Img src={VidPic}
		style={{
			transform: `translate(370px,0px)scale(${Scale})`
		}}/>
	
		</Container>




	);
};
