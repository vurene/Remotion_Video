import styled from 'styled-components';
import { Audio, Series,AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 


import { OperationCanceledException } from 'typescript';
import { TEXT } from '../Styled-Components/Text';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TEXT2 } from '../Styled-Components/Text2';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';




const Container = styled(ABSO_FILL)`
`;

const Text = styled(TEXT)`
	margin: 40px;
	margin-left: 80px;	
		`;

const Text2 = styled(TEXT2)`

	`;

const TextBlue = styled(TEXT_B)`
	
	`;

export const FundamentalsR3: React.FC = () => {



	return (
		<Container>



<Text  style = {{transform:`translateY(-20px)`}}>
				<br/>
				<br/>
				<TextBlue>Compositions </TextBlue>
				have a variety of Properties:
				<br/>
				<br/>
			<Text2>
				<TextBlue> id  </TextBlue>
			to identify in it the browser based Video-Player
				<br/>
				<br/>
			<TextBlue> component </TextBlue>
			which references a react component that contains the actual UI you want to show
				<br/>
				<br/> 
and of course the resolution in 
<TextBlue>width & height</TextBlue>
		</Text2>
				<br/>
			 </Text>
		</Container>
	);
};
