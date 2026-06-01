import Link from "next/link";
import { TimeStamp } from "./timestamp";

export function TerminalNav() {
  return (
    <>
      <div className={`flex justify-between min-w-2xl text-slate-400`}>
        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a> ls
        </span>
        <TimeStamp />
      </div>
      <div
        className={`flex justify-between min-w-2xl text-slate-400 text-sm sm:text-base`}
      >
        <Link href={"/"} className="hover:underline">
          home
        </Link>
        <Link href={"/experience"} className="hover:underline">
          experience
        </Link>
        <Link href={"/projects"} className="hover:underline">
          projects
        </Link>
        <Link href={"/sandbox"} className="hover:underline">
          publications
        </Link>
        <TimeStamp />
      </div>
    </>
  );
}
