import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { AbsoluteFill, Easing, useVideoConfig } from 'remotion'
import { ShowcaseVideo } from '../ShowcaseVideo'
import { useI } from '../interpolation'
import examplesVideo from '../../../assets/examples.mp4'
import { Statement, Statements, StatementsRow } from '../Statements'

export function Final() {
  const bgBlur = Easing.ease(useI(
    [1, 2],
    [0, 1]
  ))
  const { durationInFrames, fps } = useVideoConfig()
  const end = durationInFrames / fps

  return (
    <>
      <AbsoluteFill style={{ filter: `blur(${bgBlur * 7}px)` }}>
        <ShowcaseVideo src={examplesVideo} start={0.8} rate={0.85} />
      </AbsoluteFill>
      <Statements>
        <StatementsRow>
          <Statement start={1} end={end}>
            <span style={{ textShadow: '0px 5px 15px white' }}>Discover more on <span style={{ color: '#7290da' }}>retejs.org</span></span>
          </Statement>
        </StatementsRow>
        <StatementsRow>
          <Statement start={2} end={end}>
            Create your first app
          </Statement>
          <Statement theme='dark' start={2.2} end={end}>
            npx rete-kit app
          </Statement>
        </StatementsRow>
        <StatementsRow>
          <Statement start={3} end={end}>
            Follow us
          </Statement>
          <Statement theme='dark' start={3.2} end={end}>
            <FontAwesomeIcon icon={faGithub} color='white' /> retejs
          </Statement>
          <Statement theme='dark' start={3.4} end={end}>
            <FontAwesomeIcon icon={faTwitter} color='white' /> rete_js
          </Statement>
        </StatementsRow>
      </Statements>
    </>
  )
}
