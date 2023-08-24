import { useVideoConfig, Video } from 'remotion';

export function ShowcaseVideo(props: { src: string, start: number, rate: number }) {
  const { fps } = useVideoConfig();

  return <Video muted src={props.src} startFrom={props.start * fps} playbackRate={props.rate} />
}
