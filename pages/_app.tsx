import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../components/Common/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Hamza Chikhi — AI Product Engineer</title>
        <meta name="description" content="AI Product Engineer & Fullstack Developer specializing in production-ready AI workflows, scalable architectures, and clean UX." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-dark-900">
        <NavBar />
        <main>
          <Component key={router.asPath} {...pageProps} />
        </main>
        <footer className="border-t border-white/5 py-8 text-center text-gray-600 text-sm">
          <p>Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
