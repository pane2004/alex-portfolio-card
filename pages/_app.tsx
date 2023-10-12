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
      className={`flex flex-col min-h-screen relative ${jetBrains.className}`}
    >
      <Image
        src={BG}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background Image"
        priority={true}
        className="z-0"
      />
      <Component {...pageProps} />
      <section className="z-10">
        <Footer />
      </section>
    </main>
  );
}
