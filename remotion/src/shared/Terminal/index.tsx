import { useRef, useEffect } from 'react'
import { useVideoConfig } from 'remotion'
// @ts-ignore
import * as AsciinemaPlayer from 'asciinema-player';
import { Center } from '../Center'
import { useStartFrame } from '../frames'
import { Window } from '../Window'
import 'asciinema-player/dist/bundle/asciinema-player.css'
import './theme.css'

export function Terminal(props: { src: string, speed: number, width: string, height: string }) {
  const ref = useRef(null)
  const frame = useStartFrame()
  const { fps } = useVideoConfig()
  const player = useRef<any>(null)

  function updateSeek(speed: number) {
    if (player.current) {
      player.current.seek(Math.max(10, frame) / fps * speed)
    }
  }

  useEffect(() => {
    if (ref.current) {
      if (player.current) player.current.dispose()
      player.current = AsciinemaPlayer.create(props.src, ref.current, {
        poster: null,
        controls: false,
        theme: 'dark'
      })
      player.current.play()
      player.current.pause()

      updateSeek(props.speed)
    }
  }, [ref.current])

  updateSeek(props.speed)

  return (
    <Center>
      <Window width={props.width} height={props.height}>
        <div ref={ref}></div>
      </Window>
    </Center>
  )
}
