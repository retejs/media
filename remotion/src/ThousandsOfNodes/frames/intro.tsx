import { useVideoConfig, interpolate, Easing } from 'remotion';
import { useDurationInFrames, useStartFrame } from '../../shared/frames'
import gridNodes from '../../../assets/nodes/grid.png'
import { Thumbnail } from '../../shared/Thumbnail';

export function Intro(props: { preview?: boolean }) {
  const frame = useStartFrame()
  const durationInFrames = useDurationInFrames()
  const { fps, } = useVideoConfig()
  const zoom = interpolate(
    frame / fps,
    [0, durationInFrames / fps],
    [15, 1],
    {
      easing: Easing.ease
    }
  );

  return (
    <Thumbnail
      preview={{
        width: 0.5,
        skew: 15,
        content: <div style={{
          background: `url('${gridNodes}')`,
          backgroundPosition: `30% 50%`,
          backgroundSize: `${zoom}%`,
          width: '100%',
          height: '100%'
        }} />
      }}
      scale={props.preview ? 1 : 0.7}
      margin={8}
      title={{
        size: 7,
        text: <>Visualizing<br />thousands<br /> of nodes</>
      }}
    />
  )
}
