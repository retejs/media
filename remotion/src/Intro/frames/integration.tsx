
import react from '../../../assets/integration/react.svg'
import ang from '../../../assets/integration/angular.svg'
import vue from '../../../assets/integration/vue.svg'
import svelte from '../../../assets/integration/svelte.svg'
import { Img, Easing, AbsoluteFill } from 'remotion'
import styled from 'styled-components'
import { useI } from '../../shared/interpolation'

const IntegrationLogoStyle = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function useFeatureFade(start: number, duration: number, transform?: string) {
  const fadeIn = Easing.bounce(useI(
    [start, start + 1],
    [0, 1]
  ))
  const fadeOut = Easing.ease(useI(
    [start + 1 + duration, start + 1 + duration + 0.3],
    [1, 0]
  ))
  const time = Math.min(fadeIn, fadeOut)

  return {
    filter: `blur(${(1 - fadeOut) * 100}px)`,
    transform: `${transform || ''} scale(${time})`
  }
}

function IntegrationLogo({ start, duration, src, style, ...props }: { start: number, duration: number, src: string, style?: React.CSSProperties }) {
  const { filter, transform } = useFeatureFade(start, duration, 'translate(-50%, -50%)')

  return (
    <IntegrationLogoStyle {...props} src={src} style={{ ...style, filter, transform }} />
  )
}

export function IntegrationFeature() {
  const duration = 2.2

  return (
    <AbsoluteFill>
      <IntegrationLogo start={1.1} duration={duration} style={{ height: '280px', left: '80%' }} src={svelte} />
      <IntegrationLogo start={0.9} duration={duration} style={{ height: '300px', left: '60%' }} src={ang} />
      <IntegrationLogo start={0.7} duration={duration} style={{ height: '260px', left: '40%' }} src={vue} />
      <IntegrationLogo start={0.5} duration={duration} style={{ height: '280px', left: '20%' }} src={react} />
    </AbsoluteFill>
  )
}
