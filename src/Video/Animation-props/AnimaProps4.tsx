import styled from 'styled-components';
import { RectStarIn } from '../components/RectStarIn';
import { RectStarSpring } from '../components/RectStarSpring';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TEXT } from '../Styled-Components/Text';
import { TITLE_B } from '../Styled-Components/TitleBlue';
// import {Triangle} from './Logo/Triangle';






const Container = styled(ABSO_FILL)`

`;

const Title = styled(TITLE_B)`
transform: translateY(-190px);

`;

const Text = styled(TEXT)`

	margin-left: 30px;
	transform: translateY(-80px);
		`;



export const AnimaProps4: React.FC = () => {

	return (
		<Container>
			<Title>interpolate()</Title>
			<Text> 
			<br/>
			<RectStarIn/>
			</Text> 
		</Container>
	);
};
