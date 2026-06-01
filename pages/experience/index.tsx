import { ExperienceLine } from "@/components/experience/experience";
import { TerminalNav } from "@/components/layout/nav";
import { Terminal } from "@/components/layout/terminal";
import { Timer } from "@/components/layout/timer";
import { TimeStamp } from "@/components/layout/timestamp";

export default function Experience() {
  return (
    <section
      className={`flex flex-col flex-grow items-center justify-center text-slate-400 p-24`}
    >
      <Terminal>
        <div className={`flex justify-between min-w-2xl`}>
          <span>
            [~] <a className="text-orange-400 font-bold">&lambda;</a> cat
            experience.txt
          </span>
          <TimeStamp />
        </div>
        <div className="py-2 space-y-2 min-w-6xl">
        <ExperienceLine
            company="Coinbase"
            time="May 2025 - Present"
            role="Software Engineering"
            description="Building Applied AI and Advanced EVM Transactions on the Base App, deployed to millions of users."
            link="https://www.coinbase.com/"
          />
          <ExperienceLine
            company="Coinbase AM"
            time="Sep. 2024 - Dec. 2024"
            role="Software Engineering Intern"
            description="DRE for the Diamond Excel Add-In, building internal foundry tooling, and working on on-chain financial market POCs."
            link="https://www.coinbase.com/en-ca/blog/coinbase-and-coinbase-asset-management-announce-project-diamond-a-smart"
          />
          <ExperienceLine
            company="University of Waterloo HCI"
            time="May 2024 - Present"
            role="Undergraduate Research Assistant"
            description="Designing multilingual in-context retrieval LLM agents and maintaining newcomers app research project for field study."
            link="https://edithlaw.ca/people.html"
          />
          <ExperienceLine
            company="University of Waterloo HCI"
            time="Jan. 2024 - Apr. 2024"
            role="HCI Researcher and Developer Co-op"
            description='Led all AI deployments and integrations using AWS, Flask, and Docker for the newcomers app research project.'
            link="https://cs.uwaterloo.ca/news/professor-edith-law-receives-graham-seed-fund-field-test"
          />
          <ExperienceLine
            company="Query-It"
            time="May 2023 - Aug. 2023"
            role="Software Developer Intern"
            description='Delivered big features using React, Firebase, and GCP'
            link="https://queryitapp.com"
          />
        </div>
        <TerminalNav />
        <Timer />
      </Terminal>
    </section>
  );
}
