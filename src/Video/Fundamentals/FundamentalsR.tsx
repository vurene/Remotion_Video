import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { LINK } from '../Styled-Components/Link';
import { TEXT } from '../Styled-Components/Text';
import { TITLE_W } from '../Styled-Components/TitleWhite';


//_______Styled-Components____________

const Container = styled(ABSO_FILL)`

`;

const Text = styled(TEXT)`

`;

const Link = styled(LINK)`
	font-size: 50px;
`;





export const FundamentalsR: React.FC = () => {
	return (
		<Container>

			<Text style ={{
					textDecoration: 'none',
					transform: `translateY(-15px) translateX(-15px`
				}}> I'ts best to start with the documentation</Text>

{/*				 Start Link insertion and linking        */}
			<a
				href="https://remotion.dev"
				target="_blank"
				style={{
					textDecoration: 'none',
					transform: `translateY(25px)translateX(-30px)`
				}}
			>
				<Link>remotion.dev</Link>
			</a>

		
		</Container>
	);
};
