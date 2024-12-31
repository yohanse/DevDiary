import * as vscode from "vscode";
import { GitHubRepository } from "./interfaces/githubRepository";

export default async (accessToken: string) : Promise<GitHubRepository[]>=> {
    const { Octokit } = await import("@octokit/rest");

    const octokit = new Octokit({
        auth: accessToken,
      });
    
    try {
        const { data } = await octokit.repos.listForAuthenticatedUser({
          type: "owner",
        });
    
        const repositories: GitHubRepository[] = data as GitHubRepository[];

        return repositories;
        }
    catch (error) {
        throw new Error("Failed to list out respositories");
      }
};