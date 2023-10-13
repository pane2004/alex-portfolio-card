import { TerminalNav } from "@/components/layout/nav";
import { Terminal } from "@/components/layout/terminal";
import { Timer } from "@/components/layout/timer";
import { ProjectGrid } from "@/components/projects/grid";
import { useRef } from "react";

export default function Experience() {
  const timeOnMount = useRef(new Date());

  return (
    <section
      className={`flex flex-col flex-grow items-center justify-center text-slate-400 p-24 space-y-5`}
    >
      <ProjectGrid />
      <Terminal>
        <TerminalNav time={timeOnMount.current} />
        <Timer />
      </Terminal>
    </section>
  );
}
