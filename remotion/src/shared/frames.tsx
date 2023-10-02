import { useVideoConfig, Series, useCurrentFrame } from 'remotion';
import { fadeDuration, FadeIn, FadeOut } from './Fade';

export function useStartFrame() {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();

  return frame - Math.round(fadeDuration * videoConfig.fps)
}

export function useDurationInFrames() {
  const { durationInFrames, fps } = useVideoConfig();

  return durationInFrames - fadeDuration * fps
}

export function useFrames() {
  const videoConfig = useVideoConfig();

  return (duration: number, options: { fadeIn?: boolean, fadeOut?: boolean, color?: string }, children: React.ReactNode) => (
    <Series.Sequence offset={- fadeDuration * videoConfig.fps} durationInFrames={(duration + fadeDuration) * videoConfig.fps}>
      <FadeIn disabled={options.fadeIn === false} color={options.color || 'white'}>
        <FadeOut disabled={!options.fadeOut === false}>
          {children}
        </FadeOut>
      </FadeIn>
    </Series.Sequence>
  )
}
