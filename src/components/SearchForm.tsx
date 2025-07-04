import { useState } from "react";

type Props = {
  onSearch: (username: string) => void;
  isLoading?: boolean;
};

export default function SearchForm({ onSearch, isLoading = false }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed !== "") {
      onSearch(trimmed);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
      <input
        type="text"
        placeholder="Enter username"
        value={input}
        data-testid="search"
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-3 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
      />
      <button
        type="submit"
        disabled={isLoading}
        data-testid="btn-search"
        className={`w-full bg-[#2d9cdb] hover:bg-[#2d9cdb] text-white text-base font-semibold py-3 transition ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Loading..." : "Search"}
      </button>
    </form>
  );
}
