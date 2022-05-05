import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

interface AudioListProps {
  onSelectAudio: (audio: Audio) => void;
}
export interface Audio {
  title: string;
  sourceURL: string;
}

const AudioList: React.FC<AudioListProps> = (props) => {
  const [audioList, setAudioList] = useState<Audio[]>([]);
  const [playing, setPlaying] = useState('');

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, 'audios'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const audios: Audio[] = [];
      querySnapshot.forEach((doc) => {
        audios.push({
          title: doc.data().title,
          sourceURL: doc.data().sourceURL,
        });
      });
      setAudioList(audios);
    });
  }, []);

  const onSelectAudio = (audio: Audio) => {
    props.onSelectAudio(audio);
  };

  return (
    <div className="flex flex-col shadow h-full w-72">
      <ul className="divide-y divide-slate-200">
        {audioList.map((audio) => (
          <li
            key={audio.title}
            onClick={() => onSelectAudio(audio)}
            className="py-2 hover:bg-slate-500 active:bg-slate-500 group flex"
          >
            <div className="flex items-center ml-3 py-2 overflow-hidden">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 21.797 21.797"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    style={{ fill: '#010002' }}
                    d="M10.653,8.76l8.145-1.321v11.043c0,0.914-0.681,1.644-1.744,1.913
		c-1.168,0.289-2.294-0.2-2.519-1.095c-0.224-0.897,0.541-1.858,1.708-2.15c0.527-0.13,1.047-0.103,1.481,0.05v-6.654l-5.969,1.092
		l-0.028,8.276c-0.005,0.783-0.713,1.554-1.729,1.805c-1.153,0.289-2.363-0.26-2.492-1.081c-0.221-0.886,0.534-1.837,1.691-2.127
		c0.52-0.13,1.029-0.104,1.456,0.046V8.76z M7.591,12.81L7.62,2.581c0,0,2.228-0.119,4.407,3.298c0,0,0.006-1.764-1.669-3.055
		C7.087,0.54,7.096,0,7.096,0C6.472,0.073,6.408,0.547,6.408,0.547v10.771c-0.468-0.164-1.028-0.193-1.602-0.05
		c-1.27,0.314-2.1,1.363-1.857,2.338c0.143,0.901,1.471,1.506,2.74,1.187c1.115-0.278,1.894-1.12,1.9-1.983H7.591z M13.515,6.2
		c0.388-0.097,0.659-0.39,0.661-0.69h0.001l0.01-3.559c0,0,0.775-0.041,1.533,1.148c0,0,0.001-0.614-0.582-1.062
		C14,1.242,14.004,1.054,14.004,1.054c-0.217,0.025-0.24,0.19-0.24,0.19v3.748c-0.162-0.058-0.356-0.068-0.556-0.019
		c-0.443,0.109-0.73,0.475-0.646,0.814C12.612,6.101,13.074,6.311,13.515,6.2z M17.355,6.209c0.27-0.067,0.458-0.272,0.46-0.481
		l0.007-2.479c0,0,0.54-0.029,1.068,0.799c0,0,0.001-0.428-0.404-0.74c-0.793-0.554-0.791-0.685-0.791-0.685
		c-0.151,0.018-0.167,0.133-0.167,0.133v2.611c-0.113-0.04-0.249-0.047-0.388-0.012c-0.308,0.076-0.509,0.33-0.45,0.566
		C16.724,6.14,17.046,6.287,17.355,6.209z"
                  />
                </g>
              </svg>
              <p className="text-xl font-medium text-slate-900 group-hover:text-white ml-2">
                {audio.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioList;
