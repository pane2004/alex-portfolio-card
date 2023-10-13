import { useRef } from "react";
import { TerminalNav } from "../layout/nav";
import { Terminal } from "../layout/terminal";
import { Timer } from "../layout/timer";
import { CowsayConstruction } from "./cowsay";

export function Construction() {
  const timeOnMount = useRef(new Date());

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
          <span>{`[${timeOnMount.current.toLocaleTimeString()}]`}</span>
        </div>
        <CowsayConstruction text={"under construction!"} />
        <TerminalNav time={timeOnMount.current} />
        <Timer />
      </Terminal>
    </section>
  );
}
