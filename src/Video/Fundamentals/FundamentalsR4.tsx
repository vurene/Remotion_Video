import styled from 'styled-components';
import { Audio, Series,AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 


import BrowserPic from '../../assets/browser-player.png'
import NPM from '../../assets/NPM.png'
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';

const Container = styled(ABSO_FILL)`

`;
 

export const FundamentalsR4: React.FC = () => {
	return (
		<Container>




<Img src={BrowserPic} style={{
															transform: `scale(0.5) translateX(-25px)translateY(-10px)`}}/>
<Img src={NPM}	 style={{
													transform: `scale(0.9) translateX(-550px)translateY(-767px)`,
													zIndex:8
}}/>
		</Container>

	);
};
