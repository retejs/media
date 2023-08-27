import React from 'react';
import { AbsoluteFill, Series } from 'remotion';
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

export const GettingStarted: React.FC = () => {
  const frame = useFrames()

  return (
    <AbsoluteFill style={{ backgroundColor: '#fff' }}>
      <Series>
        {frame(5, { fadeOut: false }, <Website />)}
        {frame(8, { fadeIn: false }, <SearchKit />)}
        {frame(12, {}, <KitDocs />)}
        {frame(30, {}, <KitTerminal />)}
        {frame(10, {}, <RunAppTerminal />)}
        {frame(27, {}, <AppPreview />)}
        {frame(255, { color: 'black' }, <CodeReview />)}
        {frame(120, {}, <DocsFrame />)}
        {frame(12.7, {}, <Final />)}
      </Series>
    </AbsoluteFill>
  );
};


