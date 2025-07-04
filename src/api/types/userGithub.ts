export interface GithubUser {
  id: number;
  login: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  forks_count: number;
}