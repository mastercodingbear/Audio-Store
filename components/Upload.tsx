// import firebase from "firebase";
import React, { useState } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  UploadResult,
} from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Upload = () => {
  const [audioTitle, setAudioTitle] = useState<string>('');
  const [audioURL, setAudioURL] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onAudioTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAudioTitle(e.target.value);
  };

  const audioFileChanged = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const music = e.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, `audios/${music.name}`);
    setIsUploading(true);

    uploadBytes(storageRef, music).then((snapshot: UploadResult) => {
      getDownloadURL(snapshot.ref).then((downloadURL: string) => {
        setAudioURL(downloadURL);
        setIsUploading(false);
      });
    });
  };

  React.useEffect(() => {
    if (audioURL !== null) {
      setIsUploading(false);
    }
  }, [audioURL]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const db = getFirestore();
    if (audioURL != null) {
      if (!audioTitle) {
        return;
      }
      setIsUploading(true);
      const newAudioRef = await addDoc(collection(db, 'audios'), {
        title: audioTitle,
        sourceURL: audioURL,
      });
      setIsUploading(false);
    }
  };
  return (
    <div className="flex flex-col h-64 border rounded-md shadow p-2 m-2">
      <form
        onSubmit={onSubmit}
        className="flex flex-col h-full items-center justify-between"
      >
        <div className="flex flex-col">
          <input
            type="file"
            name="music"
            onChange={audioFileChanged}
            className="my-2"
            required
          />
          <input
            type="text"
            placeholder="Audio Title"
            value={audioTitle}
            onChange={onAudioTitleChanged}
            className="my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-700 disabled:bg-slate-300 px-5 py-2 my-2 text-sm leading-5 rounded-full font-semibold text-white"
          disabled={isUploading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
