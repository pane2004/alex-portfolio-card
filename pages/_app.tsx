import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import BG from "@/public/test2.jpeg";
import { Footer } from "@/components/footer";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`flex flex-col h-screen overflow-hidden relative ${jetBrains.className}`}
    >
      <Image
        src={BG}
        alt="Background Image"
        fill
        quality={100}
        priority
        className="object-cover z-0"
      />
      <div className="z-10 flex flex-col flex-grow min-h-0 overflow-y-auto">
        <Component {...pageProps} />
      </div>
      <section className="z-10 shrink-0">
        <Footer />
      </section>
    </main>
  );
}
