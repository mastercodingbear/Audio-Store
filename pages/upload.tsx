import React from 'react';
import Head from 'next/head';
import Upload from '../components/Upload';
const library = () => {
  return (
    <>
      <Head>
        <title>Upload Audio</title>
        <meta name="keywords" content="music, streaming, entertainment"></meta>
      </Head>
      <div className="flex flex-col grow items-center">
        <h1 className="text-xl p-3">Upload Audio</h1>
        <Upload />
      </div>
    </>
  );
};

export default library;
