//___________Imports____________
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion';
import styled from 'styled-components';

//_______Styled-Components____________


export const LINK = styled.div`
	font-weight: 900;
	font-size: 70px;
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to left, #006afd, #6dd5fd);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	-text-fill-color: transparent;
	margin-left: 60px;
`;