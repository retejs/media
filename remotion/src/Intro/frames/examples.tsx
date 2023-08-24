import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { AbsoluteFill, Easing, useVideoConfig } from 'remotion'
import styled from 'styled-components'
import { HighlightTitleStyle, HighlightTitle } from '../../shared/HighlightTitle'
import { ShowcaseVideo } from '../../shared/ShowcaseVideo'
import { useI } from '../../shared/interpolation'
import examplesVideo from '../../../assets/examples.mp4'

const black = '#2e2e2e'

const Items = styled(AbsoluteFill)`
  display: flex;
  align-items: center;
  gap: 15%;
  justify-content: center;
`

const TitleRow = styled.div`
  text-align: center;
  width: max-content;
  & > *:not(:first-child) {
    margin-left: -0.5em;
  }
`

const TitleRowItem = styled(HighlightTitleStyle)`
  position: static;
  display: inline-block;
  text-align: center;
  transform: none;
`

const DarkTitle = styled(TitleRowItem)`
  color: #fff;
  background: ${black};
`

export function Examples() {
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
      <Items>
        <TitleRow>
          <HighlightTitle component={TitleRowItem} start={1} end={end}>
            <span style={{ textShadow: '0px 5px 15px white' }}>Discover more on <span style={{ color: '#7290da' }}>retejs.org</span></span>
          </HighlightTitle>
        </TitleRow>
        <TitleRow>
          <HighlightTitle component={TitleRowItem} start={2} end={end}>
            Create your first app
          </HighlightTitle>
          <HighlightTitle component={DarkTitle} start={2.2} end={end}>
            npx rete-kit app
          </HighlightTitle>
        </TitleRow>
        <TitleRow>
          <HighlightTitle component={TitleRowItem} start={3} end={end}>
            Follow us
          </HighlightTitle>
          <HighlightTitle component={DarkTitle} start={3.2} end={end}>
            <FontAwesomeIcon icon={faGithub} color='white' /> retejs
          </HighlightTitle>
          <HighlightTitle component={DarkTitle} start={3.4} end={end}>
            <FontAwesomeIcon icon={faTwitter} color='white' /> rete_js
          </HighlightTitle>
        </TitleRow>
      </Items>
    </>
  )
}
