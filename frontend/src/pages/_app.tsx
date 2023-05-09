import Head from 'next/head'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Layout from '@/layout/Layout'
import '@/styles/globals.css'
import { UserContextProvider } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Layout>
        <Head>
          <title>
            Parceiro de treino
          </title>
          <meta name="description" content="Encontre um parceiro de treino para ajudá-lo a atingir seus objetivos de condicionamento físico." />
          <meta name="keywords" content="parceiro de treino, academia, condicionamento físico, exercícios" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <NextNProgress color="#1aac83" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      </Layout>
    </UserContextProvider>
  )
}
