import Head from 'next/head';
import Player from '../components/Player';
import { useState } from 'react';
import AudioList, { Audio } from '../components/AudioList';

export default function Home() {
  const [selectedAudio, setSelectedAudio] = useState<Audio>({
    title: '',
    sourceURL: '',
  });

  const onSelectAudio = (audio: Audio) => {
    setSelectedAudio(audio);
  };

  return (
    <>
      <Head>
        <title>Audio Store</title>
        <meta name="keywords" content="music, streaming, entertainment"></meta>
      </Head>
      <div className="flex grow">
        <AudioList onSelectAudio={onSelectAudio} />
        <Player audio={selectedAudio} />
      </div>
    </>
  );
}
