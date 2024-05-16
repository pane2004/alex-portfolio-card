import { commitData } from "@/types/types";
import { useReducer, useRef } from "react";
import { ArchLogo } from "./art";
import { ProfileInfo } from "./info";
import { TerminalNav } from "../layout/nav";
import { Timer } from "../layout/timer";
import { Terminal } from "../layout/terminal";

export function HomeView({ commitData, time }: { commitData: commitData, time: Date }) {
  return (
    <Terminal>
      <div className={`flex justify-between min-w-2xl text-slate-400`}>
        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a> neofetch
        </span>
        <span>{`[${time.toLocaleTimeString()}]`}</span>
      </div>
      <div className={`flex flex-col sm:flex-row overflow-auto gap-4`}>
        <ArchLogo />
        <ProfileInfo commitData={commitData} />
      </div>
      <TerminalNav time={time} />
      <Timer />
    </Terminal>
  );
}
