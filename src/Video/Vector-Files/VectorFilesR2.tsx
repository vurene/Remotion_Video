import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TITLE_B } from '../Styled-Components/TitleBlue';
import Pic1 from '../../assets/SVG-Basics.png';
import Pic2 from'../../assets/geometry.png';


//__________Styled-Components____________


const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`

`;



export const VectorFilesR2: React.FC = () => {
const config = useVideoConfig();
const frame = useCurrentFrame();

	const FadeOut = interpolate(frame, [300,360],[1,0],{

		extrapolateRight:'clamp',
		extrapolateLeft:'clamp'
		})
		
		const FadeIn = interpolate(frame, [300,360],[0,1],{
		
			extrapolateRight:'clamp',
			extrapolateLeft:'clamp'
			})

	return (

		<Container>
		<Img src={Pic1} style={{opacity: FadeOut,
														transform: `translate(650px,450px)`
														}} />
		<Img src={Pic2} style={{opacity: FadeIn,
														transform: `translate(650px,-140px)`		
		}} />

		</Container>
	);
};
