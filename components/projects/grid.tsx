import Link from "next/link";
import { Terminal } from "../layout/terminal";
import Image from "next/image";
import { ProjectCard } from "./card";
// images
import DBEATS from "@/public/projects/dbeats.png";
import WOTION from "@/public/projects/wotion.png";
import PYTHON from "@/public/projects/python.png";
import WWPP from "@/public/projects/ww.png";

export function ProjectGrid() {
  return (
    <div className={`grid sm:grid-cols-2 gap-6`}>
      <ProjectCard
        name={"dBeats"}
        image={DBEATS}
        link={"https://ethglobal.com/showcase/dbeats-3zfou"}
        repo={"https://github.com/pane2004/dbeats"}
        about={
          "dBeats, a web3 DJ suite and marketplace powered by ERC-721. Built at ETHGlobal NYC 2023. Winner of $6000+ in prizes."
        }
        tags={
          "<<React.js>> <<TailwindCSS>> <<Node.js>> <<Hardhat>> <<Solidity>> <<OAuth>>"
        }
      />
      <ProjectCard
        name={"Wotion.co"}
        image={WOTION}
        link={"https://wotion.co"}
        repo={"https://github.com/pane2004/wotion"}
        about={
          "Wotion is an open-source library of fully customizable, dynamic widgets for Notion. 10,000+ Users, 50+ Github Stars."
        }
        tags={
          "<<React.js>> <<Chakra UI>> <<Node.js>> <<MongoDB>> <<Axios>> <<REST API>>"
        }
      />
      <ProjectCard
        name={"DriveTestFinder"}
        image={PYTHON}
        link={"https://github.com/pane2004/drivetestfinder"}
        repo={"https://github.com/pane2004/drivetestfinder"}
        about={
          "A Selenium Python script that scrapes cancelled Ontario G1/G2 test openings and notifies the user via SMS/Phone Call. Used it to book my G2 next day!"
        }
        tags={
          "<<Python>> <<Selenium>> <<Chromium>> <<Twilio>> <<HTML Parsing>>"
        }
      />
      <ProjectCard
        name={"WasteWizard++"}
        image={WWPP}
        link={"https://youtu.be/yNw7NB4Ar8I"}
        repo={"https://github.com/pane2004/wastewizardpp"}
        about={
          "A cross-platform waste classifier mobile app for Region of Peel residents. Datasets and ML models developed from scratch."
        }
        tags={
          "<<Tensorflow>> <<Flutter>> <<MUI>> <<Mobile>> <<Selenium>> <<Firebase>>"
        }
      />
    </div>
  );
}
