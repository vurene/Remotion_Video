import styled from 'styled-components';
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, 
	useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import CodePic from '../../assets/interpolate2.png';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';

//_______Styled-Components____________

const Container = styled(ABSO_FILL)`

`;


export const AnimaPropsR2: React.FC = () => {

// import frame from useCurrentFrame() hook to be used in the following interpolate function
const frame = useCurrentFrame();		

// interpolate function for animating Opacity of text
const Opac = interpolate(frame, [170,200],[0,1],
	{extrapolateLeft: 'clamp', extrapolateRight:'clamp'}
	);


	return (

		<Container>
			<Img src={CodePic} 
			style={{
				opacity: Opac ,
				transform:`translateY(250px)translateX(130px)` 
			}}
			/>
		</Container>
	);
};
