import styled from 'styled-components';
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, 
	useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import Pic from'../../assets/translate()Interpolate.png';
import { TEXT } from '../Styled-Components/Text';
import { TITLE_W } from '../Styled-Components/TitleWhite';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';





//_______Styled-Components____________

const Container = styled(ABSO_FILL)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	
`;

const Text = styled(TEXT)`
	margin-left: 30px;
	transform: translateY(10px)translateX(0px);
		`

export const TranslateR: React.FC = () => {

// import frame from useCurrentFrame() hook to be used in the following interpolate function	
const frame = useCurrentFrame();

// interpolate function for CSS-translate function
const MoveLeft = interpolate(frame, [150,200],[700,0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
		);



	return (
		<Container>
			
			<Text>	
							In order to bring movement into our assets, <br/><br/>
							we can use CSS in combination with <br/>
			 				animating properties like<br/> <br/>
			 				interpolate() and spring()
			 </Text>
		
	<Img src={Pic} style={{transform: `translate(${MoveLeft}px, 10px)`}}/>	
	
	</Container>
	);
};
