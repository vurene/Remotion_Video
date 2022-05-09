import styled from 'styled-components';
// import {Triangle} from './Logo/Triangle';

import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import CompPic from '../../assets/composition.png'
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
	color: whitesmoke;
	transform: translateY(-10px);

		`

const Text2 = styled(TEXT2)`	
	
	`;

const TextBlue = styled(TEXT_B)`
	
	`;


export const Fundamentals3: React.FC = () => {

	const config = useVideoConfig();
	const frame = useCurrentFrame();

	const Opac = interpolate(frame, [450,470],[0,1],
		{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

	return (
		<Container>
			<div style={{height: 50, width: 150, transform: `rotate(3600deg)`}}>
				{/* <Triangle opacity={1} scale={1} size={150} /> */}
			</div>
			<br />
			<br />
			<Title style = {{transform:`translate(0px,160px)`}}> Fundamentals </Title>
				<Text  style = {{transform:`translate(0px,170px)`}}> 

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
			 <Img src={CompPic} 
			style={{
							opacity: Opac,
							transform: `scale(1.5) translateX(25px)translateY(-200px)`,
							zIndex:3}}/>
		</Container>
	);
};
