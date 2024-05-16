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
      <li className="max-w-lg overflow-hidden">
        <span className="text-teal-500">Bio:</span> Software developer and
        researcher exploring Human-Computer Interaction, Web Accessibility, LLMs.
      </li>
      <li>
        <span className="text-teal-500">Education:</span> CS Student at the
        University of Waterloo
      </li>
      <li>
        <span className="opacity-0">s</span>
      </li>
      <li className="max-w-lg overflow-hidden">
        <span className="text-teal-500">Experience:</span> Prev. Research Dev
        @UWaterloo HCI, Fullstack SWE @Query-It, Data Dev @Kinoto
      </li>
      <li className="max-w-lg overflow-hidden">
        <span className="text-teal-500">Technologies:</span> React, Node, Next,
        Django, PyTorch, Numpy, Pandas, Postgres, MongoDB, Firebase, Docker,
        Linux, GCP, Azure, AWS, Web3
      </li>
      <li>
        <span className="text-teal-500">Hobbies:</span> Travelling, Hackathons,
        Leathercraft
      </li>
      <li>
        <span className="opacity-0">s</span>
      </li>
      <li>
        <span className="text-teal-500">Github: </span>
        <Link
          href="https://github.com/pane2004"
          target="_blank"
          className="hover:underline"
        >
          @pane2004
        </Link>
      </li>
      <li>
        <span className="text-teal-500">LinkedIn: </span>
        <Link
          href="https://www.linkedin.com/in/alex-lu04"
          target="_blank"
          className="hover:underline"
        >
          @alex-lu04
        </Link>
      </li>
      <li>
        <span className="text-teal-500">Devpost: </span>
        <Link
          href="https://devpost.com/alexlu2000clash?"
          target="_blank"
          className="hover:underline"
        >
          @alexlu2000clash
        </Link>
      </li>
      <li>
        <span className="opacity-0">s</span>
      </li>
      <li>
        <span className="text-teal-500">Email: </span>
        <Link href="mailto:a25lu@uwaterloo.ca" className="hover:underline">
          alex.lu@uwaterloo.ca
        </Link>
      </li>
    </ul>
  );
}
