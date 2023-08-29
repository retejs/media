import { useCurrentFrame, useVideoConfig, interpolate, Easing, Series } from 'remotion'
import { useTypewriting } from '../../shared/typewriting'
import defaultTemplate from '../../../assets/getting-started/default-app-template.png'
import customizationTemplate from '../../../assets/getting-started/customization-app-template.png'
import perfTemplate from '../../../assets/getting-started/perf-app-template.png'
import threeDTemplate from '../../../assets/getting-started/3d-app-template.png'
import { Browser } from '../../shared/Browser'
import { ScrollPage } from '../../shared/ScrollPage'


export function AppPreview() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const scrollOffset = 220
  const timings = [12, 5, 4, 5]
  const start = timings.reduce((arr, t, i) => ([...arr, arr[i] + t]), [0])
  const address = useTypewriting(
    [
      'http://localhost:5173/',
      'http://localhost:5173/?template=customization',
      'http://localhost:5173/?template=perf',
      'http://localhost:5173/?template=3d'
    ],
    [start[0], start[1] - 1.6, start[1], start[2] - 2, start[2], start[3] - 1, start[3]],
    [0, 0, 1, 1, 2, 2, 3]
  )
  const zoomK = interpolate(
    frame / fps,
    [start[0], start[1] - 3, start[1] - 2, start[1] + 1, start[1] + 2],
    [0, 0, 1, 1, 0],
    { easing: Easing.ease, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )

  return (
    <div style={{
      transform: `scale(${1 + zoomK * 0.6}) translate(${zoomK * 70}px, ${zoomK * 150}px)`,
      transformOrigin: '0 0',
      height: '100%'
    }}>
      <Browser address={address}>
        <Series>
          <Series.Sequence durationInFrames={fps * timings[0]}>
            <ScrollPage src={defaultTemplate} time={[1, 5]} position={[0, scrollOffset]} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={fps * timings[1]}>
            <ScrollPage src={customizationTemplate} time={[0, 1]} position={[scrollOffset, scrollOffset]} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={fps * timings[2]}>
            <ScrollPage src={perfTemplate} time={[0, 1]} position={[scrollOffset, scrollOffset]} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={fps * timings[3]}>
            <ScrollPage src={threeDTemplate} time={[0, 1]} position={[scrollOffset, scrollOffset]} />
          </Series.Sequence>
        </Series>
      </Browser>
    </div >
  )
}
