import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TEXT } from '../Styled-Components/Text';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TITLE_W } from '../Styled-Components/TitleWhite';




//__________Styled-Components____________

const Container = styled(ABSO_FILL)`
	
`;

const Title = styled(TITLE_W)`

`;

const Text= styled(TEXT)`
margin: 40px;
`;



export const VectorFilesR: React.FC = () => {

	const config = useVideoConfig();
	const frame = useCurrentFrame();

	const Scaler = interpolate(frame, [150,360],[1,2.5],{ 
		extrapolateRight:'clamp' }) 


	return (
		<Container style={{transform: `scale(${Scaler})`}}>
<svg 
scale="${Scaler}"
fill="white"
viewBox="0 0 260.78 296.4">
	<path d="M71.29,6H254.78V259.41c-.43,23.6-3.57,23.57-29,23.57H33c-23.71.21-27-.14-27-27.43V71.28Z" 
	transform="translate(0 0)" 
/>
<path d="M71.29,6H254.78V259.41c-.43,23.6-3.57,23.57-29,23.57H33c-23.71.21-27-.14-27-27.43V71.28Z" 
transform="translate(0 0)" 
fill="#fff"
stroke="#000"
stroke-miterlimit="12"
stroke-width="12px"
/>
<path d="M5.62,72.06l55.62-.77L72.83,5.62" 
transform="translate(0 0)" 
fill="none"
stroke="#000"
stroke-miterlimit="12"
stroke-width="9px"
/>
<path d="M23.38,174.42H65.87l4.63-39L79,187.94,86.73,86,99.09,205.71l9.27-135.2,17,185.42,10.82-225.6,13.13,210.92L167.85,123l12.36,85L191,92.91l10,81.51H234.3"
transform="translate(0 0)" 
fill="none"
stroke="#000"
stroke-miterlimit="12"
stroke-width="12px"
/>
</svg>
		</Container>
	);
};
