import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 


import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
import { TITLE_B } from '../Styled-Components/TitleBlue';
import CodePic from '../../assets/interpolate().png';

//___________Styled Components______________

// Absolute-Fill 
const Container = styled(ABSO_FILL)`

`;


const Title = styled(TITLE_B)`

`;

const Text = styled(TEXT)`

`;

const Text2 = styled(TEXT2)`
margin-right: 35px;
transform: translateY(30px);
margin-left: 20px;
`;


// Fade-in Text Component for Showcase of Animation

const Opacity = styled(TEXT)`

font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
margin-bottom: 5px;
transform: translate(-30px,10px);
`;


//______________Exports______________________



export const AnimaProps: React.FC = () => {

	const config = useVideoConfig();
	const frame = useCurrentFrame();

	const Opac = interpolate(frame, [250, 280],[0,1],
		{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})



 
	return (


		<Container>
			<div style={{height: 50, width: 150, transform: `rotate(3600deg)`}}>
	
			</div>
				<br />

			<Title style={{transform: `translate(0px,0px)`}}>Animating properties</Title>
			<Text style={{transform: `translate(0px,-40px)`}}>
				<br/>
			<Text2>Animation is all about how properties change over time. 
				<br/>
			<br />Let's start with a simple example, 
			<br/>let's say we want to create a fade-in animation.
				<br/>
			<br/> If we want to fade the text in over 20 frames,
			<br /> we need to gradually change the opacity style over time
			<br/>
			<Opacity style={{ opacity: Opac}}>
				<br/>
					so that it goes from 0 to 1.</Opacity></Text2>

				<br/>
			</Text>


			<Img src={CodePic} style={{											
																transform:`translate(180px, -30px)`}}/>

		</Container>
	);
};
