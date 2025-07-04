import { useQuery } from '@tanstack/react-query';
import { getUserRepos } from '../api/userGithub';
import type { GithubRepo } from '../api/types/userGithub';

export function useGithubUserRepos(username: string) {
  return useQuery<GithubRepo[]>({
    queryKey: ['repos', username],
    queryFn: () => getUserRepos(username).then(res => res.data),
    enabled: !!username,
  });
}