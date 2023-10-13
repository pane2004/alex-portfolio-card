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
        <Link
          href={commitData?.link ? commitData.link : "#"}
          className="underline"
          target="_blank"
        >
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
        <span className="text-teal-500">Github:{" "}</span>
        <Link
          href="https://github.com/pane2004"
          target="_blank"
          className="hover:underline"
        >
          @pane2004
        </Link>
      </li>
      <li>
        <span className="text-teal-500">LinkedIn:{" "}</span>
        <Link
          href="https://www.linkedin.com/in/alex-lu04"
          target="_blank"
          className="hover:underline"
        >
          @alex-lu04
        </Link>
      </li>
      <li>
        <span className="text-teal-500">Devpost:{" "}</span>
        <Link
          href="https://devpost.com/alexlu2000clash?"
          target="_blank"
          className="hover:underline"
        >
          @alexlu2000clash
        </Link>
      </li>
      <li>
        <span className="text-teal-500">Youtube:{" "}</span>
        <Link
          href="https://www.youtube.com/@alexlu1745"
          target="_blank"
          className="hover:underline"
        >
          @Alex Lu
        </Link>
      </li>
      <li>
        <span className="text-teal-500">Discord:{" "}</span>
        <Link
          href="https://discord.gg/4bwUVyuz9"
          target="_blank"
          className="hover:underline"
        >
          @eanp
        </Link>
      </li>
      <li>
        <span className="opacity-0">s</span>
      </li>
      <li>
        <span className="text-teal-500">Email:{" "}</span>
        <Link
          href="mailto:a25lu@uwaterloo.ca"
          className="hover:underline"
        >
          alex.lu@uwaterloo.ca
        </Link>
      </li>
    </ul>
  );
}
