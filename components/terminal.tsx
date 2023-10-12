import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { ArchLogo } from "./art";

const OPTIONS = {
  scale: 1.1,
  speed: 300,
  max: 3,
  glare: true,
  "max-glare": 0.4,
};

export function ProfileTerminal() {
  const tilt = useRef(null);
  const [time, setTime] = useState<Date>(new Date());
  const timeOnMount = useRef(new Date());

  useEffect(() => {
    if (tilt.current !== null) {
      return VanillaTilt.init(tilt.current, OPTIONS);
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div
      ref={tilt}
      className={`min-w-[50%] bg-gray-800 rounded-lg p-5`}
      style={{ backgroundColor: "rgba(31, 41, 55, 0.3)" }}
    >
      <div className={`flex justify-between min-w-2xl text-slate-400`}>
        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a> neofetch
        </span>
        <span>{`[${timeOnMount.current.toLocaleTimeString()}]`}</span>
      </div>
      <div className={`flex flex-row justify-between min-w-2xl`}>
        <ArchLogo />
        <ArchLogo />
      </div>
      <div className={`flex justify-between min-w-2xl text-slate-400`}>
        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a>{" "}
          <span className="border-r-[0.5em] border-solid ml-2"></span>
        </span>
        <span>{`[${time.toLocaleTimeString()}]`}</span>
      </div>
    </div>
  );
}
