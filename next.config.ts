import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repositoryName.endsWith(".github.io");
const inferredBasePath =
  isGitHubPagesBuild && repositoryName && !isUserOrOrgSite ? `/${repositoryName}` : "";
const basePath = process.env.PCBOD_BASE_PATH ?? inferredBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
