import { useVideoConfig, Series, useCurrentFrame } from 'remotion';
import { fadeDuration, FadeIn, FadeOut } from './Fade';

export function useStartFrame() {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();

  return frame - Math.round(fadeDuration * videoConfig.fps)
}

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
