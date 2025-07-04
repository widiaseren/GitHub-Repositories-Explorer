import axios from 'axios';
import type { GithubUser, GithubRepo } from './types/userGithub';

const BASE_URL = 'https://api.github.com';

export const searchUsers = (username: string) => {
  return axios.get<{ items: GithubUser[] }>(
    `${BASE_URL}/search/users?q=${username}&per_page=5`
  );
};

export const getUserRepos = (username: string) => {
  return axios.get<GithubRepo[]>(`${BASE_URL}/users/${username}/repos`);
};