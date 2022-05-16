//___________Imports____________
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion';
import styled from 'styled-components';


//_______Styled-Components____________

const Radius = 30;  

export const PANEL = styled.div`
	position: absolute;
	background-color: 
	#282c38;
	border-radius: ${Radius}px;
	display: flex;
	justify-content: center; 
	align-items: center;
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
`;