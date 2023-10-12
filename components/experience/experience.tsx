import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type ExperienceProps = {
  company: string;
  time: string;
  role: string;
  description: string;
  link: Url;
};

export function ExperienceLine({
  company,
  time,
  role,
  description,
  link,
}: ExperienceProps) {
  return (
    <div className={`flex flex-col font-bold`}>
      <span className="flex flex-row justify-between">
        <Link
          className={`text-lg text-teal-500 hover:underline`}
          href={link}
          target="_blank"
        >
          {company}
        </Link>
        [{time}]
      </span>
      {role}
      <span className="text-sm font-normal max-w-lg">{description}</span>
    </div>
  );
}
