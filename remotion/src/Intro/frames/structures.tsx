import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig
} from 'remotion';
import strImg from '../../../assets/structures.png'

export function StructuresFeature() {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const t = interpolate(
    frame / videoConfig.fps,
    [0, 5],
    [0, 1]
  );
  const x = t * -100
  const y = t * -400

  return (
    <AbsoluteFill style={{ background: `url('${strImg}')`, backgroundPosition: `${x}px ${y}px` }} />
  )
}
