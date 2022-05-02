import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';

import { Intro } from './Video/Intro/Intro';
import { Main } from './Video/Sequence';


export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={3629}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			{/* <Composition
				id="Logo"
				component={Logo}
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
				id="Endcard"
				component={EndCard}
				durationInFrames={200}
				fps={30}
				width={1280}
				height={720}
			/> */}

		</>
	);
};
