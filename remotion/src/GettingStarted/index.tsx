import React, { useEffect, useRef, useState } from 'react';
import { AbsoluteFill, IFrame, Series, Audio, useCurrentFrame, useVideoConfig, interpolate, Img, staticFile } from 'remotion';
import { useFrames, useStartFrame } from '../shared/frames'
import s from '../../assets/getting-started/demo.svg'
// @ts-ignore
import * as AsciinemaPlayer from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css'
import './theme.css'
import { styled } from 'styled-components';
import website from '../../assets/getting-started/index.png'
import docs from '../../assets/getting-started/docs.mp4'
import search from '../../assets/getting-started/search-kit.mp4'
import { ShowcaseVideo } from '../shared/ShowcaseVideo';

function First() {
  return (
    <>
      <Img src={website} />
    </>
  )
}

function DocsFrame() {
  return (
    <>
      <ShowcaseVideo src={docs} start={0} rate={1} />
    </>
  )
}

function SearchKit() {
  return (
    <>
      <ShowcaseVideo src={search} start={0} rate={1} />
    </>
  )
}

import kitDocs from '../../assets/getting-started/rete-kit-docs.png'

function ScrollKitDocs() {
  const frame = useStartFrame()
  const { fps } = useVideoConfig()
  const top = interpolate(frame, [fps * 1, fps * 12], [0, 500], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })

  return (
    <>
      <Img src={kitDocs} style={{
        position: 'absolute',
        left: '0',
        width: '100%',
        top: `-${top}px`
      }} />
    </>
  )
}



const Window = styled.div`
  padding: 1em;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 10%;
  border-radius: 1em;
`

const WindowHeader = styled.div`
  width: 100%;
  height: 3em;
  padding: 0.5em;
`

const WindowHeaderButton = styled.div`
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  margin-right: 1em;
  border-radius: 1em;
  display: inline-block;
`

const cast = staticFile('/demo.cast.txt')


function Second() {
  const ref = useRef(null)
  const frame = useStartFrame()
  const { fps } = useVideoConfig()
  const player = useRef<any>(null)

  useEffect(() => {
    if (ref.current) {
      if (player.current) player.current.dispose()
      console.log('create player', ref.current)
      player.current = AsciinemaPlayer.create(cast, ref.current, {
        poster: null,
        controls: false,
        theme: 'dark'
      })
      player.current.play()
      player.current.pause()
    }
  }, [ref.current])

  if (player.current) player.current.seek(Math.max(10, frame) / fps * 1.6)

  return <>
    <Window className='ap-terminal-window'>
      <WindowHeader>
        <WindowHeaderButton style={{ background: '#ff5f58' }} />
        <WindowHeaderButton style={{ background: '#ffbd2e' }} />
        <WindowHeaderButton style={{ background: '#18c132' }} />
      </WindowHeader>
      <div ref={ref}></div>
    </Window>
    {/* <Img src={s} style={{ width: '80%', position: 'absolute', top: '10%', left: '10%' }} /> */}
  </>
}

export const GettingStarted: React.FC = () => {
  const frame = useFrames()

  return (
    <AbsoluteFill style={{ backgroundColor: '#fff' }}>
      {/* <Audio src={audioFile} startFrom={10} /> */}
      <Series>
        {frame(5, 'white', <First />)}
        {frame(5, 'white', <DocsFrame />)}
        {frame(8, 'white', <SearchKit />)}
        {frame(12, 'white', <ScrollKitDocs />)}
        {frame(30, 'white', <Second />)}
      </Series>
    </AbsoluteFill>
  );
};


