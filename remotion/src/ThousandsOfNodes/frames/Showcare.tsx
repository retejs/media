import { Series, useVideoConfig } from 'remotion';
import { ShowcaseVideo } from '../../shared/ShowcaseVideo';
import video from '../../../assets/nodes/lod-example.mp4'
import { Loading } from '../../shared/Loading';

export function Showcase(props: { rate: number }) {
  const { fps } = useVideoConfig()
  const rate = props.rate

  return (
    <>
      <ShowcaseVideo src={video} start={0} rate={rate} />
      <Series>
        <Series.Sequence offset={Math.floor(fps * 22 / rate)} durationInFrames={Math.floor(9 * fps / rate)}>
          <Loading />
        </Series.Sequence>
      </Series>
    </>
  )
}
