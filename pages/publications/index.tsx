import { TerminalNav } from "@/components/layout/nav";
import { Terminal } from "@/components/layout/terminal";
import { Timer } from "@/components/layout/timer";
import { TimeStamp } from "@/components/layout/timestamp";
import { PublicationLine } from "@/components/publications/publication";

export default function Publications() {
  return (
    <section
      className={`flex flex-col flex-grow items-center justify-center text-slate-400 p-24`}
    >
      <Terminal>
        <div className={`flex justify-between min-w-2xl`}>
          <span>
            [~] <a className="text-orange-400 font-bold">&lambda;</a> cat
            publications.txt
          </span>
          <TimeStamp />
        </div>
        <div className="py-2 space-y-2 min-w-2xl">
          <PublicationLine
            title="Accounting for (Dis)advantages in Capability Sensitive Design for Marginalized Communities"
            venue="CHI '26"
            time="Apr. 2026"
            authors="A. Maocheia-Ricci, N. Bin Hannan, C. Yang, Alex Lu, et al."
            highlight="Alex Lu"
            description="Built the applied AI for the newcomers app, including multilingual retrieval LLM agents and the AWS/Flask/Docker stack deployed in the field study."
            link="https://dl.acm.org/doi/full/10.1145/3772318.3790338"
          />
        </div>
        <TerminalNav />
        <Timer />
      </Terminal>
    </section>
  );
}
