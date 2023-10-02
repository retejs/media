import { Easing } from 'remotion'
import { useI } from './interpolation'
import { styled } from 'styled-components'

export const HighlightTitleStyle = styled.div`
  background: #fff;
  box-shadow: 0 0.16em 0.32em 0 #02020247;
  border-radius: 1em;
  font-size: 50px;
  padding: 0.4em 0.8em;
  font-family: Ubuntu;
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  margin: auto;
`

export function HighlightTitle({ start, end, children, component, ...props }: { component?: React.FC, start: number, end: number, children: React.ReactNode }) {
  const Component = component || HighlightTitleStyle
  const textFadeIn = Easing.bounce(useI(
    [start, start + 1],
    [0, 1]
  ))
  const textFadeOut = Easing.ease(useI(
    [end - 1, end - 0.5],
    [1, 0]
  ))
  const t = Math.min(textFadeIn, textFadeOut)

  return (
    <Component {...props} style={{
      opacity: t,
      transform: `translateY(${(1 - t) * 70}px)`
    }}>
      {children}
    </Component>
  )
}
