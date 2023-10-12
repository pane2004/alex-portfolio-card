import { Footer } from "@/components/footer";
import { ProfileTerminal } from "@/components/terminal";
import Image from "next/image";
import BG from "@/public/bg.jpeg";

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen relative`}>
      <Image 
        src={BG} 
        layout="fill" 
        objectFit="cover"
        quality={100} 
        alt="Background Image" 
        priority={true}
        className="z-0"
      />
      {/* Terminal style card */}
      <section
        className={`flex flex-col flex-grow items-center justify-center p-24`}
      >
        <ProfileTerminal />
      </section>
      <section className="z-10">
        <Footer />
      </section>
    </div>
  );
}
