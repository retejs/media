import styled from 'styled-components'
import { Caption } from './Caption'

const Styles = styled(Caption)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export function CaptionFrame({ title, ...rest }: { title: React.ReactNode }) {
  return (
    <Styles {...rest}>{title}</Styles>
  )
}
