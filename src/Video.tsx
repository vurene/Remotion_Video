
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import {Composition} from 'remotion';
import { Intro } from './Video/Scenes/Intro';
import { Main } from './Video/Sequence';
import { RectStarIn } from './Video/components/RectStarIn'
import { Showcase } from './Video/Scenes/Showcase';




export const RemotionVideo: React.FC = () => {
	return (
		<>


{/*  			   */}
			<Composition
				id="Main"
				component={Main}
				durationInFrames={7199}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			{/* <Composition
				id="Main"
				component={Main}
				durationInFrames={7199} 
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/> */}
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
