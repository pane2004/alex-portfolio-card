import { TerminalNav } from "@/components/layout/nav";
import { Terminal } from "@/components/layout/terminal";
import { Timer } from "@/components/layout/timer";
import { ProjectGrid } from "@/components/projects/grid";

export default function Experience() {
  return (
    <section
      className={`flex flex-col flex-grow items-center justify-center text-slate-400 p-24 space-y-5`}
    >
      <ProjectGrid />
      <Terminal>
        <TerminalNav />
        <Timer />
      </Terminal>
    </section>
  );
}
