import { ExperienceLine } from "@/components/experience/experience";
import { TerminalNav } from "@/components/layout/nav";
import { Terminal } from "@/components/layout/terminal";
import { Timer } from "@/components/layout/timer";
import Link from "next/link";
import { useRef } from "react";

export default function Experience() {
  const timeOnMount = useRef(new Date());

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
          <span>{`[${timeOnMount.current.toLocaleTimeString()}]`}</span>
        </div>
        <div className="py-2 space-y-2 min-w-6xl">
          <ExperienceLine
            company="Coinbase AM"
            time="Sep. 2024 - Present"
            role="Software Engineering Intern"
            description="Directly Responsible Engineer for the Diamond Excel Add-In project, building internal foundry tooling, and working on on-chain financial market POCs."
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
            description='Built the newcomers app research project frontend from scratch using React Native, GitlabCI, and Expo. Led all AI deployments and integrations using AWS, Flask, and Docker. Received "Outstanding" work term evaluation.'
            link="https://cs.uwaterloo.ca/news/professor-edith-law-receives-graham-seed-fund-field-test"
          />
          <ExperienceLine
            company="Query-It"
            time="May 2023 - Aug. 2023"
            role="Software Developer Intern"
            description='Delivered critical features using React.js, Firebase, and the GCP
            suite. Received "Outstanding" work term evaluation.'
            link="https://queryitapp.com"
          />
          <ExperienceLine
            company="Kinoto"
            time="Jun. 2022 - Aug. 2022"
            role="Data Developer"
            description="Significantly improved merchant data analytics with custom Python Scripts and MS Power BI migration."
            link="https://kinoto.ca"
          />
          <ExperienceLine
            company="MyGrant Canada"
            time="Mar. 2021 - Mar. 2022"
            role="Co-Founder"
            description="Led team to develop tool for businesses to find grants during the pandemic. Raised $4000+ in funding for project."
            link="https://mygrant.ca"
          />
        </div>
        <TerminalNav time={timeOnMount.current} />
        <Timer />
      </Terminal>
    </section>
  );
}
