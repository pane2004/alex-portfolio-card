import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type PublicationProps = {
  title: string;
  venue: string;
  time: string;
  authors: string;
  highlight: string;
  description: string;
  link: Url;
};

export function PublicationLine({
  title,
  venue,
  time,
  authors,
  highlight,
  description,
  link,
}: PublicationProps) {
  const parts = authors.split(highlight);

  return (
    <div className={`flex flex-col`}>
      <span className="flex flex-row justify-between items-start gap-4">
        <Link
          className={`text-lg text-teal-500 hover:underline font-bold min-w-0 max-w-2xl`}
          href={link}
          target="_blank"
        >
          {title}
        </Link>
        <span className="shrink-0">[{time}]</span>
      </span>
      <span className="font-medium">{venue}</span>
      <span className="text-sm font-normal max-w-lg">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="text-orange-400 font-bold">{highlight}</span>
            )}
          </span>
        ))}
      </span>
      <span className="text-sm font-normal max-w-lg pt-1">{description}</span>
    </div>
  );
}
