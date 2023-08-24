import styled from 'styled-components'
import { Easing } from 'remotion';
import historyVideo from '../../../assets/history.mp4'
import { useI } from '../../shared/interpolation';
import { loadFont } from "@remotion/google-fonts/Ubuntu"
import { ShowcaseVideo } from '../../shared/ShowcaseVideo';

const { fontFamily } = loadFont();

const HistoryMessage = styled.div`
  position: absolute;
  bottom: 15%;
  left: 70%;
  transform: translateX(-50%, -50%);
  font-family: ${fontFamily};
  font-size: 50px;
`

function FloatMessage(props: { color: string, start: number, children: React.ReactNode }) {
  const range = [0, props.start - 0.01, props.start, props.start + 1]
  const t = Easing.ease(useI(
    range,
    [0, 0, 0, 1]
  ))
  const opacity = useI(
    range,
    [0, 0, 1, 0]
  )

  return <HistoryMessage style={{ color: props.color, marginBottom: `${t * 100}px`, opacity }}>{props.children}</HistoryMessage>
}


export function HistoryFeature() {
  const rate = 1

  return <>
    <FloatMessage start={3.8 / rate * 1.3} color="#ec553d">Undo</FloatMessage>
    <FloatMessage start={4.1 / rate * 1.3} color="#ec553d">Undo</FloatMessage>
    <FloatMessage start={4.3 / rate * 1.3} color="#ec553d">Undo</FloatMessage>
    <FloatMessage start={5 / rate * 1.3} color="#3284d1">Redo</FloatMessage>
    <FloatMessage start={6.8 / rate * 1.3} color="#3284d1">Redo</FloatMessage>
    <FloatMessage start={6.9 / rate * 1.3} color="#3284d1">Redo</FloatMessage>
    <ShowcaseVideo src={historyVideo} start={0.2} rate={rate} />
  </>
}
