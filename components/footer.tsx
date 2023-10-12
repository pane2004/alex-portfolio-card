import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      className={`flex flex-col max-w-5xl mx-auto items-center text-white p-4`}
    >
      <span>Pictured: Me in the Wadi Rum Desert</span>
      <span className="flex flex-row">
        Made with ❤️ by Alex Lu.
        <Link href={"https://github.com/pane2004/alex-portfolio-card"} target="_blank">
          <span className={`flex flex-row items-center underline`}>
            <FaGithub className={`mr-2`} />
            Repository
          </span>
        </Link>
      </span>
    </footer>
  );
}
