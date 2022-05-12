import styled from 'styled-components';
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import Pic from'../../assets/translate().png';
import { TITLE_B } from '../Styled-Components/TitleBlue';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';





//_______Styled-Components____________

const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`

	margin-bottom: 5px;
	transform: translateY(-20px);

`;

const Text = styled(TEXT)`

		`;

const Text2 = styled(TEXT2)`

margin: 20px;
	`;

const TextBlue = styled(TEXT_B)`
	font-size: 31px;
		`;



export const Translate: React.FC = () => {

// import frame from useCurrentFrame() hook to be used in the following interpolate function
	const frame = useCurrentFrame();			


// interpolate function for CSS-translate function
	const MoveUP = interpolate(frame, [150,200],[700,-70],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})


	return (
		<Container>
	
			<br />
			<br />
			<Title>translate()</Title>

	<Text style={{transform: `translate(0px,0px)`}}>

			<TextBlue style={{ transform: `translateX(20px)`}}>
					translate() is a CSS function. </TextBlue>
				<Text2>it repositions an element on the 
					<br/> vertical and horizontal axis. 
					<br/>It's result is a
					<br/> 
			
				<TextBlue style={{transform:`translate(180px,-35px)`}}>transform-function</TextBlue> 
					
						We can use it with single or double values.
						<br/>
						The x-coordinate(horizontal) is always first and the second is the 
						<br/>
						y-coordinate
				<TextBlue style={{transform:`translate(170px,-35px)`}}>translate(2px,2px)</TextBlue>
				
						
						
			</Text2>
	</Text> 

	<Img src={Pic} 
	style={{transform: `translate(620px,${MoveUP}px)`}}/>


		</Container>
	);
};
