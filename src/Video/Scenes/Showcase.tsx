import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import { ShowcaseAssets } from '../Intro/Showcase-Assets';
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

export const Showcase: React.FC = () => {
	
	const {fps, width, height} = useVideoConfig();	// import default props from VideoConfig
	const frame = useCurrentFrame();								// import frame from useCurrentFrame()
	const PADDING = 80;															// set base value for Panels padding
	const SPACING = 50;															// set base value for Panels spacing
	const PANEL_WIDTH1 = (width - PADDING * 1 - SPACING) / 0.98;				// set Width from Panel 1	
	const SMALL_PANEL_HEIGHT1 = (height - PADDING * 2 - SPACING) / 0.8;	// set Height from Panel 1
	

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
							transform: `scale(${progress(0)})`,
							height: SMALL_PANEL_HEIGHT1,
							width: PANEL_WIDTH1,
						}}
					>
						<Centered style={{opacity: progress(1)}}>
					
							<ShowcaseAssets />
						</Centered>
					</Panel>
			
				</Left>
				<div style={{width: 30}} />
				
			</Container>
		</Outer>
	);
};