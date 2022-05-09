//___________Imports____________
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion';
import styled from 'styled-components';

//_______Styled-Components____________

export const CONTAINER = styled.div`
	background-color:#181820;
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 40px;
`;