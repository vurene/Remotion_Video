import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TITLE_B } from '../Styled-Components/TitleBlue';





//___________Styled Components______________
const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`
	transform: translateY(180px) translateX(10px);
`;

const Text = styled(TEXT)`

`;

const Text2 = styled(TEXT2)`
transform: translateY(30px);

	`;


const Opacity = styled.div`
font-weight: 7800;
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
margin-bottom: 5px;

`;



const TextBlue = styled(TEXT_B)`

		`;



//______________Exports______________________


export const AnimaProps2: React.FC = () => {

	const config = useVideoConfig();
	const frame = useCurrentFrame();


	const Opac = interpolate(frame, [190, 200],[0,1],
		{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

		const Fadeout = interpolate(frame, [280, 300],[1,0 ],
			{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

			const Fadein2 = interpolate(frame, [300, 320],[0,1 ],
				{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})


	return (
		<Container>
			<div style={{height: 50, width: 150, transform: `rotate(3600deg)`}}>
	
			</div>
			<br />
			
			<Title>interpolate() function</Title>

			<Text style={{
				opacity:Fadeout,
				transform: `translateY(170px)` 
				}}>
			<br/>
			<Text2>Using the interpolate() function can make animations more readable.  
			<br />The function takes 4 arguments:
			<br/>
			<br/><TextBlue> - The input value </TextBlue>
			<br/><TextBlue>- The range values which the input can assume</TextBlue>
			<br/><TextBlue>- The range of values that you want to map the input to</TextBlue>
			<br/><TextBlue>- Optional Settings</TextBlue>
			<br /> 
			<br/>
			<Opacity style={{ opacity: Opac}}><br/></Opacity></Text2>
			<br/></Text>

{/*______________ Second Text Layer _____________*/}
			<Text style={{
				opacity: Fadein2,
				transform: `translateY(-350px)translateX(-85px)`}}>
			In this example, 
			<br/>
		
			we map the frames<TextBlue> 0 to 20 to </TextBlue>their 
			opacity values<TextBlue> (0, 0.05, 0.1, 0.15 ...)</TextBlue><br/> 
			and use the extrapolateRight setting to clamp the output<br/> 
			so that it <TextBlue>never becomes bigger than 1</TextBlue> 
			This stops the animation at the given value
				</Text>


		</Container>
	);
};
