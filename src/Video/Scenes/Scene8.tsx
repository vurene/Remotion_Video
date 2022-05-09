import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';


import { VectorFiles } from '../Vector-Files/VectorFiles';
import { VectorFilesR } from '../Vector-Files/VectorFilesR';
import { Translate } from '../Translate()/Translate';
import { TranslateR } from '../Translate()/TranslateR';
import { CENTERED } from '../Styled-Components/Centered';
import { PANEL } from '../Styled-Components/Panel';
import { RIGHT } from '../Styled-Components/Right';
import { LEFT } from '../Styled-Components/Left';
import { CONTAINER } from '../Styled-Components/Container';
import { OUTER } from '../Styled-Components/Outer';

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

export const Scene8: React.FC = () => {

	const {fps, width, height} = useVideoConfig();

	const PADDING = 80;
	const SPACING = 50;
	const PANEL_WIDTH1 = (width - PADDING * 1 - SPACING) / 2;
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
						<Translate/>
						</Centered>
					</Panel>
				</Left>
				<div style={{width: 30}} />
				<Right>
					<Panel
						style={{
							transform: `scale(${progress(1)})translateY(160px)`,
							width: PANEL_WIDTH2,
							height: SMALL_PANEL_HEIGHT2 ,
						}}
					>
						<Centered style={{opacity: progress(3)}}>
					
							<TranslateR/>
						</Centered>
					</Panel>
				
				</Right>
			</Container>
		</Outer>
	);
};

