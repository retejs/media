import { fontFamily } from '@remotion/google-fonts/Ubuntu'
import styled from 'styled-components'
import { useI } from '../../shared/interpolation'
import { Logo } from '../Logo'

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Text = styled.div`
  position: absolute;
  top: 72%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  color: #4a4a4a;
  font-family: ${fontFamily};
  font-weight: 500;
`
const Subtitle = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 52px;
  color: #787878;
  font-family: ${fontFamily};
  text-align: center;
  font-weight: 400;
`

export function LogoFrame() {
  const logoRiseStart = 2
  const logoDuration = 1
  const logoMiddle = logoRiseStart + logoDuration * 0.6
  const logoEnd = logoRiseStart + logoDuration
  const textFadeInStart = 1
  const textFadeInDuration = logoRiseStart - textFadeInStart

  const subtitleFadeInStart = logoRiseStart
  const subtitleFadeInDuration = 1.3
  const subtitleFadeInEnd = subtitleFadeInStart + subtitleFadeInDuration

  const logoRise = useI(
    [logoRiseStart, logoMiddle, logoEnd],
    [1, 0.5, 0]
  );

  const text = useI(
    [textFadeInStart, textFadeInStart + textFadeInDuration],
    [0, 1]
  )
  const textTop = useI(
    [logoRiseStart, logoMiddle],
    [0, 1]
  )
  const subtextTop = useI(
    [subtitleFadeInStart, subtitleFadeInEnd],
    [0, 1]
  )

  return (
    <>
      <Center style={{ marginTop: `${textTop * -100}px`, }}>
        <Logo t={logoRise} />
      </Center>
      <Text style={{ opacity: text, filter: `blur(${(1 - text) * 25}px)` }}>
        Rete.js
      </Text>
      <Subtitle style={{ opacity: subtextTop, filter: `blur(${(1 - subtextTop) * 25}px)` }}>
        JavaScript framework for<br /> visual programming
      </Subtitle>
    </>
  )
}
