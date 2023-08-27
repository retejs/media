import { useVideoConfig, interpolate, Easing, Img } from 'remotion'
import { useStartFrame } from './frames'

export function ScrollPage(props: { src: string, time: [number, number], position: [number, number] }) {
  const frame = useStartFrame()
  const { fps } = useVideoConfig()
  const top = interpolate(frame, props.time.map(p => p * fps), props.position, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.ease
  })

  return (
    <>
      <Img src={props.src} style={{
        position: 'absolute',
        left: '0',
        width: '100%',
        top: `-${top}px`
      }} />
    </>
  )

}
