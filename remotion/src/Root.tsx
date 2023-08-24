import { Composition } from 'remotion';
import { Intro } from './Intro';

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
		</>
	);
};
