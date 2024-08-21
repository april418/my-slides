export type GithubContentDescriptor = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
};

export async function getContentDescriptors({
  path,
}: {
  path: string;
}): Promise<GithubContentDescriptor[]> {
  const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER;
  const repo = process.env.NEXT_PUBLIC_GITHUB_REPO;
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
  );
  return await res.json();
}

export async function getContent({path}: {path: string}): Promise<string> {
  const res = await fetch(
    `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_GITHUB_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_REPO}/${process.env.NEXT_PUBLIC_GITHUB_BRANCH}/${path}`
  );
  return await res.text();
}
