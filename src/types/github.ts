export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  homepage: string | null;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  languages_url: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  private: boolean;
};

export type Project = {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github: string;
  demo?: string;
  stars?: number;
  isGithubProject?: boolean;
};
