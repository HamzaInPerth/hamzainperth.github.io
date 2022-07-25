import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NavBar from "../components/Common/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="bg-custom-white w-full">
      <div
        className="w-full pb-10  mx-auto grid grid-cols-1 md:grid-cols-12 tracking-widest"
        style={{ maxWidth: "1480px" }}
      >
        <div className="xl:col-span-2  md:col-span-3">
          <NavBar dark-mode={false} />
        </div>
        <div className="xl:col-span-10 md:col-span-9">
          <Component key={router.asPath} {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
