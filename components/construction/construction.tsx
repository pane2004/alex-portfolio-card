import { TerminalNav } from "../layout/nav";
import { Terminal } from "../layout/terminal";
import { Timer } from "../layout/timer";
import { TimeStamp } from "../layout/timestamp";
import { CowsayConstruction } from "./cowsay";

export function Construction() {
  return (
    <section
      className={`flex flex-col flex-grow items-center justify-center text-slate-400 p-24`}
    >
      <Terminal>
        <div className={`flex justify-between min-w-2xl`}>
          <span>
            [~] <a className="text-orange-400 font-bold">&lambda;</a> cowsay
            &quot;under construction!&quot;
          </span>
          <TimeStamp />
        </div>
        <CowsayConstruction text={"under construction!"} />
        <TerminalNav />
        <Timer />
      </Terminal>
    </section>
  );
}
