import { fontFamily } from '@remotion/google-fonts/Ubuntu'
import styled from 'styled-components'

const Caption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${fontFamily};
  font-size: 75px;
  font-weight: 700;
  text-align: center;
  color: #4a4a4a;
`

export function CaptionFrame(props: { title: React.ReactNode }) {
  return (
    <Caption>{props.title}</Caption>
  )
}
