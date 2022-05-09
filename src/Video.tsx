import {Composition} from 'remotion';


import { Intro } from './Video/Intro/Intro';
import { Main } from './Video/Sequence';
import { RectStarIn } from './Video/components/RectStarIn'
import { Scene8 } from './Video/Scenes/Scene8';
import { ShowcaseAssets } from './Video/Showcase-Assets/Showcase-Assets';
import { Showcase } from './Video/Scenes/Showcase';
import { RectStarSpring } from './Video/components/RectStarSpring';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={6599}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>


			<Composition
				id="Rectangle"
				component={RectStarIn}
				durationInFrames={200}
				fps={30}
				width={1280}
				height={720}
			/>
				<Composition
				id="Intro"
				component={Intro}
				durationInFrames={200}
				fps={30}
				width={1280}
				height={720}
			/>
		<Composition
				id="Test"
				component={Showcase}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
			/>

		</>
	);
};
