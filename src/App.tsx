import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css';

import SearchForm from "./components/SearchForm";
import UserList from "./components/UserList";

const queryClient = new QueryClient();

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <SearchForm onSearch={setUsername}/>
      {username && <UserList username={username} />}
    </QueryClientProvider>
  );
}
