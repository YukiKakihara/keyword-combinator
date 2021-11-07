import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { imagePath } from 'utils/imagePath';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>複合キーワード生成</title>
        <meta
          name="description"
          content="最大100語までの複合キーワードを生成します"
        />
        <link rel="icon" href={imagePath('favicon.ico')} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
