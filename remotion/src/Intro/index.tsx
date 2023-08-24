import React from 'react';
import { AbsoluteFill, Series, Audio } from 'remotion';
import chatbot from '../../assets/chatbot.mp4'
import video3d from '../../assets/3d.mp4'
import codegen from '../../assets/codegen.mp4'
import arrangeVideo from '../../assets/arrange.mp4'
import minimapVideo from '../../assets/minimap.mp4'
import engineVideo from '../../assets/engine.mp4'
import scopesVideo from '../../assets/scopes.mp4'
import undirectedVideo from '../../assets/undirected.mp4'
import { CaptionFrame } from '../shared/CaptionFrame';
import { useFrames } from '../shared/frames';
import { ShowcaseVideo } from '../shared/ShowcaseVideo';
import { Showcase } from '../shared/Showcase';
import { LogoFrame } from './frames/logo';
import { Examples } from './frames/examples';

import audioFile from '../../assets/audio.mp3'
import { IntegrationFeature } from './frames/integration';
import { StructuresFeature } from './frames/structures';
import { HistoryFeature } from './frames/history';

export const Intro: React.FC = () => {
  const frame = useFrames()

  return (
    <AbsoluteFill style={{ backgroundColor: '#fff' }}>
      <Audio src={audioFile} startFrom={10} />
      <Series>
        {frame(5, 'white', <LogoFrame />)}
        {frame(3, 'white', <CaptionFrame title="Unleash the power of visual programming" />)}
        {frame(6.5, 'white', <Showcase title="Create tailorable visual interfaces">
          <ShowcaseVideo src={chatbot} start={0.1} rate={1.5} />
        </Showcase>)}
        {frame(5.5, 'black', <Showcase title="Enhance node editor with 3D embedding">
          <ShowcaseVideo src={video3d} start={0.5} rate={1.9} />
        </Showcase>)}
        {frame(6.7, 'white', <Showcase title="Bridge textual and visual programming via code generation">
          <ShowcaseVideo src={codegen} start={0.5} rate={1.4} />
        </Showcase>)}
        {frame(2, 'white', <CaptionFrame title={<>Advantages<br />&<br />Features</>} />)}
        {frame(4.5, 'white', <Showcase title="Integration with frameworks">
          <IntegrationFeature />
        </Showcase>)}
        {frame(6, 'white', <Showcase title="Extensive customization capabilities">
          <ShowcaseVideo src={undirectedVideo} start={0.2} rate={1} />
        </Showcase>)}
        {frame(7.5, 'white', <Showcase title="Built-in dataflow & control flow capabilities">
          <ShowcaseVideo src={engineVideo} start={0.6} rate={1} />
        </Showcase>)}
        {frame(5.5, 'white', <Showcase title="Graph layouting">
          <ShowcaseVideo src={arrangeVideo} start={1} rate={0.8} />
        </Showcase>)}
        {frame(5.5, 'white', <Showcase title="Minimap">
          <ShowcaseVideo src={minimapVideo} start={0.6} rate={1.2} />
        </Showcase>)}
        {frame(6.7, 'white', <Showcase title="Parent-child node relationships">
          <ShowcaseVideo src={scopesVideo} start={0.2} rate={1} />
        </Showcase>)}
        {frame(7.5, 'white', <Showcase title="Undo/redo">
          <HistoryFeature />
        </Showcase>)}
        {frame(7, 'white', <Showcase title="Graph methods">
          <StructuresFeature />
        </Showcase>)}
        {frame(12.7, 'white', <AbsoluteFill>
          <Examples />
        </AbsoluteFill>)}
      </Series>
    </AbsoluteFill>
  );
};


