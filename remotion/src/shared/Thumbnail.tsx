import React from 'react';
import { useVideoConfig, Img } from 'remotion';
import logo from '../../assets/logo.svg'
import { styled } from 'styled-components';
import { Caption } from '../shared/Caption';

const ThumbnailStyles = styled.div`
  height: 100%;
  width: 100%;
  word-wrap: break-word
`

const ThumbnailCaption = styled(Caption) <{ size: number, scale: number, center: number }>`
  font-size: ${props => `${props.size}em`};
  transform: scale(${props => props.scale});
  transform-origin: ${props => props.center}% 50%;
  line-height: 1.6em;
  text-align: left;
  margin-top: 1em;
`

const ThumbnailPreviewLine = styled.div<{ offset: number, angle: number }>`
  width: 0.3em;
  position: absolute;
  background: #8fa1ff;
  height: 200%;
  left: ${props => props.offset * 100}%;
  transform: rotate(${props => -props.angle}deg);
  transform-origin: 0 0;
`

const ThumbnailLogo = styled(Img) <{ scale: number }>`
  width: 17em;
  margin: 3em;
  transform: scale(${props => props.scale});
  transform-origin: 50% 50%;
`

const toRad = (deg: number) => deg * Math.PI / 180
const getBottomOffset = (angle: number) => Math.tan(angle)

const ThumbnailPreview = styled.span<{ top: number, bottom: number, margin: number }>`
  clip-path: polygon(0% 0%, ${props => props.top}% 0%, ${props => props.bottom}% 100%, 0 100%);
  shape-outside: polygon(0% 0%, ${props => props.top + props.margin}% 0%, ${props => props.bottom + props.margin}% 100%, 0 100%);
  float: left;
  width: 100%;
  height: 100%;
`

type ThumbnailProps = {
  preview: {
    content: React.ReactNode
    width: number
    skew: number
  },
  margin: number /* percentage */
  scale: number
  title: {
    text: React.ReactNode
    size: number
  }
}

export function Thumbnail(props: ThumbnailProps) {
  const config = useVideoConfig()
  const ratio = config.width / config.height
  const angle = props.preview.skew
  const { scale, margin, preview, title } = props

  return (
    <ThumbnailStyles>
      <ThumbnailPreview
        top={preview.width * 100}
        bottom={100 * (preview.width + getBottomOffset(toRad(angle)) / ratio)}
        margin={margin}
      >
        {preview.content}
      </ThumbnailPreview>
      <ThumbnailPreviewLine offset={preview.width} angle={angle} />
      <ThumbnailCaption
        size={title.size}
        scale={scale}
        center={(preview.width * 100 + margin) + (100 - (preview.width * 100 + margin)) / 2}
      >{title.text}</ThumbnailCaption>
      <ThumbnailLogo src={logo} scale={scale} />
    </ThumbnailStyles>
  )
}
