import { Composition } from 'remotion';
import { Intro } from './Intro';
import { GettingStarted } from './GettingStarted';
import { ThousandsOfNodes, schema as tonScheme } from './ThousandsOfNodes';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={90 * 30.2}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="GettingStarted"
				component={GettingStarted}
				durationInFrames={(8 * 60 + 8) * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="ThousandsOfNnodes"
				component={ThousandsOfNodes}
				durationInFrames={58.4 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					preview: false
				}}
				schema={tonScheme}
			/>
		</>
	);
};
