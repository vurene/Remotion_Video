import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
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

margin: 40px;
		`;
		
const Text2 = styled(TEXT2)`
transform: translateY(30px);

	`;

const TextBlue = styled(TEXT_B)`

`;


export const VectorFiles: React.FC = () => {
	return (
		<Container>

			<br/><Title style={{transform: `translate(0px,-20px)`}}> SVG</Title>

			<Text 
			style={{transform: `translate(0px,-40px)`}}>
				SVG is an image format that's like HTML for 2D graphics
			<br/>
			<Text2> 	
				In contrast to Raster images(JPG,PNG) 
				<TextBlue>
				a vector file like SVG can 	scale to any size without losing it's resolution.	</TextBlue>
				<br/>Instead of fixed pixels, it's appereance is based on geometry		
				<br/>
				<br/>	
				SVGs can be created with tools like Figma or Illustrator or
		by writing the code directly
			</Text2>

			</Text> 

		</Container>
	);
};
