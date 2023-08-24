import { Easing } from 'remotion'
import { interpolate } from 'remotion'
import { useCurrentFrame } from 'remotion'
import { useVideoConfig } from 'remotion';

export function useI(input: number[], output: number[]) {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  return interpolate(
    frame / videoConfig.fps,
    input,
    output,
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(.52, -0.01, .55, 1) }
  );
}
