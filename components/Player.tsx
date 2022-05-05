import React from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import { Audio } from './AudioList';

interface MusicPlayerProps {
  audio: Audio;
}

const Player: React.FC<MusicPlayerProps> = (props) => {
  return (
    <div className="flex flex-col grow bg-gray-800 items-center justify-end">
      <audio></audio>
      <PlayerDetails title={props.audio.title} />
      <PlayerControls audioURL={props.audio.sourceURL} />
    </div>
  );
};

export default Player;
