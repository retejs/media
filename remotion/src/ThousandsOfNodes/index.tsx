import React from 'react';
import { AbsoluteFill, Series, Audio, useVideoConfig } from 'remotion';
import { z } from "zod";
import { useFrames } from '../shared/frames'
import { Intro } from './frames/intro';
import { Final } from '../shared/frames/final';
import { Open } from './frames/Open';
import { Showcase } from './frames/Showcare';
import audio from '../../assets/nodes/audio.mp3'
import { useI } from '../shared/interpolation';

export const schema = z.object({
  preview: z.boolean()
});

export const ThousandsOfNodes: React.FC<z.infer<typeof schema>> = (props) => {
  const frame = useFrames()
  const { fps } = useVideoConfig()

  if (props.preview) return (
    <AbsoluteFill style={{ backgroundColor: '#fff' }}>
      <Intro preview />
    </AbsoluteFill>
  )

  const showcaseRate = 1.52
  const fadeOutVolume = useI(
    [0, 55, 60],
    [1, 1, 0]
  )

  return (
    <AbsoluteFill style={{ backgroundColor: '#fff' }}>
      <Audio src={audio} />
      <Series>
        {frame(4, { fadeIn: false }, <Intro />)}
        {frame(7, {}, <Open />)}
        {frame(51 / showcaseRate, {}, <Showcase rate={showcaseRate} />)}
        {frame(14, {}, <Final />)}
      </Series>
    </AbsoluteFill>
  );
};


