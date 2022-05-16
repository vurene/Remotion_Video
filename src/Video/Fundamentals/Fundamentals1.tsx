import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TEXT } from '../Styled-Components/Text';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TITLE_B } from '../Styled-Components/TitleBlue';



//_______Styled-Components____________

const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`

`;

const Text = styled(TEXT)`

transform:translateY(-20px);
margin-left: 80px;
`;

const TextBlue = styled(TEXT_B)`

`;


export const Fundamentals1: React.FC = () => {
	return (
		<Container>
				<br />
				<br />
				<br /> 
			<Title style={{transform: `translateY(-6  0px)`}}>Fundamentals</Title>
			<Text >The first place you should go after installing, is the file: 
				<br/>
				<br/>
			<TextBlue>Video.tsx </TextBlue>
				<br/>
				 <br/>
			This file contains following component:
				<br/>
	
			<TextBlue>	RemotionVideo </TextBlue>
				<br/>
		
			Think of it as your entire Video!

			</Text>

		</Container>
	);
};
