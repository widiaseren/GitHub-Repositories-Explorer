import Loading from "./Loading";
import EmptyData from "./EmptyData";

import { useGithubUserRepos } from "../hooks/useGithubUserRepos";
import type { GithubRepo } from "../api/types/userGithub";
import { StarFilled } from "@ant-design/icons";

type Props = {
  username: string;
};

export default function UserCard({ username }: Props) {
  const { data, isLoading } = useGithubUserRepos(username);

  if (isLoading) return <Loading />;
  if (!data || !data.length) return <EmptyData />;

  return (
    <>
      {data.map((repo: GithubRepo) => (
        <div
          key={repo.id}
          className="p-2 mt-2 bg-[#E0E0E0] hover:shadow-md transition cursor-pointer"
          onClick={() => window.open(repo.html_url, "_blank")}
        >
          <div className="p-1 x-2">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
              <div className="flex flex-col">
                <span className="font-bold break-words text-sm sm:text-xl">
                  {repo.name}
                </span>
                <span className="text-xs sm:text-base break-words text-gray-800">
                  {repo.description || "No description"}
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 self-start sm:self-auto text-black">
                <span className="font-bold">{repo.forks_count}</span>
                <StarFilled />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
