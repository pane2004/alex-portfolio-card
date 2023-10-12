import { commitData } from "@/types/types";
import Link from "next/link";

export function ProfileInfo({ commitData }: { commitData: commitData }) {
  return (
    <ul className="text-left text-sky-300">
      <li>
        <span className="text-teal-500">OS:</span> Alex&apos;s Portfolio
      </li>
      <li>
        <span className="text-teal-500">Kernel:</span> Commit {" #"}
        <Link href={commitData?.link ? commitData.link : "#"} className="underline" target="_blank">
          {commitData?.commit}
        </Link>
      </li>
      <li>
        <span className="opacity-0">s</span>
      </li>
      <li>
        <span className="text-teal-500">Name:</span> Alex Lu
      </li>
      <li>
        <span className="text-teal-500">Title:</span> Fullstack Developer
      </li>
      <li>
        <span className="text-teal-500">Education:</span> Sophomore CS Student
        @UWaterloo
      </li>
      <li>
        <span className="text-teal-500">Experience:</span> Prev. SWE @Query-It,
        @Kinoto
      </li>
      <li className="max-w-lg overflow-hidden">
        <span className="text-teal-500">Technologies:</span> React, Node, Next,
        Python Scripting, MongoDB, Firebase, Docker, Linux, GCP, AWS, Web3
      </li>
      <li>
        <span className="text-teal-500">Interests:</span> Blockchain, UX Design,
        Microservices
      </li>
      <li>
        <span className="text-teal-500">Hobbies:</span> Travelling, Hackathons,
        Leathercraft
      </li>
      <li>
        <span className="opacity-0">s</span>
      </li>
      <li>
        <span className="text-teal-500">Github:</span> @pane2004
      </li>
      <li>
        <span className="text-teal-500">LinkedIn:</span> @alex-lu04
      </li>
      <li>
        <span className="text-teal-500">Devpost:</span> @alexlu2000clash
      </li>
      <li>
        <span className="text-teal-500">Youtube:</span> @alexlu2000clash
      </li>
      <li>
        <span className="text-teal-500">Discord:</span> @eanp
      </li>
      <li>
        <span className="opacity-0">s</span>
      </li>
      <li>
        <span className="text-teal-500">Email:</span> alex.lu@uwaterloo.ca
      </li>
    </ul>
  );
}
