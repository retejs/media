import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import sandClock from '../../assets/sand-clock.svg'
import { useI } from './interpolation';

function FadeOpacity(props: { transitionTime: number, children: React.ReactNode }) {
  const { durationInFrames, fps } = useVideoConfig();
  const end = durationInFrames / fps
  const t = useI(
    [0, props.transitionTime, end - props.transitionTime, end],
    [0, 1, 1, 0]
  )

  return (
    <AbsoluteFill style={{ opacity: t }}>
      {props.children}
    </AbsoluteFill>
  )
}

const ClockImg = styled(Img) <{ rotate: number }>`
  width: 6%;
  position: absolute;
  top: 50%;
  left: 50%;
  transformOrigin: 50% 50%;
  transform: translate(-50%, -50%) rotate(${props => props.rotate}rad);
`

export function Loading() {
  const { fps } = useVideoConfig()
  const frame = useCurrentFrame()
  const rotate = interpolate(
    (frame / fps) % 2,
    [0, 1, 1.5, 2],
    [0, 0, -Math.PI, -Math.PI]
  )

  return (
    <FadeOpacity transitionTime={1}>
      <ClockImg src={sandClock} rotate={rotate} />
    </FadeOpacity>
  )
}
