import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { LINK } from '../Styled-Components/Link';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
// import {Triangle} from './Logo/Triangle';

//_______Styled-Components____________


const Container = styled(ABSO_FILL)`

`;

const Text = styled(TEXT)`

`;

const Text2 = styled(TEXT2)`

transform: translateY(30px);
margin-left: 20px;
	
`;

const Link = styled(LINK)`

`;


export const Fundamentals: React.FC = () => {
	return (
		<Container>
	
			<Text style={{ transform:`translateY(-40px)translateX(-10px)`}} >You have basically the freedom 
				<br/>
			<br/>
			<Text2  style={{transform: `translateX(-10px)translateY(10px)`}}> to render anything you want   </Text2>
			<br/>
			
		<Text2  style={{transform: `translateX(130px)translateY(10px)`}}>	using:</Text2>
			<br/>
			
			<Link 	style={{ transform:`translateX(-20px)translateY(80px)`}}  >
			
			<a
				href="https://https://reactjs.org/"
				target="_blank"
				style={{
					textDecoration: 'none',
					
				}}
			>React.js
						</a>
						</Link>
						 </Text>

		</Container>
	);
};
