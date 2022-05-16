import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, 
	useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
import { TITLE_B } from '../Styled-Components/TitleBlue';




//___________Styled Components______________

const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`

`;

const Text = styled(TEXT)`
margin:40px;
`;

const Text2 = styled(TEXT2)`
margin-right: 35px;
transform: translateY(30px);
margin-left: 20px;
`;



export const OutroR: React.FC = () => {

	return (


		<Container>
				<br />
        <Title style={{transform: `translate(-10px,-30px)`}}>
                        Credits</Title>
			<Text style={{transform: `translate(0px,-60px)`}}>
				<br/>
			<Text2 >Video by Rene Vukorepa
				<br/>
			<br />
			<br/>
     					 Music by
   					 Felix Heinrich       
			</Text2>
			</Text>	
		</Container>
	);
};
