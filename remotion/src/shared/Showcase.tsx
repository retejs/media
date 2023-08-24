import { useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { HighlightTitle } from './HighlightTitle';

const ShowcaseTitle = styled(HighlightTitle)`
  top: unset;
  bottom: 5%;
  max-width: 90%;
  text-align: center;
  width: max-content;
`

export function Showcase(props: { children: React.ReactNode, title: string }) {
  const { durationInFrames, fps } = useVideoConfig();
  const end = durationInFrames / fps

  return (
    <>
      {props.children}
      <ShowcaseTitle start={1} end={end}>{props.title}</ShowcaseTitle>
    </>
  )
}
