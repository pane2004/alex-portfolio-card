import { Error, commitData, listCommitsRes } from "@/types/types";
import type { NextApiResponse } from "next";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

function formatData(response: listCommitsRes): commitData {
  if (response.status === 200) {
    return {
      commit: response.data[0].sha.slice(0, 8),
      link: response.data[0].url,
    };
  }
  return null;
}

export default async function handler(
  req: NextApiResponse,
  res: NextApiResponse<commitData | Error>
) {
  try {
    await octokit
      .request("GET /repos/pane2004/alex-portfolio-card/commits", {
        owner: "pane2004",
        repo: "alex-portfolio-card",
        per_page: 1,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((response) => {
        res.status(200).json(formatData(response as listCommitsRes));
      });
  } catch (e) {
    res.status(500).send({ error: `Error Fetching Github Data: ${e}` });
  }
}
