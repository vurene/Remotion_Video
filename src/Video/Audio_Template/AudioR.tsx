import { Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TITLE_W } from '../Styled-Components/TitleWhite';
import Aud from '../../assets/audio.png';



//__________Styled-Components____________



const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_W)`

`;


export const AudioR: React.FC = () => {


	return (
		<Container>
<Img src={Aud} />
		
		</Container>
	);
};
