import { Footer } from "@/components/footer";
import { ProfileTerminal } from "@/components/terminal";
import Image from "next/image";
import BG from "@/public/test2.jpeg";
import { commitData } from "@/types/types";

export default function Home({ commitData }: { commitData: commitData }) {
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
        <ProfileTerminal commitData={commitData}/>
      </section>
      <section className="z-10">
        <Footer />
      </section>
    </div>
  );
}

// hydrate home page
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/latestcommit");
  const commitData = await res.json();
  return { props: { commitData } };
}