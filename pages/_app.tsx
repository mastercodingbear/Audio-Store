import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import initializeFirebase from '../firebase';

function MyApp({ Component, pageProps }: AppProps) {
  initializeFirebase();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
