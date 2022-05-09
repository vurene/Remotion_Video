import styled from 'styled-components';
import { RectStarSpring } from '../components/RectStarSpring';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TITLE_B } from '../Styled-Components/TitleBlue';



const Container = styled(ABSO_FILL)`
	
`;

const Title = styled(TITLE_B)`
transform: translateY(-200px);
`;


export const AnimaPropsR4: React.FC = () => {
	return (
		<Container>
			<Title>spring()</Title>
			<RectStarSpring/>
			
		</Container>
	);
};
