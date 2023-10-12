import { useEffect, useState } from "react";

export function Timer() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className={`flex justify-between min-w-2xl text-slate-400`}>
      <span>
        [~] <a className="text-orange-400 font-bold">&lambda;</a>{" "}
        <span className="border-r-[0.5em] border-solid ml-2"></span>
      </span>
      <span>{`[${time.toLocaleTimeString()}]`}</span>
    </div>
  );
}
