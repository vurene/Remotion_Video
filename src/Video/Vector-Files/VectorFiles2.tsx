
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { LINK } from '../Styled-Components/Link';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TITLE_B } from '../Styled-Components/TitleBlue';
// import {Triangle} from './Logo/Triangle';





//__________Styled-Components____________


const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`
	
`;

const Text = styled(TEXT)`

	`;

const Text2 = styled(TEXT2)`

margin: 40px;
	`;

const TextBlue =styled(TEXT_B)`


`;

const Link = styled(LINK)`
font-size: 15px;
transform: translate(-60px, 0px);
`;
 

export const VectorFiles2: React.FC = () => {

return (

<Container>
	<Title style={{transform: `translate(0px,65px)`}}> SVG</Title>
			<br />
			<br />
		<Text>
			<br/>
			<Text2 style={{transform: `translate(0px,50px)`}} >
			create an SVG by opening a  <TextBlue>svg tag </TextBlue> then define a coordinate System with the 
			<TextBlue>viewBox attribute</TextBlue>
			<br/>
	
				 That gives us  a frame with a width and height with 100 units on which we can draw graphics
				 Draw basic shapes by adding 
			<br/>
			<br/>
				 <TextBlue>rect, circle & polygon </TextBlue>
			</Text2>	 
			<br/>	
		</Text>
<Text style={{marginLeft:`-20px`,
							fontSize: `20px`,
							transform: `translateY(-100px)`
								}}>

For a more in depth explanation go check out :

						<Link >
						<a
				href="https://https://www.w3schools.com/graphics/svg_intro.asp"
				target="_blank"
				style={{
					textDecoration: 'none'}}>
					w3schools.com
						</a>
						</Link>
		</Text>
</Container>
	);
};
