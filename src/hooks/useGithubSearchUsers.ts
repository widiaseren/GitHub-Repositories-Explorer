import { useQuery } from '@tanstack/react-query';
import { searchUsers } from '../api/userGithub';
import type { GithubUser } from '../api/types/userGithub';

export function useGithubSearchUsers(username: string) {
  return useQuery<GithubUser[]>({
    queryKey: ['users', username],
    queryFn: () =>
      searchUsers(username).then((res) => res.data.items),
    enabled: !!username,
  });
}