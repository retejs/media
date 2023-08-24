import { useVideoConfig, Series } from 'remotion';
import { fadeDuration, FadeIn, FadeOut } from './Fade';

export function useFrames() {
  const videoConfig = useVideoConfig();

  return (duration: number, color: string, children: React.ReactNode) => (
    <Series.Sequence offset={- fadeDuration * videoConfig.fps} durationInFrames={(duration + fadeDuration) * videoConfig.fps}>
      <FadeIn color={color}>
        <FadeOut>
          {children}
        </FadeOut>
      </FadeIn>
    </Series.Sequence>
  )
}
