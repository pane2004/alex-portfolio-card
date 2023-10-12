import { Url } from "next/dist/shared/lib/router/router";
import { Endpoints } from "@octokit/types";

export type commitData = {
  commit: string;
  link: Url;
} | null;

export type Error = {
  error: string;
};

export type listCommitsRes =
  Endpoints["GET /repos/{owner}/{repo}/commits"]["response"];