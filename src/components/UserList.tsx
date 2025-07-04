import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import UserCard from "./UserCard";
import Loading from "./Loading";
import EmptyData from "./EmptyData";
import type { GithubUser } from "../api/types/userGithub";
import { useGithubSearchUsers } from "../hooks/useGithubSearchUsers";

type Props = {
  username: string;
};

export default function UserList({ username }: Props) {
  const { data, isLoading } = useGithubSearchUsers(username);
  const [activeKeys, setActiveKeys] = useState<number[]>([]);

  if (isLoading) return <Loading />;
  if (!data || !data.length) return <EmptyData />;

  const toggleCollapse = (id: number) => {
    setActiveKeys((prev) =>
      prev.includes(id) ? prev.filter((key) => key !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-2">
      {activeKeys.length === 0 && (
        <p className="text-gray-500">Showing users for "{username}"</p>
      )}
      {data.map((user: GithubUser) => (
        <div key={user.id} className="mb-4 shadow-sm bg-[#F2F2F2]">
          <button
            onClick={() => toggleCollapse(user.id)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
            data-testid={`card-${user.id}`}
          >
            <span
              className="capitalize text-gray-950 font-semibold"
              data-testid={`username-${user.login}`}   // <--- added test id here
            >
              {user.login}
            </span>
            {activeKeys.includes(user.id) ? (
              <UpOutlined className="text-gray-600" />
            ) : (
              <DownOutlined className="text-gray-600" />
            )}
          </button>
          {activeKeys.includes(user.id) && (
            <div className="pl-8 pb-4">
              <UserCard username={user.login} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}