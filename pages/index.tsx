import { HomeView } from "@/components/home/home";
import { commitData } from "@/types/types";

export default function Home({ commitData }: { commitData: commitData }) {
  return (
    <section
      className={`flex flex-col flex-grow items-center justify-center p-24`}
    >
      <HomeView commitData={commitData} />
    </section>
  );
}

// hydrate home page
export async function getServerSideProps() {
  const res = await fetch("https://alexlu.ca/api/latestcommit");
  const commitData = await res.json();
  return { props: { commitData } };
}
