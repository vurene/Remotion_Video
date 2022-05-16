import styled from 'styled-components';
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, 
	useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import CompPic from '../../assets/compoTemplate.png'
import { TEXT } from '../Styled-Components/Text';
import { TITLE_B } from '../Styled-Components/TitleBlue';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TEXT2 } from '../Styled-Components/Text2';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';


//_______Styled-Components____________

const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`

`;

const Text = styled(TEXT)`

	margin: 40px;
	margin-left: 80px;
	color: whitesmoke;
	transform: translateY(-10px);
`;

const Text2 = styled(TEXT2)`	
	
`;

const TextBlue = styled(TEXT_B)`
	
`;


export const Fundamentals3: React.FC = () => {

// import frame from useCurrentFrame() hook to be used in the following interpolate function

	const frame = useCurrentFrame(); 

// interpolate function for animating Opacity of Picture	

	const Opac = interpolate(frame, [450,470],[0,1],
		{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})




return (
<Container>
				<br />
				<br />
			<Title style = {{transform:`translate(0px,380px)`}}> Fundamentals </Title>
				<Text  style = {{transform:`translate(0px,370px)`}}> 

				A Video is made up of one or more 
				compositions.
				<br/>
				<br/>
					<TextBlue>Compositions </TextBlue>
				are components entailing the before mentioned metadata. 
				<br/>
				<br/>
			<Text2>You can define compositions in <TextBlue> src/Video.tsx  </TextBlue>
				<br/>
				<br/>
				<br/> 
			</Text2>
				<br/>
				</Text>
{/* Picture Component  with Opacity Animation */}
		<Img src={CompPic} 
			style={{
							opacity: Opac,
							transform: `scale(0.8) translateX(25px)translateY(-480px)`}}/>
</Container>
	);
};
