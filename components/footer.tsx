import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={`flex flex-col max-w-5xl mx-auto items-center text-white p-4`}>
      <span>Made with ❤️ by Alex Lu. Pictured: Me in the Wadi Rum Desert</span>
      <Link href={`#`}>
        <span className={`flex flex-row items-center underline`}>
          <FaGithub className={`mr-2`} />
          Website Repository
        </span>
      </Link>
    </footer>
  );
}
