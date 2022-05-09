import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

import { AnimaProps4 } from '../Animation-props/AnimaProps4';
import { AnimaPropsR4 } from '../Animation-props/AnimaPropsR4';
import { CENTERED } from '../Styled-Components/Centered';
import { CONTAINER } from '../Styled-Components/Container';
import { LEFT } from '../Styled-Components/Left';
import { OUTER } from '../Styled-Components/Outer';
import { PANEL } from '../Styled-Components/Panel';
import { RIGHT } from '../Styled-Components/Right';


//__________Styled-Components____________


const Outer = styled(OUTER)`

`;

const Container = styled(CONTAINER)`

`;

const Left = styled(LEFT)`

`;

const Right = styled(RIGHT)`
	
`;

const Panel = styled(PANEL)`

`;

const Centered = styled(CENTERED)`

`;



export const Scene7: React.FC = () => {

	
	const {fps, width, height} = useVideoConfig();

	const PADDING = 80;
	const SPACING = 50;
	const PANEL_WIDTH1 = (width - PADDING * 1 - SPACING) / 2;
	const PANEL_WIDTH2 = (width - PADDING * 1 - SPACING) / 2;
	const SMALL_PANEL_HEIGHT1 = (height - PADDING * 2 - SPACING) / 0.8;
	const SMALL_PANEL_HEIGHT2 = (height - PADDING * 2 - SPACING) / 0.8;
	const frame = useCurrentFrame();
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
							<AnimaProps4 />
						</Centered>
					</Panel>
				</Left>
				<div style={{width: 30}} />
				<Right>
					<Panel
						style={{
							transform: `scale(${progress(1)})translateY(0px)`,
							width: PANEL_WIDTH2,
							height: SMALL_PANEL_HEIGHT2 ,
						}}
					>
						<Centered style={{opacity: progress(3)}}>
					<AnimaPropsR4/>
							{/* <FundamentalsR /> */}
						</Centered>
					</Panel>
				
				</Right>
			</Container>
		</Outer>
	);
};

