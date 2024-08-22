declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GITHUB_OWNER: string;
    NEXT_PUBLIC_GITHUB_REPO: string;
    NEXT_PUBLIC_GITHUB_BRANCH: string;
    BASE_PATH: string;
  }
}
