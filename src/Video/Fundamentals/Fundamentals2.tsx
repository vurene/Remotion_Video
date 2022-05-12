import styled from 'styled-components';
// import {Triangle} from './Logo/Triangle';
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import { TITLE_B } from '../Styled-Components/TitleBlue';
import { TEXT } from '../Styled-Components/Text';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TEXT2 } from '../Styled-Components/Text2';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';



//_________Styled Components_______

const Container = styled(ABSO_FILL)`

	
`;

const Title = styled(TITLE_B)`
transform: translateY(-50px);
`;

const Text = styled(TEXT)`
	transform: translateY(30px);

`;

const Text2 = styled(TEXT2)`
	margin: 25px;
	margin-top:20px ;

`;

const TextBlau = styled(TEXT_B)`

`;

const TextWhite = styled.div`
font-weight: 7800;
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
margin-bottom: 5px;
color: white;
padding: 0px 5px 0px 5px ;
`;


export const Fundamentals2: React.FC = () => {

const frame = useCurrentFrame(); // import frame from useCurrentFrame() hook to be used in the following interpolate function

// interpolate function for animating Opacity of Picture	
const Opac = interpolate(frame, [190,210],[1,0],
		 {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})



	return (
		<Container>
	
			<Title>Fundamentals</Title>
			<Text style={{
				opacity: Opac, 
				transform: `translate(0px,30px)`,
		
			}}>
				A video has following properties:  <br/> 
			<Text2>
				<div style={{ display:'flex' }}>
			<TextBlau >height </TextBlau>
			 <TextWhite> & </TextWhite>
			<TextBlau> width </TextBlau>
			<TextWhite>	in pixels. </TextWhite>
				</div>
			<br/>
			
			<TextBlau>durationInFrames</TextBlau>
			<br/>
	
			
			
		<TextBlau>	fps</TextBlau> 
		Value of frames per second
			<br/> 
			<br/>
			</Text2>
			<br/>
			 
			</Text>
			
	
		</Container>
	);
};
