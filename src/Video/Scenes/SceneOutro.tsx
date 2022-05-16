
//____________Imports____________
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import { PANEL } from '../Styled-Components/Panel';
import { LEFT } from '../Styled-Components/Left';
import { RIGHT } from '../Styled-Components/Right';
import { OUTER } from '../Styled-Components/Outer';
import { CONTAINER } from '../Styled-Components/Container';
import { CENTERED } from '../Styled-Components/Centered';
import { Outro } from '../Outro/Outro';
import { OutroR } from '../Outro/OutroR';

//_______Styled-Components____________

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


export const SceneOutro: React.FC = () => {

	const {fps, width, height} = useVideoConfig(); 	// import default props from VideoConfig
	const frame = useCurrentFrame(); 								//import frame from useCurrentFrame()
	const PADDING = 80;															// set base value for Panels padding						
	const SPACING = 50;															// set base value for Panels spacing
	const PANEL_WIDTH1 = (width - PADDING * 1 - SPACING) / 2;	// set Width from Panel 1	
	const PANEL_WIDTH2 = (width - PADDING * 1 - SPACING) / 2; // set Width from Panel 2
	const SMALL_PANEL_HEIGHT1 = (height - PADDING * 2 - SPACING) / 1.5; // set Height from Panel 1
	const SMALL_PANEL_HEIGHT2 = (height - PADDING * 2 - SPACING) / 1;	// set Height from Panel 1





// Spring function for timing the CSS functions

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
							transform: `scale(${progress(0)})translateY(160px)`,
							height: SMALL_PANEL_HEIGHT1,
							width: PANEL_WIDTH1,
						}}
					>
						<Centered style={{opacity: progress(1)}}>
							<Outro/>
						</Centered>
					</Panel>
				</Left>
				<div style={{width: 30}} />
				<Right>
					<Panel
						style={{
							opacity: progress(4),
							transform: `scale(${progress(2 )})translateY(60px)`,
							width: PANEL_WIDTH2,
							height: SMALL_PANEL_HEIGHT2 ,
						}}
					>
						<Centered style={{opacity: progress(4)}}>
							<OutroR />
						</Centered>
					</Panel>
				</Right>
			</Container>
		</Outer>
	);
};

