import styled from 'styled-components';
import { Audio, Series,AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 


import VidPic from '../../assets/Video().jpg'
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';


const Container = styled(ABSO_FILL)`

	transform: translateX(-230px) translateY(57px) scale(1.1);

`;



export const FundamentalsR2: React.FC = () => {
	return (
		<Container>
		
		

			<img src= {VidPic}
			style={{zIndex: 3}}/>

		</Container>

	);
};
