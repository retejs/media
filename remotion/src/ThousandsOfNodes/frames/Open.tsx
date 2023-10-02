import { AbsoluteFill, Series, useVideoConfig } from 'remotion';
import { Browser } from '../../shared/Browser';
import { useTypewriting } from '../../shared/typewriting';
import { ScrollPage } from '../../shared/ScrollPage';
import lodExample from '../../../assets/nodes/lod-example.png'
import { useI } from '../../shared/interpolation';

export function Open() {
  const { height, fps } = useVideoConfig()
  const typingStart = 1
  const typingDuration = 2
  const typingEnd = typingStart + typingDuration
  const scrollDuration = 4
  const address = useTypewriting(
    [
      'https://',
      'https://retejs.org/examples/lod-gpu'
    ],
    [typingStart, typingEnd],
    [0, 1]
  )
  const top = useI(
    [0, typingStart, typingEnd, typingEnd + 1],
    [height, height * 0.4, height * 0.4, 0],
  )
  const scrollOffset = 180

  return (
    <AbsoluteFill style={{ top: `${top}px` }}>
      <Browser address={address}>
        <Series>
          <Series.Sequence durationInFrames={typingEnd * fps}>
            <AbsoluteFill style={{ backgroundColor: '#fff' }} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={scrollDuration * fps}>
            <ScrollPage src={lodExample} time={[0, scrollDuration]} position={[0, scrollOffset]} />
          </Series.Sequence>
        </Series>
      </Browser>
    </AbsoluteFill>
  )
}
