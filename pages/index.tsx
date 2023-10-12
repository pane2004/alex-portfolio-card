import { Footer } from "@/components/footer";
import { ProfileTerminal } from "@/components/terminal";

export default function Home() {
  return (
    <main className={`flex flex-col min-h-screen bg-gray-950`}>
      {/* Our SSH style card */}
      <section
        className={`flex flex-col flex-grow items-center justify-center p-24`}
      >
        <ProfileTerminal />
      </section>
      <Footer />
    </main>
  );
}
