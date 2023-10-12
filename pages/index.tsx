import { HomeView } from "@/components/home/home";
import { commitData } from "@/types/types";
import { useRef } from "react";

export default function Home({ commitData }: { commitData: commitData }) {
  const timeOnMount = useRef(new Date());

  return (
    <section
      className={`flex flex-col flex-grow items-center justify-center p-24`}
    >
      <HomeView commitData={commitData} time={timeOnMount.current} />
    </section>
  );
}

// hydrate home page
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/latestcommit");
  const commitData = await res.json();
  return { props: { commitData } };
}
