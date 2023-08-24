import { AbsoluteFill, useVideoConfig } from 'remotion';
import { useI } from './interpolation';

export const fadeDuration = 0.7

export function FadeIn(props: { color: string, children: React.ReactNode }) {
  const t = useI(
    [0, fadeDuration],
    [1, 0]
  )

  return (
    <AbsoluteFill style={{ background: props.color, opacity: 1 - t }}>
      <AbsoluteFill style={{ filter: `blur(${t * 100}px)`, transform: `scale(${1 + t * 0.2})` }}>
        {props.children}
      </AbsoluteFill>
    </AbsoluteFill>
  )
}

export function FadeOut(props: { children: React.ReactNode }) {
  const { durationInFrames, fps } = useVideoConfig();
  const end = durationInFrames / fps
  const t = useI(
    [end - fadeDuration, end],
    [0, 1]
  )

  return (
    <AbsoluteFill style={{ filter: `blur(${t * 100}px)`, opacity: 1, transform: `scale(${1 + t * 0.2})` }}>
      {props.children}
    </AbsoluteFill>
  )
}
