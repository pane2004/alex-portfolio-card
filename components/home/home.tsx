import { commitData } from "@/types/types";
import { ArchLogo } from "./art";
import { ProfileInfo } from "./info";
import { TerminalNav } from "../layout/nav";
import { Timer } from "../layout/timer";
import { Terminal } from "../layout/terminal";
import { TimeStamp } from "../layout/timestamp";

export function HomeView({ commitData }: { commitData: commitData }) {
  return (
    <Terminal>
      <div className={`flex justify-between min-w-2xl text-slate-400`}>
        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a> neofetch
        </span>
        <TimeStamp />
      </div>
      <div className={`flex flex-col sm:flex-row overflow-auto gap-4`}>
        <ArchLogo />
        <ProfileInfo commitData={commitData} />
      </div>
      <TerminalNav />
      <Timer />
    </Terminal>
  );
}
