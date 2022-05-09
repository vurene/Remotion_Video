import styled from 'styled-components';
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 




import Pic from'../../assets/translate()Interpolate.png';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	
`;

const Title = styled.div`
	font-weight: 8700;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 30px;
	margin-bottom: 5px;
	color: whitesmoke ;
	transform: translateX(20px);
`;

const Text = styled.div`
	font-weight: 7800;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 30px;
	margin-bottom: 5px;
	color: whitesmoke;
	margin-left: 30px;
	transform: translateY(10px)translateX(0px);
		`

export const TranslateR: React.FC = () => {

	const config = useVideoConfig();
	const frame = useCurrentFrame();

	const MoveLeft = interpolate(frame, [150,200],[700,0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
		)



	return (
		<Container>
			<Title>
			<Text>	
							In order to bring movement into our assets, <br/><br/>
							we can use CSS in combination with <br/>
			 				animating properties like<br/> <br/>
			 				interpolate() and spring()
			 </Text>
			 </Title>

			<Img src={Pic} style={{transform: `translate(${MoveLeft}px, 10px)`}}/>	
		</Container>
	);
};
