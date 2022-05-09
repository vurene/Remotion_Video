import {AbsoluteFill, Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

import { Fundamentals2 } from '../Fundamentals/Fundamentals2';

import { FundamentalsR2 } from '../Fundamentals/FundamentalsR2';
import { ShowcaseAssets } from '../Showcase-Assets/Showcase-Assets';

import Lgo from '../../assets/Logos.png';
import { CENTERED } from '../Styled-Components/Centered';

const Outer = styled(AbsoluteFill)`
	background-color: #181820;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
	background-color:#181820;
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 40px;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const RADIUS = 30;

const Panel = styled.div`
	position: absolute;
	background-color: 
	#282c38;
	border-radius: ${RADIUS}px;
	display: flex;
	justify-content: center; 
	align-items: center;
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.07);
`;

const Centered = styled(CENTERED)`

`;

export const Showcase2: React.FC = () => {
	
	const {fps, width, height} = useVideoConfig();
	const frame = useCurrentFrame();
	const PADDING = 80;
	const SPACING = 50;
	const PANEL_WIDTH1 = (width - PADDING * 1 - SPACING) / 0.98;
	const PANEL_WIDTH2 = (width - PADDING * 1 - SPACING) / 2;
	const SMALL_PANEL_HEIGHT1 = (height - PADDING * 2 - SPACING) / 0.8;
	const SMALL_PANEL_HEIGHT2 = (height - PADDING * 2 - SPACING) / 1.5;

	const progress = (i: number) =>
		spring({
			fps,
			frame: frame - i * 10 - 15,
			config: {
				damping: 100,
				mass: 2,
			},
		});

	return (
		<Outer>
			<Container>
				<Left>
					<Panel
						style={{
							transform: `scale(${progress(0)})`,
							height: SMALL_PANEL_HEIGHT1,
							width: PANEL_WIDTH1,
						}}
					>
						<Centered style={{opacity: progress(1)}}>
					
					<Img src={Lgo}/>
						
						</Centered>
					</Panel>
			
				</Left>
				<div style={{width: 30}} />
				
			</Container>
		</Outer>
	);
};