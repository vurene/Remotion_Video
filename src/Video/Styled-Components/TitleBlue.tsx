//___________Imports____________
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion';
import styled from 'styled-components';

//_______Styled-Components____________

export const TITLE_B = styled.h1`
	font-weight:7800;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 70px;
	margin-bottom: 5px;
	transform: translateY(-60px);
	background: linear-gradient(to right, #4290f5, #42e9f5);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	-text-fill-color: transparent;
`;