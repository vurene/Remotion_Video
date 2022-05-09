import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { AnimaProps } from '../Animation-props/AnimaProps';
import { AnimaProps2 } from '../Animation-props/AnimaProps2';
import {  AnimaPropsR2 } from '../Animation-props/AnimaPropsR2';
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

export const Scene5: React.FC = () => {
	const {fps, width, height} = useVideoConfig();

	const PADDING = 80;
	const SPACING = 50;
	const PANEL_WIDTH1 = (width - PADDING * 1 - SPACING) / 0.96;
	const PANEL_WIDTH2 = (width - PADDING * 1 - SPACING) / 2;
	const SMALL_PANEL_HEIGHT1 = (height - PADDING * 2 - SPACING) / 0.8;
	const SMALL_PANEL_HEIGHT2 = (height - PADDING * 2 - SPACING) / 1.5;
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


const Opac = interpolate(frame, [10,70],[0,1],
	{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

 
	return (
		<Outer>
			<Container 
			style={{
						opacity: Opac,
							
						}}>
				<Left>
					<Panel
						style={{
							transform: `scale(${progress(0)})`,
							height: SMALL_PANEL_HEIGHT1,
							width: PANEL_WIDTH1,
						}}
					>
						<Centered style={{opacity: progress(1)}}>
							<AnimaProps2 />
						</Centered>
					</Panel>
				</Left>
				<div style={{width: 30}} />
				<Right>
		
				

					
						<Centered style={{opacity: progress(3)}}>


							<AnimaPropsR2 />
						</Centered>
					{/* </Panel> */}
				
				</Right>
			</Container> 
		</Outer>
	);
};

