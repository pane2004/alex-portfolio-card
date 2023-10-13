import Image, { ImageProps } from "next/image";
import { Terminal } from "../layout/terminal";
import Link from "next/link";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Url } from "next/dist/shared/lib/router/router";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CardProps = {
  name: string;
  image: string | StaticImport;
  link: Url;
  repo: Url;
  about: string;
  tags: string;
};

export function ProjectCard({
  name,
  image,
  link,
  repo,
  about,
  tags,
}: CardProps) {
  return (
    <div className="max-w-md">
      <Terminal>
        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a> git status
        </span>
        <div className="flex flex-row items-center">
          <Image
            src={image}
            height={100}
            alt={name}
            className="rounded-lg p-2"
          />
          <div className="flex flex-col">
            <Link
              href={link}
              className="flex flex-row items-center text-teal-500 hover:underline"
              target="_blank"
            >
              <span className="text-2xl font-bold mr-2">{name}</span>
              <FaUpRightFromSquare />
            </Link>
            <span className="max-w-sm text-sm">{about}</span>
          </div>
        </div>
        <div className="text-sky-300">{tags}</div>

        <span>
          [~] <a className="text-orange-400 font-bold">&lambda;</a> git fetch{" "}
          <Link href={repo} className="hover:underline" target="_blank">
            {`${name}.git`}
          </Link>
        </span>
      </Terminal>
    </div>
  );
}
