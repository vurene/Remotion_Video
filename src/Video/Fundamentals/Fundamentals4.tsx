import styled from 'styled-components';
// import {Triangle} from './Logo/Triangle';
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import { TEXT } from '../Styled-Components/Text';
import { TITLE_B } from '../Styled-Components/TitleBlue';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TEXT2 } from '../Styled-Components/Text2';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';



const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`

`;

const Text = styled(TEXT)`
	margin: 40px;
	margin-left: 80px;
		`;

const Text2 = styled(TEXT2)`
	
	`;

const TextBlue = styled(TEXT_B)`
	
	`;


export const Fundamentals4: React.FC = () => {
	return (
		<Container>
			<br />
			<br />
			<Title style = {{transform:`translate(0px,50px)`}}> Fundamentals </Title>
			<Text  style = {{transform:`translate(0px,30px)`}}>
				You can visualise these compositions in the browser  
				<br/>
				using
				<br/>
				<TextBlue>npm start </TextBlue>
				in the Terminal 
				<br/>
				<br/>
			<Text2>You will notice in the Full Project that we have 
				a bunch of different compositions here on the sidebar
				<br/>
				<br/>
				these are like their own mini Videos 
				that allow you to isolate and inspect each scene.
			<br/>
			<br/>
			<br/> 
		</Text2>
			<br/>
			 </Text>
		</Container>
	);
};
