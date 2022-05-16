import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, 
	useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { CENTERED } from '../Styled-Components/Centered';
import { CONTAINER } from '../Styled-Components/Container';
import { LEFT } from '../Styled-Components/Left';
import { OUTER } from '../Styled-Components/Outer';
import { PANEL } from '../Styled-Components/Panel';
import { RIGHT } from '../Styled-Components/Right';
import { VectorFiles2 } from '../Vector-Files/VectorFiles2';
import { VectorFilesR2 } from '../Vector-Files/VectorFilesR2';


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


export const Scene10: React.FC = () => {

	const {fps, width, height} = useVideoConfig();	// import default props from VideoConfig
	const frame = useCurrentFrame();								// import frame from useCurrentFrame()
	const PADDING = 80;															// set base value for Panels padding
	const SPACING = 50;															// set base value for Panels spacing
	const PANEL_WIDTH1 = (width - PADDING * 1 - SPACING) / 2;	// set Width from Panel 1
	const PANEL_WIDTH2 = (width - PADDING * 1 - SPACING) / 2;	// set Width from Panel 2	
	const SMALL_PANEL_HEIGHT1 = (height - PADDING * 2 - SPACING) / 0.8;	// set Height from Panel 1
	const SMALL_PANEL_HEIGHT2 = (height - PADDING * 2 - SPACING) / 1.5;	// set Height from Panel 2

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
							<VectorFiles2 />
						</Centered>
					</Panel>
				</Left>
				<div style={{width: 30}} />
				<Right>
					
						<Centered style={{opacity: progress(3),
															transform: `scale(${progress(1)}))`,
															width: PANEL_WIDTH2,
															height: SMALL_PANEL_HEIGHT2 ,}}>
					
							<VectorFilesR2 />
						</Centered>

				
				</Right>
			</Container>
		</Outer>
	);
};

