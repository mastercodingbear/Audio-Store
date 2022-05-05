import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface PlayerControlsProps {
  audioURL: string;
}

const PlayerControls: React.FC<PlayerControlsProps> = (props) => {
  return (
    <div className="flex w-full">
      <AudioPlayer
        src={props.audioURL}
        showSkipControls
        autoPlayAfterSrcChange
      />
    </div>
  );
};

export default PlayerControls;
