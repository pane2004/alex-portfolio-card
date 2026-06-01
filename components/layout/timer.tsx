import { TimeStamp } from "./timestamp";

export function Timer() {
  return (
    <div className={`flex justify-between min-w-2xl text-slate-400`}>
      <span>
        [~] <a className="text-orange-400 font-bold">&lambda;</a>{" "}
        <span className="border-r-[0.5em] border-solid ml-2 animate-blink"></span>
      </span>
      <TimeStamp tick />
    </div>
  );
}
