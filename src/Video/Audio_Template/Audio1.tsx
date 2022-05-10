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
	margin: 40px;
	transform: translateY(-80px);
		`

const Text2 = styled(TEXT2)`
	transform: translateY(30px);
	margin: 40px;
	`;


const Link = styled(LINK)`

`;

const TextBlue=styled(TEXT_B)`


`;
export const Audio1: React.FC = () => {
	return (
		<Container>


			<br /> 
			<br />
			<Title style={{transform:`translate(0px,40px)`}}>Audio</Title>
			<Text>
			<br/>
			<Text2> 
						You can use audio files in your videos!
				<br/>
				<br/>
						The audio will play from the start, 
				<br/>
						at full volume and as long as the duration of the composition or the duration of the audio is long
			<br/>
			<br/>
						You can also import remote audio by passing a URL 
				<TextBlue>(src="https://example.com/audio.mp3"). </TextBlue>

			<br/>
						You can mix multiple tracks together by adding more audio tags.
						</Text2>
			</Text>
		</Container>
	);
};
