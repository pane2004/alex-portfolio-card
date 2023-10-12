import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { ArchLogo } from "./art";
import { ProfileInfo } from "./info";
import Link from "next/link";
import { Timer } from "./timer";
import { commitData } from "@/types/types";

const OPTIONS = {
  scale: 1.1,
  speed: 300,
  max: 3,
  glare: true,
  "max-glare": 0.2,
};

export function ProfileTerminal({ commitData }: { commitData: commitData }) {
  const tilt = useRef(null);
  const timeOnMount = useRef(new Date());

  useEffect(() => {
    if (tilt.current !== null) {
      return VanillaTilt.init(tilt.current, OPTIONS);
    }
  }, []);

  return (
    <div
      ref={tilt}
      className={`min-w-[50%] bg-gray-800 rounded-lg overflow-auto p-5`}
      style={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
    >
      <div className={`flex justify-between min-w-2xl text-slate-400`}>
        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a> neofetch
        </span>
        <span>{`[${timeOnMount.current.toLocaleTimeString()}]`}</span>
      </div>
      <div className={`flex flex-row overflow-auto`}>
        <ArchLogo />
        <ProfileInfo commitData={commitData}/>
      </div>
      <div className={`flex justify-between min-w-2xl text-slate-400`}>
        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a> ls
        </span>
        <span>{`[${timeOnMount.current.toLocaleTimeString()}]`}</span>
      </div>
      <div className={`flex justify-between min-w-2xl text-slate-400`}>
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
          sandbox
        </Link>
        <span>{`[${timeOnMount.current.toLocaleTimeString()}]`}</span>
      </div>
      <Timer />
    </div>
  );
}
