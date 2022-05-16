import styled from 'styled-components';
import { Audio, Series,AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 


import VidPic from '../../assets/Video().png'
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';


//_______Styled-Components____________

const Container = styled(ABSO_FILL)`
transform: translateX(-180px) translateY(-10px) scale(0.8); // positions the picture and gives it an anppropriate scale
z-Index: 3;																								// Makes the picture the first layer
`;



export const FundamentalsR2: React.FC = () => {
	return (
		<Container>
		
		
			<Img src= {VidPic}/>


		</Container>

	);
};
