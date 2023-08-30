import React from 'react';
import { AbsoluteFill, Series, Audio, useVideoConfig, interpolate, useCurrentFrame } from 'remotion';
import { useFrames } from '../shared/frames'
import { Final } from '../shared/frames/final';
import { Website } from './frames/website';
import { SearchKit } from './frames/search-kit';
import { DocsFrame } from './frames/docs';
import { CodeReview } from './frames/code-review';
import { AppPreview } from './frames/app-preview';
import { KitTerminal } from './frames/kit-terminal';
import { KitDocs } from './frames/kit-docs';
import { RunAppTerminal } from './frames/run-app-terminal';
import audioFile from '../../assets/getting-started/audio/audio.mp3'
import audioBackgroundFile from '../../assets/getting-started/audio/background.mp3'

export const GettingStarted: React.FC = () => {
  const frame = useFrames()
  const currentFrame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()
  const volume = interpolate(currentFrame, [0, durationInFrames - fps * 12, durationInFrames], [1, 1, 0.3])

  return (
    <AbsoluteFill style={{ backgroundColor: '#fff' }}>
      <Audio src={audioFile} startFrom={30} volume={volume} endAt={durationInFrames} />
      <Audio src={audioBackgroundFile} startFrom={0} volume={0.25 + (1 - volume)} />
      <Series>
        {frame(12, { fadeOut: false }, <Website />)}
        {frame(8, { fadeIn: false }, <SearchKit />)}
        {frame(12, {}, <KitDocs />)}
        {frame(32, {}, <KitTerminal />)}
        {frame(12, {}, <RunAppTerminal />)}
        {frame(26, {}, <AppPreview />)}
        {frame(256, { color: 'black' }, <CodeReview />)}
        {frame(119, {}, <DocsFrame />)}
        {frame(12, {}, <Final />)}
      </Series>
    </AbsoluteFill>
  );
};


